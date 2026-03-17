import { useCalculator } from "../hooks/useCalculator";
import { Calculator as CalcIcon, Droplets, Fuel, Car, Navigation } from "lucide-react";

export function Calculator() {
  const {
    alcoholPrice, setAlcoholPrice,
    gasPrice, setGasPrice,
    alcoholConsumption, setAlcoholConsumption,
    gasConsumption, setGasConsumption,
    tankCapacity, setTankCapacity,
    result,
    calculate
  } = useCalculator();

  return (
    <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 shadow-2xl shadow-emerald-900/10">
      <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
        <CalcIcon className="text-emerald-400 w-6 h-6" />
        <h2 className="text-xl font-bold text-slate-100">Calculadora Inteligente</h2>
      </div>

      <form onSubmit={calculate} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Ethanol Section */}
          <div className="space-y-4 bg-slate-800/20 p-4 rounded-2xl border border-slate-700/30">
            <div className="flex items-center gap-2 mb-2 text-emerald-400">
              <Droplets className="w-5 h-5" />
              <h3 className="font-semibold">Etanol</h3>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400 ml-1 block mb-1">Preço (R$)</label>
              <input type="number" step="0.01" value={alcoholPrice} onChange={e => setAlcoholPrice(e.target.value)} required
                className="w-full bg-slate-950/50 border border-slate-700/50 rounded-xl py-2.5 px-4 text-slate-200 focus:ring-2 focus:ring-emerald-500/50 outline-none" placeholder="Ex: 3.50" />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400 ml-1 block mb-1">Consumo (km/l)</label>
              <input type="number" step="0.1" value={alcoholConsumption} onChange={e => setAlcoholConsumption(e.target.value)} required
                className="w-full bg-slate-950/50 border border-slate-700/50 rounded-xl py-2.5 px-4 text-slate-200 focus:ring-2 focus:ring-emerald-500/50 outline-none" placeholder="Ex: 8.5" />
            </div>
          </div>

          {/* Gas Section */}
          <div className="space-y-4 bg-slate-800/20 p-4 rounded-2xl border border-slate-700/30">
            <div className="flex items-center gap-2 mb-2 text-cyan-400">
              <Fuel className="w-5 h-5" />
              <h3 className="font-semibold">Gasolina</h3>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400 ml-1 block mb-1">Preço (R$)</label>
              <input type="number" step="0.01" value={gasPrice} onChange={e => setGasPrice(e.target.value)} required
                className="w-full bg-slate-950/50 border border-slate-700/50 rounded-xl py-2.5 px-4 text-slate-200 focus:ring-2 focus:ring-cyan-500/50 outline-none" placeholder="Ex: 5.50" />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400 ml-1 block mb-1">Consumo (km/l)</label>
              <input type="number" step="0.1" value={gasConsumption} onChange={e => setGasConsumption(e.target.value)} required
                className="w-full bg-slate-950/50 border border-slate-700/50 rounded-xl py-2.5 px-4 text-slate-200 focus:ring-2 focus:ring-cyan-500/50 outline-none" placeholder="Ex: 11.0" />
            </div>
          </div>
        </div>

        {/* Tank Capacity */}
        <div>
          <label className="text-xs font-semibold text-slate-400 ml-1 block mb-1 flex items-center gap-2">
            <Car className="w-4 h-4" /> Tamanho do Tanque (Litros)
          </label>
          <input type="number" step="1" value={tankCapacity} onChange={e => setTankCapacity(e.target.value)} required
            className="w-full bg-slate-950/50 border border-slate-700/50 rounded-xl py-2.5 px-4 text-slate-200 focus:ring-2 focus:ring-indigo-500/50 outline-none" placeholder="Ex: 50" />
        </div>

        <button type="submit" className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 p-[2px]">
          <div className="relative w-full bg-slate-900 rounded-[10px] py-3 text-center font-bold text-slate-100 group-hover:bg-transparent transition-all duration-300">
            Calcular Vantagem Real
          </div>
        </button>
      </form>

      {/* Results */}
      {result && (
        <div className={`mt-6 p-5 rounded-2xl border animate-in fade-in zoom-in duration-300 ${result.bestFuel === "alcohol" ? "bg-emerald-500/10 border-emerald-500/30" : "bg-cyan-500/10 border-cyan-500/30"
          }`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-2 rounded-full ${result.bestFuel === "alcohol" ? "bg-emerald-500/20 text-emerald-400" : "bg-cyan-500/20 text-cyan-400"}`}>
              {result.bestFuel === 'alcohol' ? <Droplets className="w-6 h-6" /> : <Fuel className="w-6 h-6" />}
            </div>
            <h3 className={`text-xl font-bold ${result.bestFuel === "alcohol" ? "text-emerald-300" : "text-cyan-300"}`}>
              {result.message}
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm mt-4">
            <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-700/50">
              <p className="text-slate-400 mb-1 flex items-center gap-1"><Navigation className="w-3 h-3" /> Custo por KM</p>
              <p className="text-emerald-400 font-mono">E: R$ {result.costPerKmAlcohol.toFixed(2)}</p>
              <p className="text-cyan-400 font-mono">G: R$ {result.costPerKmGas.toFixed(2)}</p>
            </div>
            <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-700/50">
              <p className="text-slate-400 mb-1 flex items-center gap-1"><Car className="w-3 h-3" /> Encher o Tanque</p>
              <p className="text-emerald-400 font-mono">E: R$ {result.fillTankAlcohol.toFixed(2)}</p>
              <p className="text-cyan-400 font-mono">G: R$ {result.fillTankGas.toFixed(2)}</p>
            </div>
          </div>
          <div className="mt-4 text-center bg-slate-950/30 py-2 rounded-lg text-slate-300 text-sm">
            Economia de <strong className="text-white">R$ {result.differenceToFill.toFixed(2)}</strong> por tanque cheio.
          </div>
        </div>
      )}
    </div>
  );
}
