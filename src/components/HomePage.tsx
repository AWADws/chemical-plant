import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Beaker, 
  Factory, 
  Zap, 
  ArrowRight, 
  Github, 
  ExternalLink,
  Play,
  ChevronDown
} from 'lucide-react';
import FlowDiagram from './FlowDiagram';
import EquipmentCard from './EquipmentCard';
import { equipmentData } from '../data/equipmentData';

export default function HomePage() {
  const featuredEquipment = [
    'cstr',
    'autoclave', 
    'centrifuge',
    'dryer'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
                <Factory className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  Chemical Plant 3D
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Salicylic Acid Production
                </p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <a 
                href="#process"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Process
              </a>
              <a 
                href="#equipment"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Equipment
              </a>
              <a 
                href="#specifications"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Specifications
              </a>
            </nav>
            
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <Github className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
              <button className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <ExternalLink className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <Beaker className="w-4 h-4" />
              Kolbe-Schmitt Process Visualization
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="text-gradient">Salicylic Acid</span>
              <br />
              Production Plant
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Explore an interactive 3D visualization of a complete chemical plant for salicylic acid production. 
              Click on equipment to view detailed specifications and 3D models.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-primary px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-2 shadow-lg">
                <Play className="w-5 h-5" />
                Start Interactive Tour
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <a 
                href="#process"
                className="px-8 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 flex items-center gap-2"
              >
                View Process Flow
                <ChevronDown className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-20 blur-3xl"></div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Interactive Process Flow
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Click on any equipment in the flow diagram below to explore its 3D model and technical specifications
            </p>
          </div>
          
          <div className="glass-card rounded-2xl p-8">
            <FlowDiagram />
          </div>
        </div>
      </section>

      {/* Featured Equipment Section */}
      <section id="equipment" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Equipment
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore detailed 3D models and specifications of key process equipment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredEquipment.map((equipmentId) => (
              <EquipmentCard 
                key={equipmentId}
                equipment={equipmentData[equipmentId]}
                equipmentId={equipmentId}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/equipment"
              className="btn-primary px-8 py-4 rounded-xl text-white font-semibold inline-flex items-center gap-2 shadow-lg"
            >
              View All Equipment
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Overview Section */}
      <section id="specifications" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Process Overview
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The Kolbe-Schmitt process for salicylic acid production
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Primary Reaction
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Phenol + NaOH → Sodium Phenoxide + H2O
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <p>Temperature: 30-40°C</p>
                <p>Conversion: 99.5%</p>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Factory className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Secondary Reaction
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Sodium Phenoxide + CO2 → Sodium Salicylate
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <p>Temperature: 120-150°C</p>
                <p>Pressure: 50-70 barg</p>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Beaker className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Final Reaction
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Sodium Salicylate + H2SO4 → Salicylic Acid
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <p>Temperature: 25-35°C</p>
                <p>Conversion: 99%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
              <Factory className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Chemical Plant 3D</h3>
          </div>
          
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            An interactive educational tool for understanding chemical plant design and the Kolbe-Schmitt process 
            for salicylic acid production.
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <button className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
              <Github className="w-6 h-6" />
            </button>
            <button className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
              <ExternalLink className="w-6 h-6" />
            </button>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">
              © 2024 Chemical Plant 3D. Educational project for chemical engineering visualization.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

