import { useState } from "react";
import { CalculationResult } from "../types";

export function useCalculator() {
  const [alcoholPrice, setAlcoholPrice] = useState<string>("");
  const [gasPrice, setGasPrice] = useState<string>("");
  const [alcoholConsumption, setAlcoholConsumption] = useState<string>("");
  const [gasConsumption, setGasConsumption] = useState<string>("");
  const [tankCapacity, setTankCapacity] = useState<string>("50");
  
  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    const parse = (val: string) => parseFloat(val.replace(",", "."));
    
    const pAlcohol = parse(alcoholPrice);
    const pGas = parse(gasPrice);
    const cAlcohol = parse(alcoholConsumption);
    const cGas = parse(gasConsumption);
    const tank = parse(tankCapacity);

    if ([pAlcohol, pGas, cAlcohol, cGas, tank].some(v => isNaN(v) || v <= 0)) {
       return;
    }

    const costPerKmAlcohol = pAlcohol / cAlcohol;
    const costPerKmGas = pGas / cGas;
    
    const fillTankAlcohol = pAlcohol * tank;
    const fillTankGas = pGas * tank;

    // A fuel type is more advantageous if its cost per km is lower.
    const isAlcoholBetter = costPerKmAlcohol < costPerKmGas;
    const difference = Math.abs(fillTankAlcohol - fillTankGas);

    setResult({
      bestFuel: isAlcoholBetter ? "alcohol" : "gas",
      message: isAlcoholBetter ? "Etanol é mais vantajoso!" : "Gasolina é mais vantajosa!",
      costPerKmAlcohol,
      costPerKmGas,
      fillTankAlcohol,
      fillTankGas,
      differenceToFill: difference
    });
  };

  return {
    alcoholPrice, setAlcoholPrice,
    gasPrice, setGasPrice,
    alcoholConsumption, setAlcoholConsumption,
    gasConsumption, setGasConsumption,
    tankCapacity, setTankCapacity,
    result,
    calculate
  };
}
