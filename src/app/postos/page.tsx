import React from 'react';
import Link from 'next/link';
import { StationList } from '@/components/StationList';
import { MOCK_STATIONS } from '@/data/mockStations';

export default function PostosPage() {
  return (
    <div className="flex flex-col flex-1 p-6">
      <div className="flex items-center mb-6">
        <Link href="/" className="mr-4 p-2 bg-slate-900/50 border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors text-slate-100">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </Link>
        <div>
          <h2 className="text-xl font-bold text-slate-100">Postos na Região</h2>
          <p className="text-sm text-slate-400">Explore ou cadastre novos preços</p>
        </div>
      </div>

      <div className="flex-1 w-full max-w-5xl mx-auto">
        <StationList stations={MOCK_STATIONS} />
      </div>
    </div>
  );
}
