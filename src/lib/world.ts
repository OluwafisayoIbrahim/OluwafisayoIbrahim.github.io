import type { WorldCity, WorldManifest } from "@/types/world";
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
