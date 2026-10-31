"use client";

import { useEffect, useState } from "react";
const redLights = [
  ...Array.from({ length: 14 }, (_, i) => ({ x: 130 + i * 37, y: 110 })),
  ...Array.from({ length: 14 }, (_, i) => ({ x: 611 - i * 37, y: 270 })),
  ...Array.from({ length: 3 }, (_, i) => ({ x: 130, y: 150 + i * 40 })),
  ...Array.from({ length: 3 }, (_, i) => ({ x: 611, y: 230 - i * 40 })),
];
const greenLights = [
  { x: 425, y: 150 },
  { x: 390, y: 150 },
  { x: 355, y: 150 },
  { x: 320, y: 150 },
  { x: 285, y: 150 },
  { x: 250, y: 165 },
  { x: 245, y: 190 },
  { x: 250, y: 215 },
  { x: 285, y: 230 },
  { x: 320, y: 230 },
  { x: 355, y: 230 },
  { x: 390, y: 230 },
];
export function CCautionPreview() {
  const [playing, setPlaying] = useState(false);
  const [powered, setPowered] = useState(true);
  const [tick, setTick] = useState(0);
  const [speed, setSpeed] = useState(250);
  const [red, setRed] = useState(true);
  const [green, setGreen] = useState(true);
  const [angle, setAngle] = useState(0);
  const [zoom, setZoom] = useState(1);
  useEffect(() => {
    if (!playing || !powered) return;
    const timer = setInterval(() => setTick((value) => value + 1), speed);
    return () => clearInterval(timer);
  }, [playing, powered, speed]);
  const phase = tick % 42;
  return (
    <div className="caution-demo">
      <div className="caution-stage">
        <p className="editorial-label caution-stage-label">
          Interactive LED sequence preview
        </p>
        <div
          className="caution-board"
          style={{
            transform: `perspective(900px) rotateY(${angle}deg) scale(${zoom})`,
          }}
        >
          <svg
            viewBox="0 0 760 380"
            role="img"
            aria-label="Illustrative C-Caution sign with red perimeter lights and a green C display"
          >
            <defs>
              <filter id="caution-glow">
                <feGaussianBlur stdDeviation="3" />
              </filter>
            </defs>
            <rect
              x="25"
              y="30"
              width="710"
              height="320"
              rx="12"
              fill="#1b2a3b"
            />
            <text
              x="470"
              y="200"
              textAnchor="middle"
              fill="#65d6ab"
              fontSize="20"
              letterSpacing="10"
              fontFamily="monospace"
            >
              C-CAUTION
            </text>
            {redLights.map((light, i) => {
              const lit =
                powered &&
                red &&
                (!playing || (phase < 30 && i % 10 === phase % 10));
              return (
                <g key={`r${i}`}>
                  <circle
                    {...{ cx: light.x, cy: light.y }}
                    r="9"
                    fill={lit ? "#ef626b" : "#49333e"}
                  />
                  {lit && (
                    <circle
                      cx={light.x}
                      cy={light.y}
                      r="12"
                      fill="#ef626b"
                      opacity=".5"
                      filter="url(#caution-glow)"
                    />
                  )}
                </g>
              );
            })}
            {greenLights.map((light, i) => {
              const lit =
                powered &&
                green &&
                (!playing || (phase >= 30 && i === phase - 30));
              return (
                <g key={`g${i}`}>
                  <circle
                    cx={light.x}
                    cy={light.y}
                    r="7"
                    fill={lit ? "#65d6ab" : "#25473f"}
                  />
                  {lit && (
                    <circle
                      cx={light.x}
                      cy={light.y}
                      r="10"
                      fill="#65d6ab"
                      opacity=".5"
                      filter="url(#caution-glow)"
                    />
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>
      <div className="caution-controls" aria-label="C-Caution preview controls">
        <button
          type="button"
          aria-pressed={playing}
          disabled={!powered}
          onClick={() => setPlaying((value) => !value)}
        >
          {playing ? "Pause" : "Play"} sequence
        </button>
        <button
          type="button"
          aria-pressed={powered}
          onClick={() => {
            setPowered((value) => !value);
            setPlaying(false);
          }}
        >
          Power {powered ? "on" : "off"}
        </button>
        <label>
          Speed
          <input
            aria-label="Sequence interval in milliseconds"
            type="range"
            min="80"
            max="500"
            step="10"
            value={speed}
            onChange={(event) => setSpeed(Number(event.target.value))}
          />
        </label>
        <button
          type="button"
          aria-pressed={red}
          onClick={() => setRed((value) => !value)}
        >
          Red LEDs
        </button>
        <button
          type="button"
          aria-pressed={green}
          onClick={() => setGreen((value) => !value)}
        >
          Green LEDs
        </button>
        <label>
          Rotate
          <input
            type="range"
            min="-35"
            max="35"
            value={angle}
            onChange={(event) => setAngle(Number(event.target.value))}
          />
        </label>
        <label>
          Zoom
          <input
            type="range"
            min=".7"
            max="1.15"
            step=".05"
            value={zoom}
            onChange={(event) => setZoom(Number(event.target.value))}
          />
        </label>
      </div>
      <p className="caution-disclaimer">
        Illustrative design preview, not an electrical circuit simulation. The
        documented prototype uses a triangular sign.
      </p>
    </div>
  );
}
