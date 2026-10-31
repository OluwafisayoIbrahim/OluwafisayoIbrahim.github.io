export interface WorldCity {
  id: string;
  name: string;
  ascii: string;
  lat: number;
  lon: number;
  region: string;
  capital: boolean;
  population: number;
  elevation: number | null;
  zone: string;
}
export interface WorldCountry {
  code: string;
  name: string;
  capital: string;
  count: number;
}
export interface WorldManifest {
  countries: WorldCountry[];
  zones: Record<string, { country: string; city: string }>;
  cityCount: number;
}
