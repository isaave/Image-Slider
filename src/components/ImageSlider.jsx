import { useState } from 'react';
import SliderControls from './SliderControls.jsx';
import { DEFAULT_SLIDE_INDEX, slides } from '../data/slides.js';

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(DEFAULT_SLIDE_INDEX);
  const slide = slides[currentIndex];

  function goToSlide(index) {
    setCurrentIndex((index + slides.length) % slides.length);
  }

  function handlePrevious() {
    goToSlide(currentIndex - 1);
  }

  function handleNext() {
    goToSlide(currentIndex + 1);
  }

  return (
    <section aria-label="Galeria da vida selvagem" className="w-full min-w-0">
      <p className="mb-5 text-xs font-bold tracking-[.18em] text-violet-600">
        EM DESTAQUE / {slide.title}
      </p>

      <div className="relative aspect-[1.17] rounded-[28px] bg-violet-100 p-6">
        <div className="absolute inset-10 rotate-[-7deg] rounded-3xl bg-violet-300/70" />
        <div className="absolute inset-9 rotate-[5deg] rounded-3xl bg-violet-200" />
        <img
          key={slide.id}
          src={slide.image}
          alt={slide.alt}
          className="animate-slide relative h-full w-full rounded-3xl object-cover shadow-2xl"
        />
      </div>

      <div className="mt-7">
        <h2 className="text-3xl font-bold">{slide.title}</h2>
        <p className="mt-3 text-base leading-relaxed text-slate-500">{slide.curiosity}</p>
      </div>

      <SliderControls
        currentIndex={currentIndex}
        total={slides.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </section>
  );
}
