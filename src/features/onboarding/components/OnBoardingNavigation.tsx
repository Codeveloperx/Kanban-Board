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
      <Button.Secondary
        onClick={onPrevious}
        disabled={isFirstSlide}
        label="Anterior"
        ariaLabel="Slide anterior"
      />
      <Button.Primary
        onClick={onNext}
        label={isLastSlide ? "Empezar" : "Siguiente"}
        ariaLabel={isLastSlide ? "Empezar" : "Siguiente slide"}
      />
    </div>
  );
};
