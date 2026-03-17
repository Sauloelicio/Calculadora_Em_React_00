import { Station, Review } from "../types";
import { Star, MapPin, Tag, ChevronDown, ChevronUp, MessageSquarePlus } from "lucide-react";
import { useState } from "react";
import { ReviewForm } from "./ReviewForm";

export function StationCard({ station }: { station: Station }) {
  const [showReviews, setShowReviews] = useState(false);
  const [isAddingReview, setIsAddingReview] = useState(false);
  const [localReviews, setLocalReviews] = useState<Review[]>(station.reviews);

  const handleAddReview = (rating: number, text: string, tags: string[]) => {
    const newReview: Review = {
      id: Math.random().toString(36).substring(7),
      rating,
      text,
      tags,
      date: new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" }),
    };
    setLocalReviews([newReview, ...localReviews]);
    setIsAddingReview(false);
  };

  return (
    <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-5 shadow-lg transition-transform hover:-translate-y-1 duration-300">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-bold text-lg text-slate-100 flex items-center gap-2">
            {station.name}
          </h3>
          <p className="text-sm text-slate-400 flex items-center gap-1 mt-1">
            <MapPin className="w-4 h-4 text-emerald-500" /> {station.distance}
          </p>
        </div>
        <div className="flex items-center gap-1 bg-amber-500/10 text-amber-400 px-2 py-1 rounded-lg border border-amber-500/20">
          <Star className="w-4 h-4 fill-amber-400" />
          <span className="font-bold text-sm">{station.averageRating.toFixed(1)}</span>
        </div>
      </div>

      <div className="flex gap-2 mb-4 flex-wrap">
        {station.tags.map((tag, idx) => (
          <span key={idx} className="bg-indigo-500/10 text-indigo-300 text-xs px-2 py-1 rounded-full border border-indigo-500/20 flex items-center gap-1">
            <Tag className="w-3 h-3" /> {tag}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-slate-950/50 rounded-xl p-3 border border-slate-800">
          <p className="text-xs text-slate-500 font-semibold mb-1">Etanol</p>
          <p className="text-xl font-bold text-emerald-400">R$ {station.alcoholPrice.toFixed(2)}</p>
        </div>
        <div className="bg-slate-950/50 rounded-xl p-3 border border-slate-800">
          <p className="text-xs text-slate-500 font-semibold mb-1">Gasolina</p>
          <p className="text-xl font-bold text-cyan-400">R$ {station.gasPrice.toFixed(2)}</p>
        </div>
      </div>

      <div className="pt-3 border-t border-slate-800">
        <button 
          onClick={() => setShowReviews(!showReviews)}
          className="w-full flex justify-between items-center text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors"
        >
          <span>Avaliações da Comunidade ({localReviews.length})</span>
          {showReviews ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {showReviews && (
          <div className="mt-4 space-y-3">
            {localReviews.length === 0 ? (
              <p className="text-xs text-slate-500 italic">Nenhuma avaliação ainda. Seja o primeiro!</p>
            ) : (
              localReviews.map((review) => (
                <div key={review.id} className="bg-slate-950/40 p-3 rounded-lg border border-slate-800/60">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-slate-600"}`} />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-500">{review.date}</span>
                  </div>
                  <p className="text-xs text-slate-300 mb-2">{review.text}</p>
                  
                  {review.tags && review.tags.length > 0 && (
                     <div className="flex flex-wrap gap-1 mt-1">
                       {review.tags.map((t, i) => (
                         <span key={i} className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded-sm">#{t}</span>
                       ))}
                     </div>
                  )}
                </div>
              ))
            )}
            
            {!isAddingReview ? (
               <button 
                  onClick={() => setIsAddingReview(true)}
                  className="w-full mt-2 flex justify-center items-center gap-2 bg-slate-800/50 hover:bg-slate-800 text-emerald-400 text-xs py-2.5 rounded-lg transition-colors font-semibold border border-emerald-500/20"
               >
                 <MessageSquarePlus className="w-4 h-4" /> Deixar Avaliação Anônima
               </button>
            ) : (
               <ReviewForm 
                  onSubmit={handleAddReview} 
                  onCancel={() => setIsAddingReview(false)} 
               />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
