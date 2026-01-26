import { KEY_ONBOARDING_COMPLETED } from "@/shared/constants/Constants";
import { ONBOARDING_SLIDES, setItem } from "@/shared/utils";
import { ROUTES } from "@/app/router/routes";
import { useState } from "react";
import { useNavigation } from "@/shared/hooks";

export const useOnboarding = () => {
  const { goTo } = useNavigation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === ONBOARDING_SLIDES.length - 1;
  const totalSlides = ONBOARDING_SLIDES.length;
  const slide = ONBOARDING_SLIDES[currentSlide];

  const finishOnboarding = () => {
    setItem<boolean>(KEY_ONBOARDING_COMPLETED, true);
    goTo(ROUTES.BOARDS);
  };

  const goToNext = () => {
    if (isLastSlide) {
      finishOnboarding();
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const goToPrevious = () => {
    if (!isFirstSlide) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  };

  return {
    currentSlide,
    slide,
    isLastSlide,
    isFirstSlide,
    totalSlides,

    goToNext,
    goToPrevious,
    goToSlide,
    finishOnboarding,
  };
};
