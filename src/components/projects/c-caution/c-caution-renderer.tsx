"use client";

import dynamic from "next/dynamic";
import { Component, useEffect, useState, type ReactNode } from "react";
import type { CautionSample } from "@/lib/caution-sequencer";
import { supportsWebGL2 } from "@/lib/webgl-support";
import { CCautionFallback } from "./c-caution-fallback";
const Scene = dynamic(() => import("./c-caution-scene"), { ssr: false, loading: () => <p className="caution-loading">Loading the 3D sign…</p> });
type Props = { sample: CautionSample; powered: boolean; view: "front" | "back" | "angle" };
class RendererBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? this.props.fallback : this.props.children; }
}
export default function CCautionRenderer(props: Props) {
  const [support, setSupport] = useState<"checking" | "ready" | "unavailable">("checking");
  useEffect(() => {
    const timer = window.setTimeout(() => setSupport(supportsWebGL2() ? "ready" : "unavailable"), 0);
    return () => window.clearTimeout(timer);
  }, []);
  if (support === "checking") return <p className="caution-loading">Preparing the sign…</p>;
  const fallback = <CCautionFallback {...props} />;
  if (support === "unavailable") return fallback;
  return <RendererBoundary fallback={fallback}><Scene {...props} onUnavailable={() => setSupport("unavailable")} /></RendererBoundary>;
}
