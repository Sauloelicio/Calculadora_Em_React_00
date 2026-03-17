import React from 'react';

type RatingStarsProps = {
  rating: number; 
  max?: number;
};

export function RatingStars({ rating, max = 5 }: RatingStarsProps) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Avaliação ${rating} de ${max} estrelas`}>
      {Array.from({ length: max }).map((_, i) => {
        const isFilled = i < Math.round(rating);
        return (
          <svg 
            key={i} 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill={isFilled ? "currentColor" : "none"} 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={`${isFilled ? 'text-amber-400' : 'text-zinc-600'}`}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        );
      })}
      <span className="ml-1 text-xs font-medium text-p-text-muted">{rating.toFixed(1)}</span>
    </div>
  );
}
