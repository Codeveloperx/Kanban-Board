import { useEffect, useState } from "react";

interface CarouselProps {
  images: string[];
  interval?: number;
}

export const Carousel = ({ images, interval = 4000 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`
            absolute
            w-full h-full
            object-contain
            transition-opacity duration-700 ease-in-out
            ${index === currentIndex ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}

      <div className="absolute bottom-2.5 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`
              w-2 h-2 rounded-full
              transition-colors
              ${index === currentIndex ? "bg-amber-500" : "bg-sky-950"}
            `}
          />
        ))}
      </div>
    </div>
  );
};
