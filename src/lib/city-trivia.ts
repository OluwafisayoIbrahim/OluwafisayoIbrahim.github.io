import { cityTrivia, type CityFact } from "@/content/city-trivia";
import type { WorldCity } from "@/types/world";
export interface CityStory extends CityFact {
  excerpt?: boolean;
}
const cache = new Map<string, readonly CityStory[]>();
export function cachedCityTrivia(id: string) {
  return cityTrivia[id] ?? cache.get(id);
}
interface WikiPage {
  pageid: number;
  title: string;
  extract?: string;
  pageprops?: { disambiguation?: string };
}
async function wiki(params: Record<string, string>, signal: AbortSignal) {
  const query = new URLSearchParams({
    action: "query",
    format: "json",
    origin: "*",
    ...params,
  });
  const response = await fetch(`https://en.wikipedia.org/w/api.php?${query}`, {
    signal,
    credentials: "omit",
    referrerPolicy: "no-referrer",
  });
  if (!response.ok) throw new Error("Stories unavailable");
  return response.json();
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
  )) as { query?: { geosearch?: { pageid: number; title: string }[] } };
  const cultural =
    /museum|musée|festival|gallery|chapel|castle|palace|temple|garden|park|stadium|bridge|library|sculpture|observatory|cinema|mosque|cathedral|church|basilica|basilique|shrine|abbey|bookstore|bookshop|tower|palais|jardin|theat(?:re|er)|opera|monument|heritage/i;
  const unsuitable =
    /fire\b|attack|hospital|prison|massacre|murder|killed|slav(?:e|ery)|terror|disaster|collapse|war\b|protest|poverty|alleged|disputed|scheduled|planned|proposed|expected to|will be|under construction|elected|election|constituenc|first-past|House of Representatives|Senate|Parliament|National Assembly/i;
  const pages = (nearby.query?.geosearch ?? [])
    .filter(
      (page) =>
        !unsuitable.test(page.title) &&
        (cultural.test(page.title) ||
          page.title.toLowerCase() === city.name.toLowerCase()),
    )
    .sort(
      (a, b) =>
        Number(/museum|musée|gallery|festival|opera|bookstore/i.test(b.title)) *
          3 +
        Number(cultural.test(b.title)) -
        Number(/museum|musée|gallery|festival|opera|bookstore/i.test(a.title)) *
          3 -
        Number(cultural.test(a.title)),
    )
    .slice(0, 20);
  if (!pages.length) return [];
  const data = (await wiki(
    {
      pageids: pages.map((page) => page.pageid).join("|"),
      prop: "extracts|pageprops",
      exintro: "1",
      explaintext: "1",
      exlimit: "20",
      exchars: "1200",
    },
    signal,
  )) as { query?: { pages?: Record<string, WikiPage> } };
  const distinctive =
    /designed by|built (in|between)|constructed (in|between)|opened (in|on)|founded (in|by)|established (in|by)|oldest|world.s first|first (museum|railway|theatre|theater|library|university)|largest|smallest|longest|shortest|tallest|won\b|award|invent|named after|in hono[u]?r|heritage|annual|festival|collection|features|known for|home to|architect/i;
  const score = (text: string) =>
    (text.match(
      /festival|music|gallery|castle|palace|heritage|invent|oldest|first|architect|designed by|named after/gi,
    )?.length ?? 0) *
      3 +
    (/\b(1\d{3}|20[0-2]\d)\b/.test(text) ? 2 : 0);
  const candidates: { fact: CityStory; score: number }[] = [];
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
    const useful = sentences.filter(
      (text) =>
        text.length >= 65 &&
        text.length <= 260 &&
        distinctive.test(text) &&
        !unsuitable.test(text) &&
        !/^(it|he|she|they)\b/i.test(text) &&
        !text.includes("..."),
    );
    if (!useful.length) continue;
    const sentence = useful.sort((a, b) => score(b) - score(a))[0];
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
  const facts = candidates
    .sort((a, b) => b.score - a.score)
    .slice(0, 12)
    .map((item) => item.fact);
  if (facts.length < 2) return [];
  cache.set(city.id, facts);
  return facts;
}
