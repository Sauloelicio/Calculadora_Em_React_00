import { useState } from 'react';

export type FuelResult = 'ALCOOL' | 'GASOLINA' | null;

export function useFuelCalculator() {
  const [alcool, setAlcool] = useState<string>('');
  const [gasolina, setGasolina] = useState<string>('');
  const [resultado, setResultado] = useState<FuelResult>(null);
  const [error, setError] = useState<string>('');

  const calcular = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const precoAlcool = parseFloat(alcool.replace(',', '.'));
    const precoGasolina = parseFloat(gasolina.replace(',', '.'));
    
    if (isNaN(precoAlcool) || isNaN(precoGasolina) || precoAlcool <= 0 || precoGasolina <= 0) {
      setError("Por favor, preencha valores válidos.");
      setResultado(null);
      return;
    }
    
    const relacao = precoAlcool / precoGasolina;
    if (relacao < 0.7) {
      setResultado('ALCOOL');
    } else {
      setResultado('GASOLINA');
    }
  };

  const reset = () => {
    setAlcool('');
    setGasolina('');
    setResultado(null);
    setError('');
  };

  return {
    alcool,
    setAlcool,
    gasolina,
    setGasolina,
    resultado,
    error,
    calcular,
    reset
  };
}
