interface IndicatorsProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}

export const OnboardingIndicators = ({
  total,
  current,
  onSelect,
}: IndicatorsProps) => {
  return (
    <div
      className="mt-6 flex gap-2 items-center justify-center"
      role="tablist"
      aria-label="Slides de onboarding"
    >
      {[...Array(total).keys()].map((index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`h-2 rounded-full transition-all duration-300 ${
            index === current
              ? "bg-zinc-900 w-8"
              : "bg-gray-300 w-2 hover:bg-gray-400"
          }`}
          role="tab"
          aria-selected={index === current}
          aria-label={`Ir al slide ${index + 1}`}
        />
      ))}
    </div>
  );
};
