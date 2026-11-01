import { vertices, redPositions, greenPositions } from "@/lib/caution-geometry";
import type { CautionSample } from "@/lib/caution-sequencer";

export function CCautionFallback({ sample, powered, view }: { sample: CautionSample; powered: boolean; view: "front" | "back" | "angle" }) {
  return <div className="caution-2d-fallback">
    <p>3D is unavailable in this browser. Showing the animated 2D preview.</p>
    <svg viewBox="-2.2 -2 4.4 4" role="img" aria-label={view === "back" ? "Plain black back cover of the C-Caution sign" : "2D C-Caution sign with the same red and green LED sequence"} style={view === "angle" ? { transform: "perspective(900px) rotateY(-18deg) rotateX(8deg)" } : undefined}>
      <g transform="scale(1 -1)">
        <polygon points={vertices.map(p => p.join(",")).join(" ")} fill="#101113" stroke="#39414a" strokeWidth=".035" />
        {view !== "back" && <>
          <polygon points={vertices.map(([x,y]) => `${x*.89},${y*.89}`).join(" ")} fill="none" stroke="#bfc0b3" strokeWidth=".16" />
          <path d="M .468 .171 A .63 .63 0 1 1 .468 -.671" fill="none" stroke="#bfc0b3" strokeWidth=".24" />
          {redPositions.map(([x,y],i) => <circle key={`r${i}`} data-led="red" data-lit={powered && sample.redGroup === i%10} cx={x} cy={y} r=".037" fill={powered && sample.redGroup === i%10 ? "#ff6655" : "#8b1415"} />)}
          {greenPositions.map(([x,y],i) => <circle key={`g${i}`} data-led="green" data-lit={powered && Boolean(sample.greenMask & (1<<i))} cx={x} cy={y} r=".037" fill={powered && sample.greenMask & (1<<i) ? "#8bffb0" : "#137b39"} />)}
        </>}
      </g>
    </svg>
  </div>;
}
