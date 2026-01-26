import { ONBOARDING_SLIDES } from "../utils/slides";
import { useOnboarding } from "../hooks/useOnboarding";
import {
  Slide,
  Content,
  Indicators,
  NavigationButtons,
  SkipButton,
} from "../components";

const OnboardingPage = () => {
  const {
    currentSlide,
    slide,
    isLastSlide,
    isFirstSlide,
    totalSlides,
    goToNext,
    goToPrevious,
    goToSlide,
    finishOnboarding,
  } = useOnboarding();

  return (
    <div
      className="h-full flex flex-col items-center justify-center p-8 relative"
      role="region"
      aria-label="Onboarding"
    >
      <SkipButton onSkip={finishOnboarding} />

      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-12">
        <Slide slides={ONBOARDING_SLIDES} />

        <section className="w-full lg:w-[420px] flex flex-col justify-center">
          <Content title={slide.title} description={slide.description} />

          <Indicators
            total={totalSlides}
            current={currentSlide}
            onSelect={goToSlide}
          />

          <NavigationButtons
            onNext={goToNext}
            onPrevious={goToPrevious}
            isFirstSlide={isFirstSlide}
            isLastSlide={isLastSlide}
          />
        </section>
      </div>
    </div>
  );
};

export default OnboardingPage;
