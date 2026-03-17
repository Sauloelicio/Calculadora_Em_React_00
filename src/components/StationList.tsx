import { Station } from "../types";
import { StationCard } from "./StationCard";
import { StationForm } from "./StationForm";
import { ListFilter, MapPinned } from "lucide-react";
import { useState } from "react";

export function StationList({ stations: initialStations }: { stations: Station[] }) {
  const [stations, setStations] = useState<Station[]>(initialStations);
  const [isAddingStation, setIsAddingStation] = useState(false);

  const handleAddStation = (name: string, distance: string, alcoholPrice: number, gasPrice: number, tags: string[]) => {
    const newStation: Station = {
      id: Math.random().toString(36).substring(7),
      name,
      distance,
      alcoholPrice,
      gasPrice,
      averageRating: 0,
      tags,
      reviews: []
    };
    setStations([newStation, ...stations]);
    setIsAddingStation(false);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
          Comunidade Local
        </h2>
        <div className="flex gap-2">
           <button 
             onClick={() => setIsAddingStation(!isAddingStation)}
             className="flex items-center gap-1.5 text-sm font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 px-3 py-1.5 rounded-lg border border-emerald-500/30 transition-colors"
           >
             <MapPinned className="w-4 h-4" /> Adicionar
           </button>
           <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-700/50">
             <ListFilter className="w-4 h-4" />
             Ordenar
           </button>
        </div>
      </div>

      {isAddingStation && (
        <StationForm 
          onSubmit={handleAddStation} 
          onCancel={() => setIsAddingStation(false)} 
        />
      )}

      {stations.length === 0 ? (
        <div className="text-center py-10 bg-slate-900/30 rounded-2xl border border-slate-800/50 border-dashed">
          <p className="text-slate-500">Nenhum posto encontrado na região.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stations.map((station) => (
            <StationCard key={station.id} station={station} />
          ))}
        </div>
      )}
    </div>
  );
}
