export interface Review {
  id: string;
  rating: number;
  tags: string[];
  text: string;
  date: string;
}

export interface Station {
  id: string;
  name: string;
  distance: string; // Ex: "1.2 km"
  alcoholPrice: number;
  gasPrice: number;
  averageRating: number;
  tags: string[]; // Ex: ["Mais Barato", "Sem Fila"]
  reviews: Review[];
}

export interface CalculationResult {
  bestFuel: "alcohol" | "gas" | "neutral";
  message: string;
  costPerKmAlcohol: number;
  costPerKmGas: number;
  fillTankAlcohol: number;
  fillTankGas: number;
  differenceToFill: number;
}
