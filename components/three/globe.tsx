"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function createGlobePoints(count: number, radius: number) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(-1 + (2 * i) / count);
    const theta = Math.sqrt(count * Math.PI) * phi;
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
    colors[i * 3] = 0.06; colors[i * 3 + 1] = 0.23; colors[i * 3 + 2] = 0.55;
  }
  return { positions, colors };
}

function GlobeSphere({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);
  const { positions, colors } = createGlobePoints(count, 1.5);
  useFrame((_, delta) => { if (ref.current) ref.current.rotation.y += delta * 0.05; });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.018} vertexColors transparent opacity={0.85} sizeAttenuation />
    </points>
  );
}

function GlobeWire() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => { if (ref.current) ref.current.rotation.y += delta * 0.05; });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshBasicMaterial color="#3B82F6" wireframe transparent opacity={0.12} />
    </mesh>
  );
}

export function Globe() {
  const count = typeof window !== "undefined" && window.innerWidth < 640 ? 800 : 1500;

  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }} dpr={[1, 2]} style={{ width: "100%", height: "100%" }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.7} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#3B82F6" />
        <pointLight position={[-5, -5, -5]} intensity={0.4} color="#06B6D4" />
        <GlobeWire />
        <GlobeSphere count={count} />
      </Suspense>
    </Canvas>
  );
}