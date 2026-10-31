type Point = readonly [number, number];
// Simplified geographic outlines for a lightweight, local SVG illustration.
const land: readonly (readonly Point[])[] = [
  [
    [-168, 70],
    [-140, 72],
    [-120, 60],
    [-100, 55],
    [-80, 50],
    [-55, 52],
    [-65, 35],
    [-80, 25],
    [-95, 15],
    [-110, 25],
    [-125, 45],
    [-150, 60],
  ],
  [
    [-80, 12],
    [-62, 10],
    [-48, -2],
    [-35, -10],
    [-45, -28],
    [-60, -55],
    [-75, -40],
    [-80, -10],
  ],
  [
    [-17, 35],
    [10, 37],
    [34, 31],
    [51, 12],
    [40, -12],
    [20, -35],
    [12, -25],
    [5, -5],
    [-15, 8],
  ],
  [
    [-10, 36],
    [-10, 60],
    [20, 72],
    [55, 70],
    [80, 75],
    [140, 65],
    [178, 55],
    [160, 45],
    [140, 35],
    [122, 20],
    [110, 0],
    [95, 10],
    [77, 7],
    [65, 25],
    [40, 30],
    [30, 42],
    [10, 35],
  ],
  [
    [112, -12],
    [135, -10],
    [154, -25],
    [145, -39],
    [116, -34],
  ],
  [
    [-52, 59],
    [-20, 70],
    [-40, 83],
    [-60, 80],
  ],
  [
    [46, -13],
    [51, -16],
    [47, -26],
    [43, -22],
  ],
  [
    [130, 32],
    [141, 45],
    [145, 42],
    [136, 31],
  ],
  [
    [166, -35],
    [178, -40],
    [170, -47],
    [164, -43],
  ],
];
function contains(lon: number, lat: number, polygon: readonly Point[]) {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, yi] = polygon[i],
      [xj, yj] = polygon[j];
    if (
      yi > lat !== yj > lat &&
      lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi
    )
      inside = !inside;
  }
  return inside;
}
const dots = Array.from({ length: 42 }, (_, row) => {
  const lat = -60 + row * 3.5;
  return Array.from({ length: 104 }, (_, col) => ({
    lat,
    lon: -180 + col * 3.5,
  })).filter((p) => land.some((polygon) => contains(p.lon, p.lat, polygon)));
}).flat();

export function WorldGlobe({
  location,
}: {
  location?: { name: string; lat: number; lon: number };
}) {
  const centerLon = location?.lon ?? 10,
    centerLat = location?.lat ?? 15;
  function project(lat: number, lon: number) {
    const rad = Math.PI / 180,
      a = lat * rad,
      d = (lon - centerLon) * rad,
      c = centerLat * rad;
    return {
      x: 160 + 130 * Math.cos(a) * Math.sin(d),
      y:
        160 -
        130 *
          (Math.cos(c) * Math.sin(a) - Math.sin(c) * Math.cos(a) * Math.cos(d)),
      visible:
        Math.sin(c) * Math.sin(a) + Math.cos(c) * Math.cos(a) * Math.cos(d) > 0,
    };
  }
  return (
    <figure className="hello-globe">
      <svg
        viewBox="0 0 320 320"
        role="img"
        aria-label={
          location
            ? `Globe centred on ${location.name}`
            : "Dotted globe showing the continents"
        }
      >
        <circle
          cx="160"
          cy="160"
          r="130"
          fill="var(--canvas)"
          stroke="var(--divider)"
        />
        <ellipse
          cx="160"
          cy="160"
          rx="130"
          ry="40"
          fill="none"
          stroke="var(--divider)"
          opacity=".6"
        />
        <ellipse
          cx="160"
          cy="160"
          rx="52"
          ry="130"
          fill="none"
          stroke="var(--divider)"
          opacity=".6"
        />
        {dots.map((dot, i) => {
          const p = project(dot.lat, dot.lon);
          return p.visible ? (
            <circle
              key={i}
              // Keep SVG attributes stable across server and browser math engines.
              cx={p.x.toFixed(3)}
              cy={p.y.toFixed(3)}
              r="1.7"
              fill="var(--editorial-blue)"
              opacity=".75"
            />
          ) : null;
        })}
        {location && (
          <g>
            <circle
              cx="160"
              cy="160"
              r="10"
              fill="var(--editorial-blue)"
              opacity=".15"
            />
            <circle
              cx="160"
              cy="160"
              r="4"
              fill="var(--editorial-blue)"
              stroke="var(--canvas)"
              strokeWidth="1.5"
            />
          </g>
        )}
      </svg>
      <figcaption className="editorial-label">
        {location ? location.name : "A shared world"}
      </figcaption>
    </figure>
  );
}
