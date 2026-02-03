import { Button } from "@/shared/ui/button";

interface PropsTypes {
  onSkip: () => void;
}

export const OnboardingSkipButton = ({ onSkip }: PropsTypes) => {
  return (
    <Button
      onClick={onSkip}
      className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
    >
      Saltar
    </Button>
  );
};
