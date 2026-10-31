"use client";
import { useEffect, useState } from "react";
import {
  cachedCityTrivia,
  findCityTrivia,
  type CityStory,
} from "@/lib/city-trivia";
import type { WorldCity } from "@/types/world";

export function CityTrivia({ city }: { city: WorldCity }) {
  const [fact, setFact] = useState<CityStory | null | undefined>(undefined);
  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    const timeout = setTimeout(() => controller.abort(), 10000);
    async function choose() {
      try {
        const facts =
          cachedCityTrivia(city.id) ??
          (await findCityTrivia(city, controller.signal));
        if (!active) return;
        if (facts.length < 2) {
          setFact(null);
          return;
        }
        const key = `city-fact:${city.id}`;
        let previous: string | null = null;
        try {
          previous = localStorage.getItem(key);
        } catch {}
        const choices = facts.filter((item) => item.text !== previous);
        const next = choices[Math.floor(Math.random() * choices.length)];
        try {
          localStorage.setItem(key, next.text);
        } catch {}
        setFact(next);
      } catch {
        if (active) setFact(null);
      }
    }
    void choose();
    return () => {
      active = false;
      clearTimeout(timeout);
      controller.abort();
    };
  }, [city]);
  return (
    <div className="hello-facts">
      <h4 className="editorial-label">Fun fact about {city.name}</h4>
      <div aria-live="polite">
        {fact === undefined ? (
          <p>Finding a fun fact…</p>
        ) : fact ? (
          <>
            <p className="hello-single-fact">{fact.text}</p>
            <a className="hello-source" href={fact.source}>
              Source: {fact.sourceName} <span aria-hidden="true">↗</span>
            </a>
            {fact.excerpt && (
              <span className="hello-source">
                {" "}
                · Wikipedia ·{" "}
                <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                  CC BY-SA 4.0
                </a>
              </span>
            )}
          </>
        ) : (
          <p>No fun facts available for this city yet.</p>
        )}
      </div>
    </div>
  );
}
