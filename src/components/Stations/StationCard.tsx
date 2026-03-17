'use client';

import React, { useState } from 'react';
import { Station } from '@/data/mockStations';
import { TagLabel } from '@/components/UI/TagLabel';
import { RatingStars } from '@/components/UI/RatingStars';

type StationCardProps = {
  station: Station;
};

export function StationCard({ station }: StationCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full bg-p-surface border border-p-border rounded-2xl p-4 flex flex-col gap-3 group hover:border-zinc-700 transition-colors">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-white text-lg leading-tight">{station.name}</h3>
          <p className="text-sm text-p-text-muted mt-0.5">{station.address}</p>
        </div>
        <div className="flex flex-col items-end">
          <RatingStars rating={station.rating} />
          <span className="text-xs text-zinc-500 mt-1">{station.distanceKm} km</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-1">
        {station.tags.map(tag => (
          <TagLabel key={tag} label={tag} />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 mt-2">
        <div className="bg-p-bg/50 rounded-xl p-3 border border-white/5">
          <p className="text-xs text-p-text-muted mb-1">Etanol</p>
          <p className="font-bold text-lg text-emerald-400">
            {station.priceAlcool ? `R$ ${station.priceAlcool.toFixed(2).replace('.', ',')}` : '--'}
          </p>
        </div>
        <div className="bg-p-bg/50 rounded-xl p-3 border border-white/5">
          <p className="text-xs text-p-text-muted mb-1">Gasolina</p>
          <p className="font-bold text-lg text-white">
            {station.priceGasolina ? `R$ ${station.priceGasolina.toFixed(2).replace('.', ',')}` : '--'}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-2">
        <span className="text-xs text-zinc-600">Atualizado {station.lastUpdate}</span>
        
        {station.reviews.length > 0 && (
          <button 
            onClick={() => setExpanded(!expanded)}
            className="text-xs font-medium text-p-primary hover:text-p-primary-dark transition-colors"
          >
            {expanded ? 'Ocultar avaliações' : `Ver avaliações (${station.reviews.length})`}
          </button>
        )}
      </div>

      {expanded && station.reviews.length > 0 && (
        <div className="mt-3 pt-3 border-t border-p-border flex flex-col gap-3 animate-in fade-in slide-in-from-top-2">
          {station.reviews.map(review => (
            <div key={review.id} className="bg-p-bg/30 p-3 rounded-xl border border-white/5">
              <div className="flex justify-between items-center mb-1">
                <RatingStars rating={review.rating} />
                <span className="text-[10px] text-zinc-500">{new Date(review.date).toLocaleDateString('pt-BR')}</span>
              </div>
              <p className="text-sm text-zinc-300">"{review.comment}"</p>
              <p className="text-[10px] text-zinc-600 mt-2 text-right">Usuário Anônimo</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
