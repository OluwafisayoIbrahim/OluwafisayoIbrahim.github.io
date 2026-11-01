/** Check the WebGL2 API required by Three.js before constructing a renderer. */
export function supportsWebGL2(createCanvas: () => HTMLCanvasElement = () => document.createElement("canvas")): boolean {
  let context: WebGL2RenderingContext | null = null;
  try {
    context = createCanvas().getContext("webgl2", { alpha: true, antialias: true });
    return context !== null;
  } catch {
    return false;
  } finally {
    // The capability probe must not consume a browser GPU context slot.
    context?.getExtension("WEBGL_lose_context")?.loseContext();
  }
}
