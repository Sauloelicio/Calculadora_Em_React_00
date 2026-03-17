import React, { FormEvent } from 'react';

type FuelFormProps = {
  alcool: string;
  setAlcool: (val: string) => void;
  gasolina: string;
  setGasolina: (val: string) => void;
  error?: string;
  onCalculate: (e: React.FormEvent) => void;
};

export function FuelForm({ alcool, setAlcool, gasolina, setGasolina, error, onCalculate }: FuelFormProps) {
  return (
    <form onSubmit={onCalculate} className="flex flex-col gap-6 w-full max-w-sm mx-auto">
      {/* Alcool Input */}
      <div className="flex flex-col gap-2 relative">
        <label className="text-sm font-medium text-p-text-muted ml-1" htmlFor="alcool">
          Etanol / Álcool
        </label>
        <div className="relative flex items-center">
          <div className="absolute left-4 text-p-text-muted">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-fuel">
              <line x1="3" x2="15" y1="22" y2="22"/><line x1="4" x2="14" y1="9" y2="9"/><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"/>
            </svg>
          </div>
          <input
            id="alcool"
            type="number"
            step="0.01"
            className="w-full glass-panel pl-12 pr-4 py-4 rounded-2xl text-lg font-bold outline-none border-p-border focus:border-p-primary transition-colors placeholder:text-zinc-600placeholder:font-normal appearance-none"
            placeholder="R$ 3,29"
            value={alcool}
            onChange={(e) => setAlcool(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Gasolina Input */}
      <div className="flex flex-col gap-2 relative">
        <label className="text-sm font-medium text-p-text-muted ml-1" htmlFor="gasolina">
          Gasolina
        </label>
        <div className="relative flex items-center">
          <div className="absolute left-4 text-p-text-muted">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-fuel">
              <line x1="3" x2="15" y1="22" y2="22"/><line x1="4" x2="14" y1="9" y2="9"/><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"/>
            </svg>
          </div>
          <input
            id="gasolina"
            type="number"
            step="0.01"
            className="w-full glass-panel pl-12 pr-4 py-4 rounded-2xl text-lg font-bold outline-none border-p-border focus:border-p-primary transition-colors placeholder:text-zinc-600 placeholder:font-normal appearance-none"
            placeholder="R$ 4,92"
            value={gasolina}
            onChange={(e) => setGasolina(e.target.value)}
            required
          />
        </div>
      </div>

      {error && (
        <p className="text-p-danger text-sm font-medium text-center bg-p-danger/10 py-2 rounded-xl">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="mt-4 w-full bg-p-primary hover:bg-p-primary-dark text-white font-bold py-4 rounded-2xl shadow-lg shadow-p-primary/20 hover:shadow-p-primary/40 transition-all active:scale-[0.98]"
      >
        Calcular Vantagem
      </button>
    </form>
  );
}
