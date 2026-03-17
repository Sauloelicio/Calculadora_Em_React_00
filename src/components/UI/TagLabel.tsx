import React from 'react';

export type TagType = 'Mais Barato' | 'Boa Qualidade' | 'Suspeito' | 'Promoção';

type TagLabelProps = {
  label: TagType;
};

export function TagLabel({ label }: TagLabelProps) {
  let colorClass = 'bg-zinc-800 text-zinc-300 border-zinc-700';
  let Icon = null;

  switch (label) {
    case 'Mais Barato':
      colorClass = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      Icon = (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
          <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      );
      break;
    case 'Boa Qualidade':
      colorClass = 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      Icon = (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      );
      break;
    case 'Promoção':
      colorClass = 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      Icon = (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
          <path d="m11.1 17.65-6.55 3.4c-.9.46-1.95-.2-1.95-1.22V5.5C2.6 4.12 3.72 3 5.1 3h13.8c1.38 0 2.5 1.12 2.5 2.5v14.33c0 1.02-1.05 1.68-1.95 1.22l-6.55-3.4a.5.5 0 0 0-.45 0Z"/>
        </svg>
      );
      break;
    case 'Suspeito':
      colorClass = 'bg-red-500/10 text-red-400 border-red-500/20';
      Icon = (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      );
      break;
  }

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border ${colorClass}`}>
      {Icon}
      {label}
    </span>
  );
}
