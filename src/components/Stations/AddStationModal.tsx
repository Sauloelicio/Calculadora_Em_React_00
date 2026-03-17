'use client';

import React, { useState } from 'react';

export function AddStationModal() {
  const [isOpen, setIsOpen] = useState(false);
  
  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="w-full bg-p-primary hover:bg-p-primary-dark text-white font-bold py-4 rounded-2xl shadow-xl shadow-p-primary/20 transition-all active:scale-[0.98] flex justify-center items-center gap-2"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14"/><path d="M12 5v14"/>
        </svg>
        Cadastrar Novo Posto
      </button>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsOpen(false);
      alert('Posto cadastrado com sucesso anonimamente!');
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end sm:justify-center items-center p-4 bg-p-bg/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-p-surface w-full max-w-md border border-p-border rounded-3xl p-6 shadow-2xl relative overflow-y-auto max-h-[90vh] animate-in slide-in-from-bottom-8 duration-300">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full bg-p-bg/50 hover:bg-p-bg transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
          </svg>
        </button>
        
        <h2 className="text-xl font-bold text-white mb-2">Novo Posto / Preço</h2>
        <p className="text-sm text-p-text-muted mb-6">Ajude a comunidade. Seus dados são anônimos.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-zinc-400 pl-1">Nome do Posto</label>
            <input required type="text" className="w-full bg-p-bg border border-p-border rounded-xl px-4 py-3 placeholder:text-zinc-600 focus:border-p-primary focus:outline-none" placeholder="Ex: Posto BR Faria Lima" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-zinc-400 pl-1">Etanol (R$)</label>
              <input type="number" step="0.01" className="w-full bg-p-bg border border-p-border rounded-xl px-4 py-3 placeholder:text-zinc-600 focus:border-p-primary focus:outline-none" placeholder="3,29" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-zinc-400 pl-1">Gasolina (R$)</label>
              <input type="number" step="0.01" className="w-full bg-p-bg border border-p-border rounded-xl px-4 py-3 placeholder:text-zinc-600 focus:border-p-primary focus:outline-none" placeholder="4,99" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5 mt-2">
            <label className="text-xs font-semibold text-zinc-400 pl-1">Avaliação / Comentário Privado</label>
            <textarea className="w-full bg-p-bg border border-p-border rounded-xl px-4 py-3 placeholder:text-zinc-600 focus:border-p-primary focus:outline-none resize-none h-20" placeholder="Como foi sua experiência? (Opcional)" />
          </div>

          <button 
            type="submit"
            className="w-full mt-2 bg-p-primary hover:bg-p-primary-dark text-white font-bold py-4 rounded-xl transition-all"
          >
            Enviar Colaboração
          </button>
        </form>
      </div>
    </div>
  );
}
