import React from 'react';
import Link from 'next/link';
import { StationList } from '@/components/Stations/StationList';
import { MOCK_STATIONS } from '@/data/mockStations';
import { AddStationModal } from '@/components/Stations/AddStationModal';

export default function PostosPage() {
  return (
    <div className="flex flex-col flex-1 p-6">
      <div className="flex items-center mb-6">
        <Link href="/" className="mr-4 p-2 bg-p-surface border border-p-border rounded-lg hover:bg-p-surface-hover transition-colors text-white">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </Link>
        <div>
          <h2 className="text-xl font-bold text-white">Postos na Região</h2>
          <p className="text-sm text-p-text-muted">Explore ou cadastre novos preços</p>
        </div>
      </div>

      <div className="flex-1">
        <StationList stations={MOCK_STATIONS} />
      </div>

      <div className="mt-8 sticky bottom-6">
        <AddStationModal />
      </div>
    </div>
  );
}
