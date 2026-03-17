'use client';

import React, { useState } from 'react';
import { StationCard } from './StationCard';
import { Station } from '@/data/mockStations';

type SortOption = 'distance' | 'price' | 'rating';

type StationListProps = {
  stations: Station[];
};

export function StationList({ stations }: StationListProps) {
  const [sortBy, setSortBy] = useState<SortOption>('distance');

  const sortedStations = [...stations].sort((a, b) => {
    if (sortBy === 'distance') return a.distanceKm - b.distanceKm;
    if (sortBy === 'price') {
      const priceA = Math.min(a.priceAlcool || 999, a.priceGasolina || 999);
      const priceB = Math.min(b.priceAlcool || 999, b.priceGasolina || 999);
      return priceA - priceB;
    }
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-bold text-lg text-white">Postos Próximos</h2>
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          className="bg-p-surface border border-p-border text-sm rounded-lg px-2 py-1 text-p-text-muted outline-none focus:border-p-primary"
        >
          <option value="distance">Distância</option>
          <option value="price">Menor Preço</option>
          <option value="rating">Melhor Avaliação</option>
        </select>
      </div>

      <div className="flex flex-col gap-4">
        {sortedStations.map(station => (
          <StationCard key={station.id} station={station} />
        ))}
      </div>
    </div>
  );
}
