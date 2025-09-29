import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Info } from 'lucide-react';

const equipmentPositions = {
  naoh_storage_tank: { x: 50, y: 100 },
  phenol_storage_tank: { x: 150, y: 100 },
  cstr: { x: 100, y: 200 },
  flash_tank: { x: 200, y: 200 },
  co2_storage_tank: { x: 50, y: 300 },
  compressor: { x: 150, y: 300 },
  autoclave: { x: 250, y: 300 },
  dilution_tank: { x: 350, y: 300 },
  h2so4_storage_tank: { x: 300, y: 400 },
  acidification_tank: { x: 400, y: 400 },
  centrifuge: { x: 500, y: 400 },
  dryer: { x: 600, y: 400 },
  crystallizer: { x: 500, y: 500 },
  sublimation_tank: { x: 600, y: 500 },
  water_storage_tank: { x: 50, y: 500 },
  pump: { x: 100, y: 400 }
};

export default function FlowDiagram() {
  const [hoveredEquipment, setHoveredEquipment] = useState<string | null>(null);

  return (
    <div className="flow-diagram">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Salicylic Acid Production Process Flow
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Click on any equipment to view detailed specifications and 3D model
        </p>
      </div>
      
      <div className="relative bg-white dark:bg-gray-800 rounded-xl p-8 overflow-x-auto">
        <svg 
          viewBox="0 0 700 600" 
          className="w-full h-auto min-h-[400px]"
          style={{ minWidth: '700px' }}
        >
          {/* Process Flow Lines */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3.5, 0 7"
                fill="#3b82f6"
              />
            </marker>
          </defs>
          
          {/* Flow lines */}
          <g className="process-lines">
            {/* NaOH to CSTR */}
            <line x1="70" y1="120" x2="100" y2="180" className="process-line" markerEnd="url(#arrowhead)" />
            
            {/* Phenol to CSTR */}
            <line x1="150" y1="120" x2="120" y2="180" className="process-line" markerEnd="url(#arrowhead)" />
            
            {/* CSTR to Flash Tank */}
            <line x1="120" y1="220" x2="180" y2="220" className="process-line" markerEnd="url(#arrowhead)" />
            
            {/* CO2 to Compressor */}
            <line x1="70" y1="320" x2="130" y2="320" className="process-line" markerEnd="url(#arrowhead)" />
            
            {/* Compressor to Autoclave */}
            <line x1="170" y1="320" x2="230" y2="320" className="process-line" markerEnd="url(#arrowhead)" />
            
            {/* Flash Tank to Autoclave */}
            <line x1="220" y1="240" x2="250" y2="280" className="process-line" markerEnd="url(#arrowhead)" />
            
            {/* Autoclave to Dilution Tank */}
            <line x1="270" y1="320" x2="330" y2="320" className="process-line" markerEnd="url(#arrowhead)" />
            
            {/* H2SO4 to Acidification Tank */}
            <line x1="320" y1="420" x2="380" y2="420" className="process-line" markerEnd="url(#arrowhead)" />
            
            {/* Dilution Tank to Acidification Tank */}
            <line x1="370" y1="340" x2="400" y2="380" className="process-line" markerEnd="url(#arrowhead)" />
            
            {/* Acidification Tank to Centrifuge */}
            <line x1="420" y1="420" x2="480" y2="420" className="process-line" markerEnd="url(#arrowhead)" />
            
            {/* Centrifuge to Dryer */}
            <line x1="520" y1="420" x2="580" y2="420" className="process-line" markerEnd="url(#arrowhead)" />
            
            {/* Centrifuge to Crystallizer */}
            <line x1="500" y1="440" x2="500" y2="480" className="process-line" markerEnd="url(#arrowhead)" />
            
            {/* Crystallizer to Sublimation Tank */}
            <line x1="520" y1="520" x2="580" y2="520" className="process-line" markerEnd="url(#arrowhead)" />
          </g>
          
          {/* Equipment Hotspots */}
          {Object.entries(equipmentPositions).map(([equipmentId, position]) => (
            <g key={equipmentId}>
              <Link to={`/equipment/${equipmentId}`}>
                <circle
                  cx={position.x}
                  cy={position.y}
                  r="16"
                  className="equipment-hotspot"
                  fill={hoveredEquipment === equipmentId ? "#3b82f6" : "rgba(59, 130, 246, 0.8)"}
                  stroke="white"
                  strokeWidth="2"
                  onMouseEnter={() => setHoveredEquipment(equipmentId)}
                  onMouseLeave={() => setHoveredEquipment(null)}
                />
                <text
                  x={position.x}
                  y={position.y + 5}
                  textAnchor="middle"
                  className="fill-white text-xs font-bold pointer-events-none"
                >
                  {equipmentId.split('_').length > 1 ? equipmentId.split('_')[0].toUpperCase() : equipmentId.toUpperCase()}
                </text>
              </Link>
              
              {/* Equipment Labels */}
              <text
                x={position.x}
                y={position.y - 25}
                textAnchor="middle"
                className="fill-gray-700 dark:fill-gray-300 text-xs font-medium pointer-events-none"
              >
                {equipmentId.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </text>
            </g>
          ))}
        </svg>
        
        {/* Legend */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Equipment</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-blue-600"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Process Flow</span>
          </div>
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Click equipment for details</span>
          </div>
        </div>
      </div>
    </div>
  );
}

