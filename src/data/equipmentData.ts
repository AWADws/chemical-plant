import { Equipment } from '../types/equipment';

export const equipmentData: Record<string, Equipment> = {
  'naoh_storage_tank': {
    name: 'NaOH Storage Tank',
    description: 'Stores Sodium Hydroxide (NaOH) feed at 50% concentration by weight. This tank provides the caustic soda required for the initial reaction in the CSTR where phenol is converted to sodium phenoxide.',
    function: 'Raw material storage',
    processStage: 'Raw Material Handling',
    images: [
      '/images/equipment/naoh_storage_tank_front.png',
      '/images/equipment/naoh_storage_tank_side.png',
      '/images/equipment/naoh_storage_tank_perspective.png'
    ],
    specifications: {
      capacity: '150 m³',
      temperature: 'Ambient (20-30°C)',
      pressure: 'Atmospheric',
      material: 'Stainless Steel 316L',
      concentration: '50% by weight NaOH'
    }
  },
  
  'phenol_storage_tank': {
    name: 'Phenol Storage Tank',
    description: 'Stores Phenol feed at 60% concentration by weight. Phenol is the primary raw material for salicylic acid production via the Kolbe-Schmitt process.',
    function: 'Raw material storage',
    processStage: 'Raw Material Handling',
    images: [
      '/images/equipment/phenol_storage_tank_front.png',
      '/images/equipment/phenol_storage_tank_side.png',
      '/images/equipment/phenol_storage_tank_perspective.png'
    ],
    specifications: {
      capacity: '200 m³',
      temperature: 'Ambient (20-30°C)',
      pressure: 'Atmospheric',
      material: 'Carbon Steel with coating',
      concentration: '60% by weight Phenol'
    }
  },
  
  'cstr': {
    name: 'CSTR (Continuous Stirred Tank Reactor)',
    description: 'The CSTR is the primary reaction vessel where phenol reacts with sodium hydroxide to produce sodium phenoxide and water. This reactor achieves 99.5% conversion rate with 10% excess phenol to ensure complete reaction.',
    function: 'Chemical reaction vessel',
    processStage: 'Primary Reaction',
    images: [
      '/images/equipment/cstr_front.png',
      '/images/equipment/cstr_side.png',
      '/images/equipment/cstr_perspective.png'
    ],
    specifications: {
      capacity: '8 m³ (Working Volume)',
      temperature: '30-40°C (Operating)',
      pressure: 'Atmospheric',
      conversion_rate: '99.5%',
      excess_phenol: '10%'
    }
  },
  
  'flash_tank': {
    name: 'Flash Tank',
    description: 'The flash separator separates components based on volatility. 98% of water and 5% of phenol are separated into the vapor stream, while sodium hydroxide and sodium phenoxide remain in the liquid phase.',
    function: 'Vapor-liquid separation',
    processStage: 'Separation',
    images: [
      '/images/equipment/flash_tank_front.png',
      '/images/equipment/flash_tank_side.png',
      '/images/equipment/flash_tank_perspective.png'
    ],
    specifications: {
      capacity: '5 m³',
      temperature: '90-100°C (Operating)',
      pressure: '0.5 barg (Operating)',
      water_separation: '98%',
      phenol_loss: '5%'
    }
  },
  
  'co2_storage_tank': {
    name: 'CO2 Storage Tank',
    description: 'Stores Carbon Dioxide under high pressure for the autoclave reaction. CO2 is fed in 150% excess to ensure complete conversion of sodium phenolate to sodium salicylate.',
    function: 'Raw material storage',
    processStage: 'Raw Material Handling',
    images: [
      '/images/equipment/co2_storage_tank_front.png',
      '/images/equipment/co2_storage_tank_side.png',
      '/images/equipment/co2_storage_tank_perspective.png'
    ],
    specifications: {
      capacity: '50 m³',
      temperature: 'Ambient (20-30°C)',
      pressure: 'High Pressure (200 bar)',
      material: 'Carbon Steel',
      purity: '99.9% CO2'
    }
  },
  
  'compressor': {
    name: 'Compressor',
    description: 'Compresses CO2 gas to the required pressure for the autoclave reactor. The compressor ensures proper pressure and flow rate for optimal reaction conditions.',
    function: 'Gas compression',
    processStage: 'Utilities',
    images: [
      '/images/equipment/compressor_front.png',
      '/images/equipment/compressor_side.png',
      '/images/equipment/compressor_perspective.png'
    ],
    specifications: {
      capacity: '1000 Nm³/h',
      inlet_pressure: '10 barg',
      outlet_pressure: '70 barg',
      power: '250 kW',
      efficiency: '85%'
    }
  },
  
  'pump': {
    name: 'Pump',
    description: 'Centrifugal pumps are used throughout the plant to transfer liquids between different process units. Multiple pumps ensure reliable fluid handling and process continuity.',
    function: 'Liquid transfer',
    processStage: 'Utilities',
    images: [
      '/images/equipment/pump_front.png',
      '/images/equipment/pump_side.png',
      '/images/equipment/pump_perspective.png'
    ],
    specifications: {
      capacity: '50 m³/h',
      head: '50 m',
      power: '15 kW',
      material: 'Stainless Steel 316L',
      efficiency: '80%'
    }
  },
  
  'autoclave': {
    name: 'Autoclave Reactor',
    description: 'High-pressure reactor where sodium phenolate reacts with CO2 to produce sodium salicylate. Operates at 120-150°C and 50-70 barg with 70% conversion rate and 150% excess CO2.',
    function: 'High-pressure reaction',
    processStage: 'Secondary Reaction',
    images: [
      '/images/equipment/autoclave_front.png',
      '/images/equipment/autoclave_side.png',
      '/images/equipment/autoclave_perspective.png'
    ],
    specifications: {
      capacity: '4 m³ (Working Volume)',
      temperature: '120-150°C (Operating)',
      pressure: '50-70 barg (Operating)',
      conversion_rate: '70%',
      excess_co2: '150%'
    }
  },
  
  'dilution_tank': {
    name: 'Dilution Tank',
    description: 'Prepares the reaction mixture for subsequent processing by adding water. The water addition is precisely controlled at 150% of the sodium salicylate mass for optimal processing conditions.',
    function: 'Solution preparation',
    processStage: 'Solution Preparation',
    images: [
      '/images/equipment/dilution_tank_front.png',
      '/images/equipment/dilution_tank_side.png',
      '/images/equipment/dilution_tank_perspective.png'
    ],
    specifications: {
      capacity: '12 m³ (Working Volume)',
      temperature: '60-70°C (Operating)',
      pressure: 'Atmospheric',
      water_addition: '150% of Na-salicylate mass',
      mixing_time: '30 minutes'
    }
  },
  
  'h2so4_storage_tank': {
    name: 'H2SO4 Storage Tank',
    description: 'Stores concentrated Sulfuric Acid at 40% concentration for the acidification reaction. Special corrosion-resistant materials and safety systems are employed for safe handling.',
    function: 'Raw material storage',
    processStage: 'Raw Material Handling',
    images: [
      '/images/equipment/h2so4_storage_tank_front.png',
      '/images/equipment/h2so4_storage_tank_side.png',
      '/images/equipment/h2so4_storage_tank_perspective.png'
    ],
    specifications: {
      capacity: '100 m³',
      temperature: 'Ambient (20-30°C)',
      pressure: 'Atmospheric',
      material: 'FRP (Fiber Reinforced Plastic)',
      concentration: '40% by weight H2SO4'
    }
  },
  
  'acidification_tank': {
    name: 'Acidification Tank',
    description: 'Final reaction vessel where sodium salicylate reacts with sulfuric acid to produce crude salicylic acid. Achieves 99% conversion with complete consumption of sulfuric acid.',
    function: 'pH adjustment and reaction',
    processStage: 'Final Reaction',
    images: [
      '/images/equipment/acidification_tank_front.png',
      '/images/equipment/acidification_tank_side.png',
      '/images/equipment/acidification_tank_perspective.png'
    ],
    specifications: {
      capacity: '6 m³ (Working Volume)',
      temperature: '25-35°C (Operating)',
      pressure: 'Atmospheric',
      conversion_rate: '99%',
      ph_control: 'Automated'
    }
  },
  
  'dryer': {
    name: 'Dryer',
    description: 'Removes residual moisture from salicylic acid cake to meet product specifications. Operates under vacuum conditions to minimize thermal degradation and remove volatile impurities.',
    function: 'Moisture removal',
    processStage: 'Product Purification',
    images: [
      '/images/equipment/dryer_front.png',
      '/images/equipment/dryer_side.png',
      '/images/equipment/dryer_perspective.png'
    ],
    specifications: {
      capacity: '1500 kg/h (dry product)',
      temperature: '60-80°C (Operating)',
      pressure: '0.1 barg (vacuum)',
      moisture_content: '<0.5% (final)',
      thermal_efficiency: '90%'
    }
  },
  
  'centrifuge': {
    name: 'Centrifuge',
    description: 'Separates solid crude salicylic acid crystals from liquid mother liquor containing water and sodium sulfate. High-efficiency separation ensures maximum product recovery.',
    function: 'Solid-liquid separation',
    processStage: 'Product Purification',
    images: [
      '/images/equipment/centrifuge_front.png',
      '/images/equipment/centrifuge_side.png',
      '/images/equipment/centrifuge_perspective.png'
    ],
    specifications: {
      capacity: '2000 kg/h (wet cake)',
      temperature: '25-30°C (Operating)',
      pressure: 'Atmospheric',
      separation_efficiency: '98%',
      cake_moisture: '15-20%'
    }
  },
  
  'sublimation_tank': {
    name: 'Sublimation Tank',
    description: 'Advanced purification process that directly converts solid salicylic acid to vapor and back to highly pure crystals, leaving impurities behind for pharmaceutical-grade purity.',
    function: 'Advanced purification',
    processStage: 'Product Purification',
    images: [
      '/images/equipment/sublimation_tank_front.png',
      '/images/equipment/sublimation_tank_side.png',
      '/images/equipment/sublimation_tank_perspective.png'
    ],
    specifications: {
      capacity: '500 kg/batch',
      temperature: '150-200°C',
      pressure: 'High vacuum (0.01 bar)',
      purity_achieved: '99.9%',
      cycle_time: '8 hours'
    }
  },
  
  'crystallizer': {
    name: 'Crystallizer',
    description: 'Controls crystal formation and growth for optimal product quality. Temperature and cooling rate are precisely controlled to achieve desired crystal size distribution.',
    function: 'Product crystallization',
    processStage: 'Product Finishing',
    images: [
      '/images/equipment/crystallizer_front.png',
      '/images/equipment/crystallizer_side.png',
      '/images/equipment/crystallizer_perspective.png'
    ],
    specifications: {
      capacity: '3 m³',
      temperature: 'Controlled cooling (80°C to 20°C)',
      pressure: 'Atmospheric',
      cooling_rate: '2°C/hour',
      crystal_size: '0.5-2 mm'
    }
  },
  
  'water_storage_tank': {
    name: 'Water Storage Tank',
    description: 'Stores process water for various unit operations including dilution, washing, and cleaning. Water quality is maintained to prevent contamination.',
    function: 'Utility storage',
    processStage: 'Utilities',
    images: [
      '/images/equipment/water_storage_tank_front.png',
      '/images/equipment/water_storage_tank_side.png',
      '/images/equipment/water_storage_tank_perspective.png'
    ],
    specifications: {
      capacity: '300 m³',
      temperature: 'Ambient (20-30°C)',
      pressure: 'Atmospheric',
      quality: 'Demineralized water',
      conductivity: '<10 μS/cm'
    }
  }
};

