import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";

const Gear = ({ position, rotation, scale, color, speed }: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  color: string;
  speed: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * speed;
    }
  });
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    const teeth = 8;
    const outerRadius = 1;
    const innerRadius = 0.7;
    const toothDepth = 0.15;

    for (let i = 0; i < teeth * 2; i++) {
      const angle = (i / (teeth * 2)) * Math.PI * 2 - Math.PI / 2;
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const nextAngle = ((i + 1) / (teeth * 2)) * Math.PI * 2 - Math.PI / 2;
      const nextRadius = (i + 1) % 2 === 0 ? outerRadius : innerRadius;

      if (i === 0) {
        s.moveTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
      }

      const midAngle = (angle + nextAngle) / 2;
      s.lineTo(Math.cos(midAngle) * (radius + toothDepth), Math.sin(midAngle) * (radius + toothDepth));
      s.lineTo(Math.cos(nextAngle) * nextRadius, Math.sin(nextAngle) * nextRadius);
    }
    s.closePath();

    const hole = new THREE.Path();
    hole.absarc(0, 0, 0.25, 0, Math.PI * 2, true);
    s.holes.push(hole);

    return s;
  }, []);

  const extrudeSettings = useMemo(() => ({
    steps: 1,
    depth: 0.2,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.05,
    bevelSegments: 3,
  }), []);

  return (
    <group position={position} rotation={rotation}>
      <mesh ref={meshRef} scale={scale}>
        <extrudeGeometry args={[shape, extrudeSettings]} />
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  );
};

const CoreShield = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1.2, 0]} />
        <MeshDistortMaterial
          color="#e74c3c"
          emissive="#e74c3c"
          emissiveIntensity={0.4}
          metalness={0.9}
          roughness={0.1}
          distort={0.15}
          speed={2}
        />
      </mesh>
      {/* Wireframe overlay */}
      <mesh>
        <octahedronGeometry args={[1.25, 0]} />
        <meshBasicMaterial color="#3498db" wireframe transparent opacity={0.15} />
      </mesh>
    </Float>
  );
};

const OrbitingRings = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = clock.getElapsedTime() * 0.3;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.02, 16, 100]} />
        <meshStandardMaterial color="#e74c3c" emissive="#e74c3c" emissiveIntensity={1} metalness={0.5} roughness={0.3} />
      </mesh>
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[2.0, 0.015, 16, 100]} />
        <meshStandardMaterial color="#3498db" emissive="#3498db" emissiveIntensity={1} metalness={0.5} roughness={0.3} />
      </mesh>
      <mesh rotation={[-Math.PI / 4, -Math.PI / 6, Math.PI / 3]}>
        <torusGeometry args={[2.2, 0.01, 16, 100]} />
        <meshStandardMaterial color="#f39c12" emissive="#f39c12" emissiveIntensity={0.8} metalness={0.5} roughness={0.3} />
      </mesh>
    </group>
  );
};

const Particles = () => {
  const ref = useRef<THREE.Points>(null);
  const count = 200;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.05;
      ref.current.rotation.x = clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#e74c3c"
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

const LogoModel = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#e74c3c" />
      <pointLight position={[-5, -2, -3]} intensity={1} color="#3498db" />
      <pointLight position={[0, 3, -5]} intensity={0.8} color="#f39c12" />
      <spotLight position={[0, 5, 0]} intensity={0.5} angle={0.5} penumbra={0.5} color="#ffffff" />

      <CoreShield />
      <OrbitingRings />
      <Particles />

      <Gear position={[2.5, 1.5, 0]} rotation={[0, 0, 0.3]} scale={0.6} color="#e74c3c" speed={0.8} />
      <Gear position={[-2.8, -0.8, 0.5]} rotation={[0.2, 0.1, -0.3]} scale={0.5} color="#3498db" speed={-0.6} />
      <Gear position={[1.5, -2.2, -0.3]} rotation={[0.1, 0.3, 0.6]} scale={0.45} color="#f39c12" speed={1.0} />
    </>
  );
};

const ThreeDLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <LogoModel />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeDLogo;
