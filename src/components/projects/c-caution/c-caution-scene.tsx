"use client";

import { useEffect, useMemo, useRef, type ComponentRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Path, Shape, type PerspectiveCamera as Camera } from "three";
import { vertices, redPositions, greenPositions } from "@/lib/caution-geometry";
import { CCautionFallback } from "./c-caution-fallback";
import type { CautionSample } from "@/lib/caution-sequencer";

function triangle(scale: number) {
  const shape = new Shape();
  vertices.forEach(([x, y], i) => i ? shape.lineTo(x * scale, y * scale) : shape.moveTo(x * scale, y * scale));
  shape.closePath(); return shape;
}
function Bulb({ position, color, lit }: { position: readonly [number, number]; color: "red" | "green"; lit: boolean }) {
  const bright = color === "red" ? "#ff2010" : "#20ff65";
  const dark = color === "red" ? "#8b1415" : "#137b39";
  return <group position={[position[0], position[1], .155]}>
    <mesh rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[.043, .043, .012, 12]} /><meshStandardMaterial color="#b7b6ab" metalness={.85} roughness={.3} /></mesh>
    <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, .035]}>
      <cylinderGeometry args={[.026, .031, .065, 12]} />
      <meshStandardMaterial color={lit ? bright : dark} emissive={bright} emissiveIntensity={lit ? 2.8 : .03} roughness={.22} metalness={.1} toneMapped={false} />
    </mesh>
    <mesh position={[0, 0, .069]}><sphereGeometry args={[.026, 12, 8]} /><meshStandardMaterial color={lit ? "#fff5df" : dark} emissive={bright} emissiveIntensity={lit ? 3 : .03} toneMapped={false} /></mesh>
    {lit && <mesh position={[0, 0, .015]}><circleGeometry args={[.082, 24]} /><meshBasicMaterial color={bright} transparent opacity={.22} depthWrite={false} /></mesh>}
  </group>;
}
type View = "front" | "back" | "angle";
const initialCamera: [number, number, number] = [3.4, 1.6, 5.8];
function CameraFit({ view }: { view: View }) {
  const size = useThree(state => state.size);
  const camera = useRef<Camera>(null);
  const controls = useRef<ComponentRef<typeof OrbitControls>>(null);
  const fov = Math.max(39, 2 * Math.atan(2.4 / (6.8 * (size.width / size.height))) * 180 / Math.PI);
  useEffect(() => {
    if (!camera.current || !controls.current) return;
    const position = view === "back" ? [0, .2, -6.8] : view === "angle" ? initialCamera : [0, .2, 6.8];
    camera.current.position.set(position[0], position[1], position[2]);
    controls.current.target.set(0, .05, 0);
    controls.current.update();
  }, [view]);
  return <>
    <PerspectiveCamera ref={camera} makeDefault position={initialCamera} fov={fov} />
    <OrbitControls ref={controls} makeDefault enablePan={false} minDistance={4.6} maxDistance={10} target={[0, .05, 0]} />
  </>;
}
function Sign({ sample, powered }: { sample: CautionSample; powered: boolean }) {
  const shapes = useMemo(() => {
    const border = triangle(.95);
    const hole = new Path();
    [...vertices].reverse().forEach(([x, y], i) => i ? hole.lineTo(x * .82, y * .82) : hole.moveTo(x * .82, y * .82));
    hole.closePath(); border.holes.push(hole);
    const letter = new Shape();
    const from = 42 * Math.PI / 180, to = 318 * Math.PI / 180;
    letter.absarc(0, -.25, .75, from, to, false);
    letter.lineTo(Math.cos(to) * .51, -.25 + Math.sin(to) * .51);
    letter.absarc(0, -.25, .51, to, from, true); letter.closePath();
    return { body: triangle(1), border, letter };
  }, []);
  return <group rotation={[-.08, -.12, 0]}>
    <mesh position={[0, 0, -.13]} castShadow receiveShadow>
      <extrudeGeometry args={[shapes.body, { depth: .24, bevelEnabled: true, bevelSize: .025, bevelThickness: .018, bevelSegments: 2, steps: 1 }]} />
      <meshStandardMaterial color="#101113" roughness={.42} metalness={.12} />
    </mesh>
    <mesh position={[0, 0, .135]}><shapeGeometry args={[shapes.border]} /><meshStandardMaterial color="#c2c2b4" roughness={.48} metalness={.75} /></mesh>
    <mesh position={[0, 0, .137]}><shapeGeometry args={[shapes.letter, 48]} /><meshStandardMaterial color="#b5b6a8" roughness={.5} metalness={.72} /></mesh>
    {redPositions.map((position, i) => <Bulb key={`r${i}`} position={position} color="red" lit={powered && sample.redGroup === i % 10} />)}
    {greenPositions.map((position, i) => <Bulb key={`g${i}`} position={position} color="green" lit={powered && Boolean(sample.greenMask & (1 << i))} />)}
  </group>;
}
export default function CCautionScene({ sample, powered, view, onUnavailable }: { sample: CautionSample; powered: boolean; view: View; onUnavailable: () => void }) {
  return <Canvas dpr={[1, 1.5]} frameloop="demand" gl={{ antialias: true, alpha: true }} fallback={<CCautionFallback sample={sample} powered={powered} view={view} />} onCreated={({ gl }) => {
    gl.domElement.addEventListener("webglcontextlost", onUnavailable, { once: true });
  }}>
    <CameraFit view={view} />
    <ambientLight intensity={.8} />
    <directionalLight position={[-3, 5, 6]} intensity={3} />
    <directionalLight position={[4, 1, -3]} intensity={1.8} color="#bcd6ff" />
    <Sign sample={sample} powered={powered} />
  </Canvas>;
}
