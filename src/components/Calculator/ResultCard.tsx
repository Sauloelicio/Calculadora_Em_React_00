import React from 'react';
import type { FuelResult } from '@/hooks/useFuelCalculator';

type ResultCardProps = {
  result: FuelResult;
  onReset: () => void;
};

export function ResultCard({ result, onReset }: ResultCardProps) {
  if (!result) return null;

  const isAlcool = result === 'ALCOOL';

  return (
    <div className="w-full max-w-sm mx-auto mt-8 p-[1px] rounded-3xl bg-gradient-to-b from-p-primary/50 to-transparent animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-p-surface rounded-[23px] p-8 text-center flex flex-col items-center gap-4 relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-p-primary/20 blur-[50px] rounded-full" />
        
        <p className="text-p-text-muted font-medium z-10">
          A opção mais vantajosa é:
        </p>
        
        <h2 className={`text-4xl font-extrabold z-10 tracking-tight ${isAlcool ? 'text-p-primary' : 'text-blue-400'}`}>
          {isAlcool ? 'ETANOL' : 'GASOLINA'}
        </h2>
        
        <p className="text-sm text-p-text-muted mt-2 z-10">
          Abasteça com {isAlcool ? 'etanol' : 'gasolina'} para economizar mais no seu trajeto.
        </p>

        <button 
          onClick={onReset}
          className="mt-4 text-sm font-medium text-p-text hover:text-p-primary transition-colors underline-offset-4 hover:underline z-10"
        >
          Fazer novo cálculo
        </button>
      </div>
    </div>
  );
}
