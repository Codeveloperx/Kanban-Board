import { Button } from "@/shared/ui/button";

interface NavigationProps {
  onNext: () => void;
  onPrevious: () => void;
  isFirstSlide: boolean;
  isLastSlide: boolean;
}

export const OnboardingNavigation = ({
  onNext,
  onPrevious,
  isFirstSlide,
  isLastSlide,
}: NavigationProps) => {
  return (
    <div className="mt-8 flex gap-4">
      <Button
        variant="secondary"
        onClick={onPrevious}
        disabled={isFirstSlide}
        ariaLabel="Slide anterior"
      >
        Anterior
      </Button>
      <Button
        variant="primary"
        ariaLabel={isLastSlide ? "Empezar" : "Siguiente slide"}
        onClick={onNext}
      >
        {isLastSlide ? "Empezar" : "Siguiente"}
      </Button>
    </div>
  );
};
