import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Gauge, Thermometer, Zap } from 'lucide-react';
import { Equipment } from '../types/equipment';

interface EquipmentCardProps {
  equipment: Equipment;
  equipmentId: string;
}

export default function EquipmentCard({ equipment, equipmentId }: EquipmentCardProps) {
  const getIcon = (processStage: string) => {
    switch (processStage) {
      case 'Primary Reaction':
      case 'Secondary Reaction':
      case 'Final Reaction':
        return <Zap className="w-6 h-6" />;
      case 'Separation':
      case 'Product Purification':
        return <Gauge className="w-6 h-6" />;
      default:
        return <Thermometer className="w-6 h-6" />;
    }
  };

  const getStageColor = (processStage: string) => {
    switch (processStage) {
      case 'Primary Reaction':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400';
      case 'Secondary Reaction':
        return 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400';
      case 'Final Reaction':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400';
      case 'Separation':
        return 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400';
      case 'Product Purification':
        return 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400';
      default:
        return 'bg-gray-100 dark:bg-gray-900/30 text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <div className="equipment-card glass-card rounded-2xl p-6 group cursor-pointer">
      <Link to={`/equipment/${equipmentId}`} className="block">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-lg ${getStageColor(equipment.processStage)}`}>
            {getIcon(equipment.processStage)}
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {equipment.name}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {equipment.description}
        </p>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">Function:</span>
            <span className="text-gray-700 dark:text-gray-300 font-medium">{equipment.function}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">Stage:</span>
            <span className="text-gray-700 dark:text-gray-300 font-medium">{equipment.processStage}</span>
          </div>
          
          {equipment.specifications.capacity && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">Capacity:</span>
              <span className="text-gray-700 dark:text-gray-300 font-medium">{equipment.specifications.capacity}</span>
            </div>
          )}
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">View 3D Model</span>
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
              <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

