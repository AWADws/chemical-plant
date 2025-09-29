import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { equipmentData } from '../data/equipmentData';
import { ArrowLeft, Search, Filter, Grid, List, Zap, Settings, Droplets, Flame } from 'lucide-react';

const AllEquipment: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStage, setSelectedStage] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const equipmentList = Object.entries(equipmentData);
  
  const processStages = ['All', ...Array.from(new Set(equipmentList.map(([_, equipment]) => equipment.processStage)))];

  const filteredEquipment = equipmentList.filter(([_, equipment]) => {
    const matchesSearch = equipment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         equipment.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStage = selectedStage === 'All' || equipment.processStage === selectedStage;
    return matchesSearch && matchesStage;
  });

  const getStageIcon = (stage: string) => {
    switch (stage) {
      case 'Raw Material Handling': return <Droplets className="w-4 h-4" />;
      case 'Primary Reaction': return <Flame className="w-4 h-4" />;
      case 'Secondary Reaction': return <Zap className="w-4 h-4" />;
      case 'Separation': return <Filter className="w-4 h-4" />;
      case 'Product Purification': return <Settings className="w-4 h-4" />;
      case 'Utilities': return <Settings className="w-4 h-4" />;
      default: return <Settings className="w-4 h-4" />;
    }
  };

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Raw Material Handling': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Primary Reaction': return 'bg-red-100 text-red-800 border-red-200';
      case 'Secondary Reaction': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Separation': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Product Purification': return 'bg-green-100 text-green-800 border-green-200';
      case 'Solution Preparation': return 'bg-cyan-100 text-cyan-800 border-cyan-200';
      case 'Final Reaction': return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'Product Finishing': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Utilities': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to="/"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Plant Overview</span>
              </Link>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">All Equipment</h1>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'grid' 
                    ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400' 
                    : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'list' 
                    ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400' 
                    : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Controls */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search equipment by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            
            {/* Stage Filter */}
            <select
              value={selectedStage}
              onChange={(e) => setSelectedStage(e.target.value)}
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-w-[200px]"
            >
              {processStages.map(stage => (
                <option key={stage} value={stage}>{stage}</option>
              ))}
            </select>
          </div>
          
          {/* Results Count */}
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredEquipment.length} of {equipmentList.length} equipment
          </div>
        </div>

        {/* Equipment Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEquipment.map(([key, equipment]) => (
              <Link
                key={key}
                to={`/equipment/${key}`}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getStageColor(equipment.processStage)}`}>
                      {getStageIcon(equipment.processStage)}
                      <span className="truncate max-w-[120px]">{equipment.processStage}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {equipment.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {equipment.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500 dark:text-gray-400">Function:</span>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{equipment.function}</span>
                    </div>
                    
                    {equipment.specifications.capacity && (
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500 dark:text-gray-400">Capacity:</span>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{equipment.specifications.capacity}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-xs text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                      View 3D Model & Details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredEquipment.map(([key, equipment]) => (
              <Link
                key={key}
                to={`/equipment/${key}`}
                className="group block bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                          {equipment.name}
                        </h3>
                        <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getStageColor(equipment.processStage)}`}>
                          {getStageIcon(equipment.processStage)}
                          <span>{equipment.processStage}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                        {equipment.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-xs">
                        <div className="flex items-center gap-1">
                          <span className="text-gray-500 dark:text-gray-400">Function:</span>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">{equipment.function}</span>
                        </div>
                        
                        {equipment.specifications.capacity && (
                          <div className="flex items-center gap-1">
                            <span className="text-gray-500 dark:text-gray-400">Capacity:</span>
                            <span className="text-gray-700 dark:text-gray-300 font-medium">{equipment.specifications.capacity}</span>
                          </div>
                        )}
                        
                        {equipment.specifications.temperature && (
                          <div className="flex items-center gap-1">
                            <span className="text-gray-500 dark:text-gray-400">Temperature:</span>
                            <span className="text-gray-700 dark:text-gray-300 font-medium">{equipment.specifications.temperature}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="ml-4">
                      <span className="text-xs text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                        View Details →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredEquipment.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <Search className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No equipment found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search terms or filter criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllEquipment;

