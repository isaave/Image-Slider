import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function SliderControls({ currentIndex, total, onPrevious, onNext }) {
  return (
    <div className="mt-8 flex items-center gap-3" role="group" aria-label="Controles do slider">
      <button
        type="button"
        aria-label="Imagem anterior"
        onClick={onPrevious}
        className="grid size-13 place-items-center rounded-2xl border border-violet-100 bg-white text-mauve shadow-sm transition-colors hover:bg-violet-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
      >
        <ArrowLeft size={20} />
      </button>

      <button
        type="button"
        aria-label="Próxima imagem"
        onClick={onNext}
        className="grid size-13 place-items-center rounded-2xl bg-mauve text-white shadow-sm transition-colors hover:bg-mauve/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
      >
        <ArrowRight size={20} />
      </button>

      <span aria-live="polite" className="ml-auto text-sm font-bold text-mauve">
        {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
    </div>
  );
}
