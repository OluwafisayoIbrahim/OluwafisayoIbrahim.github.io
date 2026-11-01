"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { CautionSequencer, type CautionSample } from "@/lib/caution-sequencer";
const Scene = dynamic(() => import("@/components/projects/c-caution/c-caution-renderer"), { ssr: false, loading: () => <p className="caution-loading">Loading the 3D sign…</p> });
const initial: CautionSample = { state: "boot", redGroup: -1, greenMask: 0, cycles: 0 };
const names = { boot: "Starting up", arm: "Synchronising clock", red: "Red perimeter chase", finish: "Finishing red chase", gap: "300 ms pause", green: "Green C sweep", end: "500 ms pause", fault: "Clock fault · LEDs off" };
export function CCautionPreview() {
  const [playing, setPlaying] = useState(false);
  const [powered, setPowered] = useState(true);
  const [sample, setSample] = useState(initial);
  const [view, setView] = useState<"front" | "back" | "angle">("angle");
  const sequencer = useRef(new CautionSequencer());
  const elapsed = useRef(0);
  useEffect(() => {
    if (!playing || !powered) return;
    let frame = 0, previous = performance.now();
    const update = (now: number) => {
      if (document.visibilityState === "visible") elapsed.current += Math.min(now - previous, 100);
      previous = now;
      const next = sequencer.current.advance(elapsed.current);
      setSample(old => old.state === next.state && old.redGroup === next.redGroup && old.greenMask === next.greenMask && old.cycles === next.cycles ? old : next);
      frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [playing, powered]);
  function reset() { sequencer.current = new CautionSequencer(); elapsed.current = 0; setSample(initial); }
  return <div className="caution-demo">
    <div className="caution-stage caution-3d-stage">
      <p className="editorial-label caution-stage-label">C-Caution / interactive 3D prototype</p>
      <div className="caution-canvas" role="group" aria-label="Rotatable triangular C-Caution model with red border LEDs, a green C and a plain black back cover" aria-describedby="caution-gesture-help">
        <Scene sample={sample} powered={powered} view={view} />
      </div>
      <p id="caution-gesture-help" className="caution-gesture-help">Use the view buttons below · drag and zoom in 3D mode</p>
    </div>
    <div className="caution-controls" aria-label="C-Caution model controls">
      <button type="button" disabled={!powered} aria-pressed={playing} onClick={() => setPlaying(!playing)}>{playing ? "Pause" : "Play"} sequence</button>
      <button type="button" aria-pressed={powered} onClick={() => { setPowered(!powered); setPlaying(false); reset(); }}>Power {powered ? "on" : "off"}</button>
      <button type="button" onClick={reset}>Restart sequence</button>
      {(["front", "angle", "back"] as const).map(option => <button key={option} type="button" aria-pressed={view === option} onClick={() => setView(option)}>{option === "angle" ? "Angled view" : option === "back" ? "Black back cover" : "Front view"}</button>)}
    </div>
    <p className="caution-sequence-status" role="status">{!powered ? "Power off" : !playing ? `Paused · ${names[sample.state]}` : names[sample.state]}{powered && sample.redGroup >= 0 ? ` · Q${sample.redGroup} · 5 red LEDs` : ""}{powered && sample.greenMask ? ` · green LED ${Math.log2(sample.greenMask) + 1} of 12` : ""}</p>
    <p className="caution-disclaimer"> This is a visual reconstruction of the prototype, not an electrical simulation.</p>
  </div>;
}
