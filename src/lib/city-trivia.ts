import { cityTrivia, type CityFact } from "@/content/city-trivia";
import type { WorldCity } from "@/types/world";

export interface CityStory extends CityFact {
  excerpt?: boolean;
}
const cache = new Map<string, readonly CityStory[]>();
const cacheKey = (id: string) => `city-trivia-v5:${id}`;
const cacheAge = 7 * 24 * 60 * 60 * 1000;

function isStory(value: unknown): value is CityStory {
  if (!value || typeof value !== "object") return false;
  const story = value as Partial<CityStory>;
  return (
    typeof story.text === "string" &&
    story.text.length <= 260 &&
    typeof story.sourceName === "string" &&
    story.sourceName.length <= 150 &&
    typeof story.source === "string" &&
    /^https:\/\/en\.wikipedia\.org\/\?curid=\d+$/.test(story.source) &&
    story.excerpt === true
  );
}
export function cachedCityTrivia(id: string): readonly CityStory[] | undefined {
  const saved = cityTrivia[id] ?? cache.get(id);
  if (saved) return saved;
  if (typeof window === "undefined") return undefined;
  try {
    const raw = sessionStorage.getItem(cacheKey(id));
    if (!raw) return undefined;
    const value = JSON.parse(raw);
    if (
      typeof value.savedAt !== "number" ||
      Date.now() - value.savedAt > cacheAge ||
      !Array.isArray(value.facts) ||
      value.facts.length < 2 ||
      value.facts.length > 12 ||
      !value.facts.every(isStory)
    )
      return undefined;
    cache.set(id, value.facts);
    return value.facts;
  } catch {
    return undefined;
  }
}
interface WikiPage {
  pageid: number;
  title: string;
  extract?: string;
  pageprops?: { disambiguation?: string };
}
let queue: Promise<unknown> = Promise.resolve();
let nextRequestAt = 0;
function pause(ms: number, signal: AbortSignal) {
  signal.throwIfAborted();
  return new Promise<void>((resolve, reject) => {
    const finish = () => {
      signal.removeEventListener("abort", abort);
      resolve();
    };
    const timer = setTimeout(finish, ms);
    const abort = () => {
      clearTimeout(timer);
      signal.removeEventListener("abort", abort);
      reject(signal.reason);
    };
    signal.addEventListener("abort", abort, { once: true });
  });
}
async function wiki(params: Record<string, string>, signal: AbortSignal) {
  const operation = queue.then(async () => {
    const query = new URLSearchParams({
      action: "query",
      format: "json",
      origin: "*",
      ...params,
    });
    for (let attempt = 0; attempt < 2; attempt++) {
      await pause(Math.max(0, nextRequestAt - Date.now()), signal);
      signal.throwIfAborted();
      nextRequestAt = Date.now() + 1500;
      const response = await fetch(
        `https://en.wikipedia.org/w/api.php?${query}`,
        {
          signal,
          credentials: "omit",
          referrerPolicy: "no-referrer",
        },
      );
      if (response.status === 429 || response.status === 503) {
        const retry = Number(response.headers.get("retry-after"));
        nextRequestAt =
          Date.now() +
          Math.max(1500, Number.isFinite(retry) ? retry * 1000 : 2000);
        if (attempt === 0) continue;
        throw new Error("Wikipedia is busy. Please try again shortly.");
      }
      if (!response.ok) throw new Error("Facts unavailable");
      const data = await response.json();
      if (data.error) throw new Error("Facts unavailable");
      return data;
    }
    throw new Error("Facts unavailable");
  });
  queue = operation.catch(() => undefined);
  return operation;
}

export async function findCityTrivia(
  city: WorldCity,
  signal: AbortSignal,
): Promise<readonly CityStory[]> {
  const saved = cachedCityTrivia(city.id);
  if (saved) return saved;
  const nearby = (await wiki(
    {
      list: "geosearch",
      gscoord: `${city.lat}|${city.lon}`,
      gsradius: "10000",
      gslimit: "500",
    },
    signal,
  )) as {
    query?: { geosearch?: { pageid: number; title: string }[] };
  };
  const cultural =
    /museum|musée|festival|gallery|castle|palace|temple|garden|park|stadium|bridge|library|sculpture|observatory|cinema|mosque|cathedral|church|basilica|basilique|shrine|abbey|bookstore|bookshop|tower|palais|jardin|theat(?:re|er)|opera|monument|memorial|heritage|pyramid|fortress|fountain|market|railway|station|aquarium|zoo|white house|clock|canal/i;
  const unsuitable =
    /fire\b|homeless|rescue mission|shelter|attack|hospital|prison|massacre|murder|killed|slav(?:e|ery)|terror|disaster|collapse|war\b|protest|poverty|alleged|disputed|scheduled|planned|proposed|expected to|will be|under construction|elected|election|constituenc|first-past|House of Representatives|Senate|Parliament|National Assembly/i;
  const normalized = (text: string) =>
    text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  const cityNames = [normalized(city.name), normalized(city.ascii)];
  const isCityPage = (title: string) =>
    cityNames.includes(normalized(title.split(/[,()]/)[0]));
  const priority = (title: string) =>
    (isCityPage(title) ? 100 : 0) +
    (/national|central|royal|grand|great|museum|tower|monument|memorial|palace|cathedral|pyramid|aquarium|zoo|white house|castle|clock|bridge/i.test(
      title,
    )
      ? 5
      : 0);
  const orderedPages = (nearby.query?.geosearch ?? [])
    .filter(
      (page) =>
        !unsuitable.test(page.title) &&
        (cultural.test(page.title) || isCityPage(page.title)),
    )
    .sort((a, b) => priority(b.title) - priority(a.title));
  // Keep a mix of landmarks rather than filling the shortlist with museums or stations.
  const categories = new Map<string, number>();
  const pages = orderedPages
    .filter((page) => {
      const kind = isCityPage(page.title)
        ? "city"
        : /museum|gallery|musée/i.test(page.title)
          ? "museum"
          : /church|cathedral|mosque|temple|basilica/i.test(page.title)
            ? "religion"
            : /palace|castle|fortress/i.test(page.title)
              ? "castle"
              : /station|railway/i.test(page.title)
                ? "transport"
                : /tower|clock/i.test(page.title)
                  ? "tower"
                  : "other";
      const count = categories.get(kind) ?? 0;
      if (count >= (kind === "other" ? 8 : 4)) return false;
      categories.set(kind, count + 1);
      return true;
    })
    .slice(0, 30);
  if (!pages.length) return [];
  // Founding dates and geographic descriptions alone are not fun facts.
  const distinctive =
    /world.s (?:first|oldest|largest|smallest|longest|shortest|tallest)|(?:oldest|largest|smallest|longest|shortest|tallest|first of its kind)|named after|nicknamed|nickname|invented|inspired by|originally (?:intended|designed|built|used)|once (?:a|an|used|served)|only (?:one|surviving|remaining)|whisper|secret|hidden|unusual|unique|purpose-built|man-made|artificial|reversed|rooftop|floating|human face|first (?:passenger|public|underground|electric|railway|museum|library|national park)/i;
  const score = (text: string) =>
    (/world.s|oldest|largest|smallest|longest|shortest|tallest|first of its kind/i.test(
      text,
    )
      ? 6
      : 0) +
    (/invented|inspired by|originally|once |only |whisper|secret|hidden|unusual|unique|purpose-built|man-made|artificial|reversed|floating/i.test(
      text,
    )
      ? 8
      : 0) +
    (/named after|nicknamed|nickname/i.test(text) ? 4 : 0);
  const ordinary =
    /population|populous|metropolitan|agglomeration|capital and largest|capital of|largest cit|smallest state|(?:\d+(?:st|nd|rd|th)|second|third|fourth|fifth|sixth|eleventh)[ -]tallest|currently the tallest|standing at|with a height of|square (?:feet|metres|meters)|purpose-built museum|underground (?:rapid transit |premium |metro )?station|^Opened in|^Founded in|^Established in|^There were|^The museum|^The building|^The sculpture|^An Egyptological museum|originally used as a terminus|describes itself|would have|had it been|^lying on|^private funding|\(\)/i;
  const candidates: { fact: CityStory; score: number }[] = [];
  for (let offset = 0; offset < pages.length; offset += 15) {
    const batch = pages.slice(offset, offset + 15);
    const data = (await wiki(
      {
        pageids: batch.map((page) => page.pageid).join("|"),
        prop: "extracts|pageprops",
        exintro: "1",
        explaintext: "1",
        exlimit: "15",
        exchars: "1200",
      },
      signal,
    )) as { query?: { pages?: Record<string, WikiPage> } };
    for (const page of Object.values(data.query?.pages ?? {})) {
      if (
        !page.extract ||
        page.pageprops?.disambiguation !== undefined ||
        unsuitable.test(page.title)
      )
        continue;
      const sentences = Array.from(
        new Intl.Segmenter("en", { granularity: "sentence" }).segment(
          page.extract,
        ),
        (part) => part.segment.trim(),
      );
      const useful = sentences
        .filter(
          (text) =>
            text.length >= 45 &&
            text.length <= 240 &&
            distinctive.test(text) &&
            !ordinary.test(text) &&
            !unsuitable.test(text) &&
            !/^(it|its|he|his|she|her|they|their|this|these|that|which)\b/i.test(
              text,
            ) &&
            !/\.{3}|…|\[[^\]]*\]/.test(text),
        )
        .sort((a, b) => score(b) - score(a))
        .slice(0, 2);
      for (const sentence of useful)
        candidates.push({
          fact: {
            text: sentence,
            source: `https://en.wikipedia.org/?curid=${page.pageid}`,
            sourceName: page.title,
            excerpt: true,
          },
          score: score(sentence),
        });
    }
    if (new Set(candidates.map((item) => item.fact.text)).size >= 3) break;
  }
  const unique = new Map<string, CityStory>();
  for (const item of candidates.sort((a, b) => b.score - a.score)) {
    if (!unique.has(item.fact.text)) unique.set(item.fact.text, item.fact);
  }
  const facts = Array.from(unique.values()).slice(0, 12);
  if (facts.length < 2) return [];
  cache.set(city.id, facts);
  try {
    sessionStorage.setItem(
      cacheKey(city.id),
      JSON.stringify({ savedAt: Date.now(), facts }),
    );
  } catch {}
  return facts;
}
