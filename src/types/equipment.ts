export interface Equipment {
  name: string;
  description: string;
  function: string;
  processStage: string;
  specifications: Record<string, string>;
  modelPath?: string;
  images?: string[];
}

export interface EquipmentPosition {
  x: number;
  y: number;
}

