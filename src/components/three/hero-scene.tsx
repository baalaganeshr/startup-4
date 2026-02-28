"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, PointMaterial, Points } from "@react-three/drei";
import * as THREE from "three";

/* ═══════════════════════════════════════════════════════════
   PARTICLE FIELD — Floating ambient particles
   ═══════════════════════════════════════════════════════════ */
function ParticleField({ count = 1200 }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return pos;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.015;
      ref.current.rotation.x += delta * 0.008;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#FADCD5"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
        opacity={0.5}
      />
    </Points>
  );
}

/* ═══════════════════════════════════════════════════════════
   FLOATING SHAPE — Individual 3D geometry
   ═══════════════════════════════════════════════════════════ */
function FloatingShape({
  position,
  color,
  shape,
  scale = 1,
  speed = 1,
}: {
  position: [number, number, number];
  color: string;
  shape: "icosahedron" | "torus" | "octahedron" | "dodecahedron";
  scale?: number;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.002 * speed;
    meshRef.current.rotation.z += 0.003 * speed;

    // Subtle mouse reactivity
    meshRef.current.position.x =
      position[0] + pointer.x * 0.2 * (position[2] > -3 ? 1 : 0.5);
    meshRef.current.position.y =
      position[1] + pointer.y * 0.2 * (position[2] > -3 ? 1 : 0.5);

    // Subtle floating
    meshRef.current.position.y +=
      Math.sin(state.clock.elapsedTime * 0.5 * speed + position[0]) * 0.003;
  });

  const geometries: Record<string, React.ReactNode> = {
    icosahedron: <icosahedronGeometry args={[1 * scale, 1]} />,
    torus: <torusGeometry args={[1 * scale, 0.35 * scale, 16, 32]} />,
    octahedron: <octahedronGeometry args={[1 * scale, 0]} />,
    dodecahedron: <dodecahedronGeometry args={[0.8 * scale, 0]} />,
  };

  return (
    <Float speed={speed * 1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        {geometries[shape]}
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.15}
          roughness={0.3}
          metalness={0.8}
          wireframe
        />
      </mesh>
    </Float>
  );
}

/* ═══════════════════════════════════════════════════════════
   GLOWING ORB — Central atmospheric element
   ═══════════════════════════════════════════════════════════ */
function GlowOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const scale = 1 + Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -6]}>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial
        color="#6D3C52"
        transparent
        opacity={0.05}
        emissive="#6D3C52"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

/* ═══════════════════════════════════════════════════════════
   HERO SCENE — Main Three.js Canvas
   ═══════════════════════════════════════════════════════════ */
export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0 }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} color="#FADCD5" />
      <pointLight position={[-4, -3, 3]} intensity={0.3} color="#6D3C52" />
      <pointLight position={[3, 4, -2]} intensity={0.15} color="#4B2138" />

      {/* Central Glow */}
      <GlowOrb />

      {/* Particles */}
      <ParticleField count={1000} />

      {/* Floating Shapes */}
      <FloatingShape
        position={[-3.5, 1.8, -2]}
        color="#6D3C52"
        shape="icosahedron"
        speed={0.7}
        scale={0.8}
      />
      <FloatingShape
        position={[3.5, -1.2, -3]}
        color="#4B2138"
        shape="torus"
        speed={1}
        scale={0.9}
      />
      <FloatingShape
        position={[-1.5, -2.5, -1.5]}
        color="#765D67"
        shape="octahedron"
        speed={0.5}
        scale={0.7}
      />
      <FloatingShape
        position={[2.5, 2.5, -4]}
        color="#FADCD5"
        shape="dodecahedron"
        speed={0.8}
        scale={0.6}
      />
      <FloatingShape
        position={[0.5, -0.5, -5]}
        color="#2D222F"
        shape="icosahedron"
        speed={0.3}
        scale={1.2}
      />

      {/* Fog for depth */}
      <fog attach="fog" args={["#1B0C1A", 8, 25]} />
    </Canvas>
  );
}
