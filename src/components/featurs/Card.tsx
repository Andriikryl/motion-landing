import classNames from "classnames";

type FeatureCardProps = {
  gradient: string;
};

export default function FeatureCard({ gradient }: FeatureCardProps) {
  return (
    <div
      className={classNames(
        "h-full w-full rounded-2xl bg-gradient-to-br",
        gradient
      )}
    >
      Card
    </div>
  );
}
