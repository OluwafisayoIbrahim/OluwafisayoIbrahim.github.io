export const vertices = [[0, 1.7], [-1.9, -1.45], [1.9, -1.45]] as const;
export const redPositions = Array.from({ length: 50 }, (_, i) => {
  const edge = i * 3 / 50, index = Math.floor(edge), t = edge - index;
  const a = vertices[index], b = vertices[(index + 1) % 3];
  return [(a[0] + (b[0] - a[0]) * t) * .89, (a[1] + (b[1] - a[1]) * t) * .89] as const;
});
export const greenPositions = Array.from({ length: 12 }, (_, i) => {
  const angle = (48 + i * 264 / 11) * Math.PI / 180;
  return [Math.cos(angle) * .63, Math.sin(angle) * .63 - .25] as const;
});
