import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Factory, Gauge, Thermometer, Zap, Settings } from 'lucide-react';
import { equipmentData } from '../data/equipmentData';
import ImageGallery from './ImageGallery';

export default function EquipmentPage() {
  const { equipmentId } = useParams<{ equipmentId: string }>();
  
  if (!equipmentId || !equipmentData[equipmentId]) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Equipment Not Found
          </h1>
          <Link 
            to="/"
            className="btn-primary px-6 py-3 rounded-lg text-white font-semibold inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const equipment = equipmentData[equipmentId];

  const getIcon = (processStage: string) => {
    switch (processStage) {
      case 'Primary Reaction':
      case 'Secondary Reaction':
      case 'Final Reaction':
        return <Zap className="w-6 h-6" />;
      case 'Separation':
      case 'Product Purification':
        return <Gauge className="w-6 h-6" />;
      case 'Utilities':
        return <Settings className="w-6 h-6" />;
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
      case 'Utilities':
        return 'bg-gray-100 dark:bg-gray-900/30 text-gray-600 dark:text-gray-400';
      default:
        return 'bg-gray-100 dark:bg-gray-900/30 text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/"
              className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Plant Overview</span>
            </Link>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
                <Factory className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  Chemical Plant 3D
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Equipment Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className={`p-3 rounded-lg ${getStageColor(equipment.processStage)}`}>
              {getIcon(equipment.processStage)}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {equipment.name}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {equipment.processStage} • {equipment.function}
              </p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl leading-relaxed">
            {equipment.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Equipment Images Gallery */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Equipment Images
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Realistic industrial images from different angles
                </p>
              </div>
              
              <div className="h-96 md:h-[500px]">
                {equipment.images && equipment.images.length > 0 ? (
                  <ImageGallery 
                    images={equipment.images}
                    equipmentName={equipment.name}
                  />
                ) : (
                  <div className="h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                    <p className="text-gray-500 dark:text-gray-400">No images available</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Specifications Panel */}
          <div className="space-y-6">
            {/* Technical Specifications */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Technical Specifications
              </h3>
              
              <div className="space-y-3">
                {Object.entries(equipment.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-start">
                    <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                      {key.replace(/_/g, ' ')}:
                    </span>
                    <span className="text-sm text-gray-900 dark:text-white font-medium text-right ml-2">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Information */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Process Information
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Process Stage
                  </h4>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStageColor(equipment.processStage)}`}>
                    {equipment.processStage}
                  </span>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Primary Function
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {equipment.function}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Navigation
              </h3>
              
              <div className="space-y-3">
                <Link 
                  to="/"
                  className="block w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-center"
                >
                  View Process Flow
                </Link>
                
                <Link 
                  to="/#equipment"
                  className="block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors text-center"
                >
                  Browse All Equipment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

