interface ContentProps {
  title: string;
  description: string;
}

export const OnboardingContent = ({ title, description }: ContentProps) => {
  return (
    <div className="min-h-[120px] lg:text-start text-center">
      <h2 className="text-3xl font-semibold animate-fade-in">{title}</h2>
      <p className="mt-3 text-muted-foreground animate-fade-in delay-150">
        {description}
      </p>
    </div>
  );
};
