type slide = {
  id: string | number;
  image: string;
  title: string;
};

interface SlideProps {
  slides: slide[];
}

export const OnboardingSlide = ({ slides }: SlideProps) => {
  return (
    <section
      className="lg:flex-1 flex items-center justify-center h-[420px] relative overflow-hidden"
      aria-live="polite"
    >
      <div className="flex h-full transition-transform duration-700 ease-in-out">
        {slides.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.image}
            alt={slide.title}
            className="w-full shrink-0 h-full object-contain"
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>
    </section>
  );
};
