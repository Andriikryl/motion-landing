import classNames from "classnames";

type FeatureCardProps = {
  gradient: string;
  children: React.ReactNode;
};

export default function FeatureCard({ gradient, children }: FeatureCardProps) {
  return (
    <div
      className={classNames(
        " absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br",
        gradient
      )}
    >
      {children}
    </div>
  );
}

export const Todo = () => {
  return (
    <FeatureCard gradient="from-[#f7f0ff] to-[#a78afe]">
      <span />
    </FeatureCard>
  );
};

export const Colors = () => {
  return (
    <FeatureCard gradient="from-[#f7f0ff] to-[#a78a2e]">
      <span />
    </FeatureCard>
  );
};

export const Music = () => {
  return (
    <FeatureCard gradient="from-[#f7f0ff] to-[#e03dee]">
      <span />
    </FeatureCard>
  );
};

export const SchedulingLinks = () => {
  return (
    <FeatureCard gradient="from-[#f7f0ff] to-[#adf8ff]">
      <span />
    </FeatureCard>
  );
};

export const Team = () => {
  return (
    <FeatureCard gradient="from-[#f7f0ff] to-[#adffd8]">
      <span />
    </FeatureCard>
  );
};

export const Availability = () => {
  return (
    <FeatureCard gradient="from-[#f7f0ff] to-[#adffd8]">
      <span />
    </FeatureCard>
  );
};
