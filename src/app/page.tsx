"use client";

import { Calculator } from "@/components/Calculator";
import { StationList } from "@/components/StationList";
import { MOCK_STATIONS } from "@/data/mockStations";
import { Info } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 selection:bg-emerald-500/30 font-sans pb-20">
      {/* Background glow effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[400px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none opacity-60"></div>

      <div className="relative max-w-5xl mx-auto z-10 space-y-16">

        {/* Header */}
        <header className="text-center mt-8 mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Meu <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Posto</span> Local
          </h1>
          <p className="text-slate-400 font-medium text-lg max-w-xl mx-auto">
            Calcule o custo real para o seu carro e descubra os melhores postos na sua região através da comunidade.
          </p>
        </header>

        {/* Section 1: Calculator */}
        <section className="max-w-xl mx-auto">
          <Calculator />
        </section>

        {/* Info Box -> privacy & collaboration info */}
        <section className="max-w-3xl mx-auto">
          <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-4 flex gap-4 text-indigo-300">
            <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div className="text-sm leading-relaxed">
              <p className="font-semibold mb-1">Como funciona a nossa Comunidade?</p>
              <p className="opacity-80">
                Os postos abaixo refletem análises anônimas enviadas por motoristas como você.
                Nós não rastreamos nomes e garantimos a sua privacidade para que as avaliações sejam criadas de forma segura e honesta.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Social Feed (Stations) */}
        <section className="pt-8 border-t border-slate-800/60">
          <StationList stations={MOCK_STATIONS} />
        </section>

      </div>
    </main>
  );
}
