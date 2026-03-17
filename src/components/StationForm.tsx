import { useState } from "react";
import { Send, MapPin } from "lucide-react";

interface StationFormProps {
  onSubmit: (name: string, distance: string, alcoholPrice: number, gasPrice: number, tags: string[]) => void;
  onCancel: () => void;
}

const AVAILABLE_TAGS = ["Mais Barato", "Boa qualidade", "Sem fila", "Suspeito", "Promoção"];

export function StationForm({ onSubmit, onCancel }: StationFormProps) {
  const [name, setName] = useState("");
  const [distance, setDistance] = useState("0.5 km (Estimado)");
  const [alcohol, setAlcohol] = useState("");
  const [gas, setGas] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parse = (val: string) => parseFloat(val.replace(",", "."));
    const pAlcohol = parse(alcohol);
    const pGas = parse(gas);

    if (!name || isNaN(pAlcohol) || isNaN(pGas)) {
      alert("Preencha o nome e os preços (números válidos).");
      return;
    }
    
    onSubmit(name, distance, pAlcohol, pGas, selectedTags);
  };

  return (
    <div className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 shadow-xl mb-6 animate-in fade-in slide-in-from-top-4 duration-500">
      <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
        <MapPin className="text-emerald-400 w-5 h-5" /> Adicionar Novo Posto
      </h3>
      <p className="text-sm text-slate-400 mb-6">Ajude a comunidade compartilhando os preços de um posto que você acabou de visitar. Tudo é 100% anônimo.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="text-xs font-semibold text-slate-300 ml-1 block mb-1">Nome ou Bandeira do Posto</label>
          <input 
            type="text" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            required 
            placeholder="Ex: Auto Posto Shell Centro" 
            className="w-full bg-slate-950/50 border border-slate-700/50 rounded-xl py-2 px-4 text-slate-200 focus:ring-2 focus:ring-emerald-500/50 outline-none"
          />
        </div>

        {/* Prices Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-slate-300 ml-1 block mb-1">Preço Etanol (R$)</label>
            <input 
              type="number" step="0.01" 
              value={alcohol} 
              onChange={e => setAlcohol(e.target.value)} 
              required 
              placeholder="0.00" 
              className="w-full bg-slate-950/50 border border-slate-700/50 rounded-xl py-2 px-4 text-emerald-400 focus:ring-2 focus:ring-emerald-500/50 outline-none"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-300 ml-1 block mb-1">Preço Gasolina (R$)</label>
            <input 
              type="number" step="0.01" 
              value={gas} 
              onChange={e => setGas(e.target.value)} 
              required 
              placeholder="0.00" 
              className="w-full bg-slate-950/50 border border-slate-700/50 rounded-xl py-2 px-4 text-cyan-400 focus:ring-2 focus:ring-cyan-500/50 outline-none"
            />
          </div>
        </div>

        {/* Tags Selection */}
        <div className="mb-4 pt-2">
          <p className="text-xs font-semibold text-slate-300 ml-1 mb-2">Características Rápidas:</p>
          <div className="flex flex-wrap gap-2">
            {AVAILABLE_TAGS.map(tag => (
               <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                    selectedTags.includes(tag) 
                    ? "bg-indigo-500/20 border-indigo-500 text-indigo-300"
                    : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500"
                  }`}
               >
                 {tag}
               </button>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 justify-end pt-4 border-t border-slate-800">
          <button 
            type="button" 
            onClick={onCancel}
            className="px-5 py-2.5 text-sm font-semibold text-slate-400 hover:text-slate-200 transition-colors"
          >
            Cancelar
          </button>
          <button 
            type="submit"
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl text-sm font-bold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all"
          >
            <Send className="w-4 h-4" /> Compartilhar com a Comunidade
          </button>
        </div>
      </form>
    </div>
  );
}
