import type {
  WorldCity,
  WorldManifest,
  WorldCountry,
  WorldContinent,
} from "@/types/world";
const cache = new Map<string, WorldCity[]>();
export async function getCountryCities(
  code: string,
  signal?: AbortSignal,
): Promise<WorldCity[]> {
  if (cache.has(code)) return cache.get(code)!;
  const response = await fetch(`/world/${encodeURIComponent(code)}.json`, {
    signal,
  });
  if (!response.ok) throw new Error("Cities could not be loaded.");
  const cities: WorldCity[] = await response.json();
  cache.set(code, cities);
  return cities;
}
export function timezoneLocation(manifest: WorldManifest, zone: string) {
  if (manifest.zones[zone]) return manifest.zones[zone];
  const canonical = (value: string) => {
    try {
      return new Intl.DateTimeFormat("en", {
        timeZone: value,
      }).resolvedOptions().timeZone;
    } catch {
      return value;
    }
  };
  const match = Object.keys(manifest.zones).find(
    (value) => canonical(value) === canonical(zone),
  );
  return match ? manifest.zones[match] : undefined;
}

// Geographic display labels are separate from the IANA timezone used by the clock.
// The seven-continent model groups Oceania under the requested "Australia" label.
export function cityContinent(
  country: WorldCountry,
  city: WorldCity,
): WorldContinent {
  if (country.code === "RU" && city.zone.startsWith("Asia/")) return "Asia";
  if (country.code === "ES" && city.zone === "Atlantic/Canary") return "Africa";
  if (country.code === "PT" && city.zone === "Atlantic/Madeira")
    return "Africa";
  if (country.code === "US" && city.zone === "Pacific/Honolulu")
    return "Australia";
  return country.continent;
}
