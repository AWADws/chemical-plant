import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, PresentationControls, Html, Text } from '@react-three/drei';
import { Group, Mesh } from 'three';
import { RotateCcw } from 'lucide-react';

interface ModelViewerProps {
  equipmentName: string;
}

function EquipmentModel({ equipmentName }: { equipmentName: string }) {
  const meshRef = useRef<Group>();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current && !hovered) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  const renderModel = () => {
    switch (equipmentName) {
      case 'CSTR (Continuous Stirred Tank Reactor)':
        return (
          <group>
            {/* Main Reactor Vessel */}
            <mesh position={[0, 0, 0]} scale={hovered ? 1.1 : 1}>
              <cylinderGeometry args={[1.2, 1.2, 2.5, 32]} />
              <meshStandardMaterial color={hovered ? "#3b82f6" : "#64748b"} metalness={0.8} roughness={0.2} />
            </mesh>
            
            {/* Reactor Head (Dished) */}
            <mesh position={[0, 1.25, 0]}>
              <sphereGeometry args={[1.2, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
              <meshStandardMaterial color={hovered ? "#3b82f6" : "#64748b"} metalness={0.8} roughness={0.2} />
            </mesh>
            
            {/* Agitator Shaft */}
            <mesh position={[0, 1.8, 0]}>
              <cylinderGeometry args={[0.05, 0.05, 1.5, 16]} />
              <meshStandardMaterial color="#374151" metalness={0.9} roughness={0.1} />
            </mesh>
            
            {/* Impeller Blades */}
            <mesh position={[0, 0.3, 0]}>
              <boxGeometry args={[0.8, 0.05, 0.15]} />
              <meshStandardMaterial color="#374151" metalness={0.9} roughness={0.1} />
            </mesh>
            <mesh position={[0, 0.3, 0]} rotation={[0, Math.PI / 2, 0]}>
              <boxGeometry args={[0.8, 0.05, 0.15]} />
              <meshStandardMaterial color="#374151" metalness={0.9} roughness={0.1} />
            </mesh>
            
            {/* Second Impeller */}
            <mesh position={[0, -0.3, 0]}>
              <boxGeometry args={[0.6, 0.05, 0.12]} />
              <meshStandardMaterial color="#374151" metalness={0.9} roughness={0.1} />
            </mesh>
            <mesh position={[0, -0.3, 0]} rotation={[0, Math.PI / 2, 0]}>
              <boxGeometry args={[0.6, 0.05, 0.12]} />
              <meshStandardMaterial color="#374151" metalness={0.9} roughness={0.1} />
            </mesh>
            
            {/* Inlet Nozzle */}
            <mesh position={[1.3, 0.8, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.12, 0.12, 0.6, 16]} />
              <meshStandardMaterial color="#9ca3af" metalness={0.7} roughness={0.3} />
            </mesh>
            
            {/* Outlet Nozzle */}
            <mesh position={[-1.3, -0.8, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.12, 0.12, 0.6, 16]} />
              <meshStandardMaterial color="#9ca3af" metalness={0.7} roughness={0.3} />
            </mesh>
            
            {/* Support Legs */}
            <mesh position={[0.8, -1.8, 0.8]}>
              <cylinderGeometry args={[0.08, 0.08, 1.2, 8]} />
              <meshStandardMaterial color="#374151" />
            </mesh>
            <mesh position={[-0.8, -1.8, 0.8]}>
              <cylinderGeometry args={[0.08, 0.08, 1.2, 8]} />
              <meshStandardMaterial color="#374151" />
            </mesh>
            <mesh position={[0.8, -1.8, -0.8]}>
              <cylinderGeometry args={[0.08, 0.08, 1.2, 8]} />
              <meshStandardMaterial color="#374151" />
            </mesh>
            <mesh position={[-0.8, -1.8, -0.8]}>
              <cylinderGeometry args={[0.08, 0.08, 1.2, 8]} />
              <meshStandardMaterial color="#374151" />
            </mesh>
          </group>
        );
        
      case 'Autoclave Reactor':
        return (
          <group>
            {/* Main Pressure Vessel */}
            <mesh position={[0, 0, 0]} scale={hovered ? 1.1 : 1}>
              <capsuleGeometry args={[1.2, 2.5, 4, 8]} />
              <meshStandardMaterial color={hovered ? "#f59e0b" : "#a16207"} metalness={0.9} roughness={0.1} />
            </mesh>
            
            {/* Pressure Relief Valve */}
            <mesh position={[0, 1.8, 0]}>
              <cylinderGeometry args={[0.1, 0.1, 0.3, 8]} />
              <meshStandardMaterial color="#ef4444" />
            </mesh>
            
            {/* Manhole */}
            <mesh position={[1.3, 0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.25, 0.25, 0.2, 16]} />
              <meshStandardMaterial color="#6b7280" />
            </mesh>
            
            {/* Inlet/Outlet Nozzles */}
            <mesh position={[0, -1.5, 1.3]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.15, 0.15, 0.6, 16]} />
              <meshStandardMaterial color="#9ca3af" />
            </mesh>
            <mesh position={[0, -1.5, -1.3]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.15, 0.15, 0.6, 16]} />
              <meshStandardMaterial color="#9ca3af" />
            </mesh>
            
            {/* Support Legs */}
            <mesh position={[0.9, -2.2, 0.9]}>
              <cylinderGeometry args={[0.1, 0.1, 1.5, 8]} />
              <meshStandardMaterial color="#374151" />
            </mesh>
            <mesh position={[-0.9, -2.2, 0.9]}>
              <cylinderGeometry args={[0.1, 0.1, 1.5, 8]} />
              <meshStandardMaterial color="#374151" />
            </mesh>
            <mesh position={[0.9, -2.2, -0.9]}>
              <cylinderGeometry args={[0.1, 0.1, 1.5, 8]} />
              <meshStandardMaterial color="#374151" />
            </mesh>
            <mesh position={[-0.9, -2.2, -0.9]}>
              <cylinderGeometry args={[0.1, 0.1, 1.5, 8]} />
              <meshStandardMaterial color="#374151" />
            </mesh>
          </group>
        );
        
      case 'Centrifuge':
        return (
          <group>
            {/* Main Bowl */}
            <mesh position={[0, 0, 0]} scale={hovered ? 1.1 : 1}>
              <cylinderGeometry args={[1.3, 0.9, 1.2, 32]} />
              <meshStandardMaterial color={hovered ? "#ef4444" : "#dc2626"} metalness={0.7} roughness={0.3} />
            </mesh>
            
            {/* Lid with Hinges */}
            <mesh position={[0, 0.6, 0]}>
              <cylinderGeometry args={[1.3, 1.3, 0.15, 32]} />
              <meshStandardMaterial color="#9ca3af" metalness={0.8} roughness={0.2} />
            </mesh>
            
            {/* Drive Motor */}
            <mesh position={[0, -0.8, 0]}>
              <cylinderGeometry args={[0.4, 0.4, 0.8, 16]} />
              <meshStandardMaterial color="#374151" metalness={0.9} roughness={0.1} />
            </mesh>
            
            {/* Base Frame */}
            <mesh position={[0, -1.4, 0]}>
              <cylinderGeometry args={[1.5, 1.5, 0.3, 32]} />
              <meshStandardMaterial color="#374151" metalness={0.9} roughness={0.1} />
            </mesh>
            
            {/* Discharge Chute */}
            <mesh position={[1.4, -0.2, 0]} rotation={[0, 0, -Math.PI / 6]}>
              <boxGeometry args={[0.3, 0.8, 0.2]} />
              <meshStandardMaterial color="#6b7280" />
            </mesh>
            
            {/* Control Panel */}
            <mesh position={[-1.2, 0.3, 0]}>
              <boxGeometry args={[0.2, 0.6, 0.4]} />
              <meshStandardMaterial color="#1f2937" />
            </mesh>
          </group>
        );
        
      case 'Dryer':
        return (
          <group>
            {/* Main Drum (Horizontal) */}
            <mesh position={[0, 0, 0]} scale={hovered ? 1.1 : 1} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[1, 1, 3.5, 32]} />
              <meshStandardMaterial color={hovered ? "#10b981" : "#059669"} metalness={0.8} roughness={0.2} />
            </mesh>
            
            {/* Inlet Hood */}
            <mesh position={[-1.8, 0.5, 0]}>
              <coneGeometry args={[0.6, 0.8, 16]} />
              <meshStandardMaterial color="#6b7280" />
            </mesh>
            
            {/* Outlet Hood */}
            <mesh position={[1.8, -0.5, 0]}>
              <coneGeometry args={[0.6, 0.8, 16]} />
              <meshStandardMaterial color="#6b7280" />
            </mesh>
            
            {/* Drive System */}
            <mesh position={[-2.2, 0, 0]}>
              <cylinderGeometry args={[0.3, 0.3, 0.6, 16]} rotation={[0, 0, Math.PI / 2]} />
              <meshStandardMaterial color="#374151" />
            </mesh>
            
            {/* Support Structure */}
            <mesh position={[1.2, -1.5, 0]}>
              <boxGeometry args={[0.2, 1.5, 0.2]} />
              <meshStandardMaterial color="#374151" />
            </mesh>
            <mesh position={[-1.2, -1.5, 0]}>
              <boxGeometry args={[0.2, 1.5, 0.2]} />
              <meshStandardMaterial color="#374151" />
            </mesh>
            
            {/* Lifting Flights (Internal) */}
            <mesh position={[0.5, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
              <boxGeometry args={[0.1, 1.8, 0.1]} />
              <meshStandardMaterial color="#9ca3af" />
            </mesh>
            <mesh position={[-0.5, 0, 0]} rotation={[0, 0, -Math.PI / 4]}>
              <boxGeometry args={[0.1, 1.8, 0.1]} />
              <meshStandardMaterial color="#9ca3af" />
            </mesh>
          </group>
        );
        
      case 'Flash Tank':
        return (
          <group>
            {/* Main Vessel */}
            <mesh position={[0, 0, 0]} scale={hovered ? 1.1 : 1}>
              <cylinderGeometry args={[1.2, 1.2, 3, 32]} />
              <meshStandardMaterial color={hovered ? "#f97316" : "#ea580c"} metalness={0.8} roughness={0.2} />
            </mesh>
            
            {/* Top Dome */}
            <mesh position={[0, 1.5, 0]}>
              <sphereGeometry args={[1.2, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
              <meshStandardMaterial color={hovered ? "#f97316" : "#ea580c"} metalness={0.8} roughness={0.2} />
            </mesh>
            
            {/* Bottom Cone */}
            <mesh position={[0, -1.5, 0]}>
              <coneGeometry args={[1.2, 0.8, 32]} />
              <meshStandardMaterial color={hovered ? "#f97316" : "#ea580c"} metalness={0.8} roughness={0.2} />
            </mesh>
            
            {/* Vapor Outlet (Top) */}
            <mesh position={[0, 2.2, 0]}>
              <cylinderGeometry args={[0.2, 0.2, 0.6, 16]} />
              <meshStandardMaterial color="#9ca3af" />
            </mesh>
            
            {/* Liquid Inlet */}
            <mesh position={[1.3, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.15, 0.15, 0.6, 16]} />
              <meshStandardMaterial color="#9ca3af" />
            </mesh>
            
            {/* Liquid Outlet (Bottom) */}
            <mesh position={[0, -2.1, 0]}>
              <cylinderGeometry args={[0.12, 0.12, 0.4, 16]} />
              <meshStandardMaterial color="#9ca3af" />
            </mesh>
            
            {/* Internal Demister Pad */}
            <mesh position={[0, 1, 0]}>
              <cylinderGeometry args={[1, 1, 0.2, 32]} />
              <meshStandardMaterial color="#6b7280" transparent opacity={0.7} />
            </mesh>
          </group>
        );
        
      case 'Compressor':
        return (
          <group>
            {/* Main Casing */}
            <mesh position={[0, 0, 0]} scale={hovered ? 1.1 : 1}>
              <boxGeometry args={[2.5, 1.2, 1.8]} />
              <meshStandardMaterial color={hovered ? "#6b7280" : "#4b5563"} metalness={0.8} roughness={0.2} />
            </mesh>
            
            {/* Motor */}
            <mesh position={[-1.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.5, 0.5, 1.5, 16]} />
              <meshStandardMaterial color="#374151" metalness={0.9} roughness={0.1} />
            </mesh>
            
            {/* Cooling Fins */}
            <mesh position={[0.8, 0.7, 0]}>
              <boxGeometry args={[1, 0.1, 1.5]} />
              <meshStandardMaterial color="#9ca3af" />
            </mesh>
            <mesh position={[0.8, 0.5, 0]}>
              <boxGeometry args={[1, 0.1, 1.5]} />
              <meshStandardMaterial color="#9ca3af" />
            </mesh>
            <mesh position={[0.8, 0.3, 0]}>
              <boxGeometry args={[1, 0.1, 1.5]} />
              <meshStandardMaterial color="#9ca3af" />
            </mesh>
            
            {/* Suction Inlet */}
            <mesh position={[0.5, 0.8, 1]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.25, 0.25, 0.6, 16]} />
              <meshStandardMaterial color="#9ca3af" />
            </mesh>
            
            {/* Discharge Outlet */}
            <mesh position={[1.4, 0, 0.9]} rotation={[0, Math.PI / 2, 0]}>
              <cylinderGeometry args={[0.2, 0.2, 0.6, 16]} />
              <meshStandardMaterial color="#9ca3af" />
            </mesh>
            
            {/* Base Skid */}
            <mesh position={[0, -0.8, 0]}>
              <boxGeometry args={[3, 0.2, 2]} />
              <meshStandardMaterial color="#374151" />
            </mesh>
          </group>
        );
        
      case 'Pump':
        return (
          <group>
            {/* Pump Casing (Volute) */}
            <mesh position={[0, 0, 0]} scale={hovered ? 1.1 : 1}>
              <torusGeometry args={[0.8, 0.4, 16, 32]} />
              <meshStandardMaterial color={hovered ? "#4ade80" : "#22c55e"} metalness={0.8} roughness={0.2} />
            </mesh>
            
            {/* Motor */}
            <mesh position={[-1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.4, 0.4, 1.8, 16]} />
              <meshStandardMaterial color="#374151" metalness={0.9} roughness={0.1} />
            </mesh>
            
            {/* Suction Nozzle */}
            <mesh position={[0, 0.8, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.2, 0.2, 0.6, 16]} />
              <meshStandardMaterial color="#9ca3af" />
            </mesh>
            
            {/* Discharge Nozzle */}
            <mesh position={[0.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.15, 0.15, 0.6, 16]} />
              <meshStandardMaterial color="#9ca3af" />
            </mesh>
            
            {/* Coupling */}
            <mesh position={[-0.6, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.15, 0.15, 0.3, 16]} />
              <meshStandardMaterial color="#ef4444" />
            </mesh>
            
            {/* Base Plate */}
            <mesh position={[-0.6, -0.6, 0]}>
              <boxGeometry args={[2.5, 0.15, 1]} />
              <meshStandardMaterial color="#374151" />
            </mesh>
          </group>
        );
        
      case 'NaOH Storage Tank':
      case 'Phenol Storage Tank':
      case 'CO2 Storage Tank':
      case 'H2SO4 Storage Tank':
      case 'Water Storage Tank':
        return (
          <group>
            {/* Main Tank */}
            <mesh position={[0, 0, 0]} scale={hovered ? 1.1 : 1}>
              <cylinderGeometry args={[1.5, 1.5, 3.5, 32]} />
              <meshStandardMaterial color={hovered ? "#3b82f6" : "#64748b"} metalness={0.8} roughness={0.2} />
            </mesh>
            
            {/* Conical Roof */}
            <mesh position={[0, 1.75, 0]}>
              <coneGeometry args={[1.5, 0.6, 32]} />
              <meshStandardMaterial color={hovered ? "#3b82f6" : "#64748b"} metalness={0.8} roughness={0.2} />
            </mesh>
            
            {/* Manholes */}
            <mesh position={[1.6, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
              <meshStandardMaterial color="#6b7280" />
            </mesh>
            
            {/* Inlet Nozzle */}
            <mesh position={[0, 1.5, 1.6]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.15, 0.15, 0.4, 16]} />
              <meshStandardMaterial color="#9ca3af" />
            </mesh>
            
            {/* Outlet Nozzle */}
            <mesh position={[1.6, -1.5, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.12, 0.12, 0.4, 16]} />
              <meshStandardMaterial color="#9ca3af" />
            </mesh>
            
            {/* Support Legs */}
            <mesh position={[1, -2.2, 1]}>
              <cylinderGeometry args={[0.1, 0.1, 1, 8]} />
              <meshStandardMaterial color="#374151" />
            </mesh>
            <mesh position={[-1, -2.2, 1]}>
              <cylinderGeometry args={[0.1, 0.1, 1, 8]} />
              <meshStandardMaterial color="#374151" />
            </mesh>
            <mesh position={[1, -2.2, -1]}>
              <cylinderGeometry args={[0.1, 0.1, 1, 8]} />
              <meshStandardMaterial color="#374151" />
            </mesh>
            <mesh position={[-1, -2.2, -1]}>
              <cylinderGeometry args={[0.1, 0.1, 1, 8]} />
              <meshStandardMaterial color="#374151" />
            </mesh>
            
            {/* Level Indicator */}
            <mesh position={[-1.6, 0, 0]}>
              <boxGeometry args={[0.1, 2, 0.1]} />
              <meshStandardMaterial color="#fbbf24" />
            </mesh>
          </group>
        );
        
      case 'Dilution Tank':
      case 'Acidification Tank':
      case 'Crystallizer':
        return (
          <group>
            {/* Main Tank */}
            <mesh position={[0, 0, 0]} scale={hovered ? 1.1 : 1}>
              <cylinderGeometry args={[1.3, 1.3, 2.8, 32]} />
              <meshStandardMaterial color={hovered ? "#8b5cf6" : "#7c3aed"} metalness={0.8} roughness={0.2} />
            </mesh>
            
            {/* Agitator Shaft */}
            <mesh position={[0, 1.8, 0]}>
              <cylinderGeometry args={[0.08, 0.08, 2, 16]} />
              <meshStandardMaterial color="#374151" metalness={0.9} roughness={0.1} />
            </mesh>
            
            {/* Impeller Hub */}
            <mesh position={[0, 0.5, 0]}>
              <cylinderGeometry args={[0.15, 0.15, 0.3, 16]} />
              <meshStandardMaterial color="#374151" metalness={0.9} roughness={0.1} />
            </mesh>
            
            {/* Impeller Blades */}
            <mesh position={[0, 0.5, 0]}>
              <boxGeometry args={[1.2, 0.08, 0.25]} />
              <meshStandardMaterial color="#374151" metalness={0.9} roughness={0.1} />
            </mesh>
            <mesh position={[0, 0.5, 0]} rotation={[0, Math.PI / 2, 0]}>
              <boxGeometry args={[1.2, 0.08, 0.25]} />
              <meshStandardMaterial color="#374151" metalness={0.9} roughness={0.1} />
            </mesh>
            
            {/* Baffles */}
            <mesh position={[1.1, 0, 0]}>
              <boxGeometry args={[0.08, 2.5, 0.2]} />
              <meshStandardMaterial color="#6b7280" />
            </mesh>
            <mesh position={[-1.1, 0, 0]}>
              <boxGeometry args={[0.08, 2.5, 0.2]} />
              <meshStandardMaterial color="#6b7280" />
            </mesh>
            <mesh position={[0, 0, 1.1]}>
              <boxGeometry args={[0.2, 2.5, 0.08]} />
              <meshStandardMaterial color="#6b7280" />
            </mesh>
            <mesh position={[0, 0, -1.1]}>
              <boxGeometry args={[0.2, 2.5, 0.08]} />
              <meshStandardMaterial color="#6b7280" />
            </mesh>
            
            {/* Motor */}
            <mesh position={[0, 3, 0]}>
              <cylinderGeometry args={[0.3, 0.3, 0.6, 16]} />
              <meshStandardMaterial color="#374151" />
            </mesh>
          </group>
        );
        
      case 'Sublimation Tank':
        return (
          <group>
            {/* Main Chamber */}
            <mesh position={[0, 0, 0]} scale={hovered ? 1.1 : 1}>
              <boxGeometry args={[2.2, 2.2, 2.2]} />
              <meshStandardMaterial color={hovered ? "#60a5fa" : "#3b82f6"} metalness={0.8} roughness={0.2} />
            </mesh>
            
            {/* Heating Plates (Bottom) */}
            <mesh position={[0, -0.9, 0]}>
              <cylinderGeometry args={[0.9, 0.9, 0.2, 16]} />
              <meshStandardMaterial color="#ef4444" />
            </mesh>
            
            {/* Condenser Coils (Top) */}
            <mesh position={[0, 0.9, 0]}>
              <torusGeometry args={[0.7, 0.1, 8, 32]} />
              <meshStandardMaterial color="#60a5fa" />
            </mesh>
            <mesh position={[0, 0.7, 0]}>
              <torusGeometry args={[0.5, 0.08, 8, 32]} />
              <meshStandardMaterial color="#60a5fa" />
            </mesh>
            
            {/* Vacuum Port */}
            <mesh position={[1.2, 1.2, 0]} rotation={[0, 0, -Math.PI / 4]}>
              <cylinderGeometry args={[0.1, 0.1, 0.5, 16]} />
              <meshStandardMaterial color="#9ca3af" />
            </mesh>
            
            {/* Product Collection Tray */}
            <mesh position={[0, 0.3, 0]}>
              <cylinderGeometry args={[0.8, 0.8, 0.1, 32]} />
              <meshStandardMaterial color="#6b7280" />
            </mesh>
            
            {/* Insulation (External) */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[2.4, 2.4, 2.4]} />
              <meshStandardMaterial color="#f3f4f6" transparent opacity={0.3} />
            </mesh>
          </group>
        );
        
      default:
        // Enhanced default model
        return (
          <group>
            <mesh position={[0, 0, 0]} scale={hovered ? 1.1 : 1}>
              <boxGeometry args={[1.5, 1.5, 1.5]} />
              <meshStandardMaterial color={hovered ? "#94a3b8" : "#64748b"} metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[0, 1, 0]}>
              <cylinderGeometry args={[0.1, 0.1, 0.5, 8]} />
              <meshStandardMaterial color="#374151" />
            </mesh>
          </group>
        );
    }
  };

  return (
    <group ref={meshRef}>
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <group
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          {renderModel()}
          <Text
            position={[0, 2.5, 0]}
            fontSize={0.2}
            color="#1f2937"
            anchorX="center"
            anchorY="middle"
          >
            {equipmentName}
          </Text>
        </group>
      </PresentationControls>
    </group>
  );
}

function LoadingFallback() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3 p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
        <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-sm text-gray-600 dark:text-gray-400">Loading 3D Model...</p>
      </div>
    </Html>
  );
}

export default function ModelViewer({ equipmentName }: ModelViewerProps) {
  const controlsRef = useRef<any>();

  const resetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Canvas
        camera={{ position: [6, 6, 6], fov: 45 }}
        shadows
        gl={{ antialias: true }}
      >
        <Suspense fallback={<LoadingFallback />}>
          {/* Enhanced Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1.2} 
            castShadow 
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.4} />
          <spotLight position={[5, 5, 5]} intensity={0.8} angle={0.3} penumbra={0.2} />
          
          {/* Environment */}
          <Environment preset="warehouse" />
          
          {/* Equipment Model */}
          <EquipmentModel equipmentName={equipmentName} />
          
          {/* Controls */}
          <OrbitControls
            ref={controlsRef}
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={3}
            maxDistance={20}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
      
      {/* Control Panel */}
      <div className="absolute bottom-4 left-4 flex gap-2">
        <button
          onClick={resetCamera}
          className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 shadow-lg"
          title="Reset View"
        >
          <RotateCcw className="w-4 h-4 text-gray-600 dark:text-gray-300" />
        </button>
      </div>
      
      {/* Info Panel */}
      <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-200/50 dark:border-gray-700/50 p-4 max-w-sm shadow-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">3D Controls</h4>
        <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
          <p>• Left click + drag: Rotate</p>
          <p>• Right click + drag: Pan</p>
          <p>• Scroll: Zoom in/out</p>
          <p>• Auto-rotation when idle</p>
        </div>
      </div>
    </div>
  );
}

