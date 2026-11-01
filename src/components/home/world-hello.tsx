"use client";
import { CityTrivia } from "@/components/home/city-trivia";

import { useEffect, useRef, useState } from "react";
import { WorldGlobe } from "@/components/home/world-globe";
import { getCountryCities, timezoneLocation, cityContinent } from "@/lib/world";
import type { WorldCity, WorldManifest } from "@/types/world";

export function WorldHello() {
  const [manifest, setManifest] = useState<WorldManifest | null>(null);
  const [countryCode, setCountryCode] = useState("");
  const [cities, setCities] = useState<WorldCity[]>([]);
  const [city, setCity] = useState<WorldCity | null>(null);
  const [query, setQuery] = useState("");
  const [now, setNow] = useState<Date | null>(null);
  const [busy, setBusy] = useState(true);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [retry, setRetry] = useState(0);
  const request = useRef(0);
  useEffect(() => {
    const controller = new AbortController();
    const token = ++request.current;
    async function initialise() {
      try {
        const response = await fetch("/world/manifest.json?v=2", {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Locations could not be loaded.");
        const data: WorldManifest = await response.json();
        const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        let saved: { country: string; city: string } | null = null;
        try {
          const raw = localStorage.getItem("hello-place");
          const value = raw ? JSON.parse(raw) : null;
          if (
            value &&
            typeof value.city === "string" &&
            data.countries.some((item) => item.code === value.country)
          )
            saved = value;
        } catch {}
        const target = saved ??
          timezoneLocation(data, zone) ?? {
            country: "NG",
            city: "2332459",
          };
        const list = await getCountryCities(target.country, controller.signal);
        if (controller.signal.aborted || token !== request.current) return;
        setManifest(data);
        setCountryCode(target.country);
        setCities(list);
        setCity(
          list.find((item) => item.id === target.city) ?? list[0] ?? null,
        );
        setNow(new Date());
        setBusy(false);
        setError("");
        setNotice(
          saved
            ? "Showing your selected city."
            : "Showing a city in your browser timezone. Choose your own city below.",
        );
      } catch {
        if (!controller.signal.aborted && token === request.current) {
          setError("Locations could not be loaded. Please try again.");
          setBusy(false);
        }
      }
    }
    void initialise();
    const timer = setInterval(() => setNow(new Date()), 30000);
    return () => {
      controller.abort();
      clearInterval(timer);
    };
  }, [retry]);
  async function chooseCountry(code: string, preferredCity?: string) {
    const token = ++request.current;
    setCountryCode(code);
    setCity(null);
    setCities([]);
    setQuery("");
    setBusy(true);
    setError("");
    setNotice("");
    try {
      const list = await getCountryCities(code);
      if (token !== request.current) return;
      setCities(list);
      setCity(
        list.find((item) => item.id === preferredCity) ?? list[0] ?? null,
      );
      setNow(new Date());
    } catch {
      if (token === request.current)
        setError("Cities could not be loaded. Please try again.");
    } finally {
      if (token === request.current) setBusy(false);
    }
  }
  useEffect(() => {
    if (!city || !countryCode) return;
    try {
      localStorage.setItem(
        "hello-place",
        JSON.stringify({ country: countryCode, city: city.id }),
      );
    } catch {}
  }, [city, countryCode]);
  const country = manifest?.countries.find((item) => item.code === countryCode);
  const search = query
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
  const matches = cities.filter((item) =>
    `${item.name} ${item.ascii} ${item.region}`
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(search),
  );
  const shown = matches.slice(0, 300);
  const options =
    city && !shown.some((item) => item.id === city.id)
      ? [city, ...shown]
      : shown;

  const time =
    now && city
      ? new Intl.DateTimeFormat("en", {
          timeZone: city.zone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(now)
      : "—";
  return (
    <section
      id="hello"
      className="home-editorial hello-section"
      aria-labelledby="world-title"
    >
      <div className="page-container">
        <p className="editorial-label home-kicker">
          05 / A hello from your corner of the world
        </p>
        <h2 id="world-title" className="editorial-heading home-section-title">
          A little hello from your corner of the world.
        </h2>
        <div className="hello-grid">
          <div>
            <h3 className="editorial-heading hello-greeting">
              Hello from {city?.name ?? "your corner of the world"}.
            </h3>
            <p className="hello-country-name">{country?.name}</p>
            <p className="hello-clock">
              <time dateTime={now?.toISOString()}>{time}</time>
              {" · "}
              <span>
                {city && country
                  ? `${cityContinent(country, city)}/${city.name.replace(/\s+/g, "_")}`
                  : "Local time"}
              </span>
            </p>
            {city && <CityTrivia key={city.id} city={city} />}
            {!busy && country && !cities.length && !error && (
              <p className="research-summary">
                No cities are listed for this country or territory in the source
                data. Please choose another country.
              </p>
            )}
            <p className="hello-note">
              Your browser timezone suggests a starting city; it does not reveal
              your precise location. Select any country and city to explore.
            </p>
          </div>
          <aside className="hello-location" aria-label="Location preferences">
            <WorldGlobe
              location={
                city
                  ? { name: city.name, lat: city.lat, lon: city.lon }
                  : undefined
              }
            />
            <label className="hello-select-label" htmlFor="hello-country">
              Country or territory
            </label>
            <select
              id="hello-country"
              value={countryCode}
              disabled={!manifest}
              onChange={(event) => void chooseCountry(event.target.value)}
            >
              {!manifest && <option value="">Loading countries…</option>}
              {manifest?.countries.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.name}
                </option>
              ))}
            </select>
            <label className="hello-select-label" htmlFor="hello-city-search">
              Find a city
            </label>
            <input
              id="hello-city-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Type a city or region"
              disabled={busy || !cities.length}
              aria-describedby="hello-city-count"
            />
            <label className="hello-select-label" htmlFor="hello-city">
              City
            </label>
            <select
              id="hello-city"
              disabled={busy || !cities.length}
              value={city?.id ?? ""}
              onChange={(event) => {
                setCity(
                  cities.find((item) => item.id === event.target.value) ?? null,
                );
                setNow(new Date());
                setNotice("");
              }}
            >
              {!city && (
                <option value="">
                  {busy ? "Loading cities…" : "No city selected"}
                </option>
              )}
              {options.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                  {item.region ? `, ${item.region}` : ""}
                </option>
              ))}
            </select>
            <p className="hello-panel-note" id="hello-city-count">
              {busy
                ? "Loading locations…"
                : matches.length > 300
                  ? `Showing the first 300 of ${matches.length.toLocaleString("en")} matches. Type a city name to narrow the list.`
                  : `${matches.length.toLocaleString("en")} matching cities`}
            </p>
            {error && (
              <div role="alert">
                <p>{error}</p>
                <button
                  type="button"
                  onClick={() =>
                    manifest
                      ? void chooseCountry(countryCode)
                      : setRetry((value) => value + 1)
                  }
                >
                  Try again
                </button>
              </div>
            )}
            <button
              type="button"
              className="hello-use-city"
              disabled={!manifest || busy}
              onClick={() => {
                if (!manifest) return;
                const target = timezoneLocation(
                  manifest,
                  Intl.DateTimeFormat().resolvedOptions().timeZone,
                );
                if (target) void chooseCountry(target.country, target.city);
                else
                  setNotice(
                    "No matching city was found for your timezone. Please select one.",
                  );
              }}
            >
              Use my timezone
            </button>
            <p className="hello-status" role="status">
              {notice}
            </p>
            <p className="hello-panel-note">
              Country and city data:{" "}
              <a href="https://www.geonames.org/">GeoNames</a> ·{" "}
              <a href="https://creativecommons.org/licenses/by/4.0/">
                CC BY 4.0
              </a>
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
