import { useState } from "react";
import { Star, Send } from "lucide-react";

interface ReviewFormProps {
  onSubmit: (rating: number, text: string, tags: string[]) => void;
  onCancel: () => void;
}

const AVAILABLE_TAGS = ["Mais Barato", "Boa qualidade", "Sem fila", "Suspeito", "Promoção"];

export function ReviewForm({ onSubmit, onCancel }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [text, setText] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return alert("Por favor, dê uma nota de 1 a 5 estrelas.");
    onSubmit(rating, text, selectedTags);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-950/80 p-4 rounded-xl border border-emerald-500/30 mt-3 animate-in fade-in slide-in-from-top-2 duration-300">
      <h4 className="text-sm font-bold text-slate-200 mb-3">Sua Avaliação Anônima</h4>
      
      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className="focus:outline-none"
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => setRating(star)}
          >
            <Star className={`w-6 h-6 transition-colors ${
              star <= (hoverRating || rating) ? "fill-amber-400 text-amber-400" : "text-slate-600"
            }`} />
          </button>
        ))}
      </div>

      {/* Tags Selection */}
      <div className="mb-4">
        <p className="text-xs text-slate-400 mb-2">Selecione tags rápidas (opcional):</p>
        <div className="flex flex-wrap gap-2">
          {AVAILABLE_TAGS.map(tag => (
             <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
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

      {/* Text Area */}
      <div className="mb-4">
        <textarea 
          placeholder="Deixe um comentário sobre a sua experiência... (opcional)"
          value={text}
          onChange={e => setText(e.target.value)}
          className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 resize-none h-20"
        ></textarea>
      </div>

      {/* Actions */}
      <div className="flex gap-2 justify-end">
        <button 
          type="button" 
          onClick={onCancel}
          className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-slate-200 transition-colors"
        >
          Cancelar
        </button>
        <button 
          type="submit"
          className="flex items-center gap-1.5 px-4 py-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-lg text-xs font-bold hover:bg-emerald-500/20 transition-colors"
        >
          <Send className="w-3 h-3" /> Enviar Discretamente
        </button>
      </div>
    </form>
  );
}
