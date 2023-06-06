import { useInView } from "framer-motion";
import React, { useRef } from "react";

type Props = {
  children: React.ReactNode;
};

export default function FeatureTitle({ children }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);

  const isInView = useInView(ref);
  return (
    <p ref={ref} className="py-16 text-5xl text-gray-300">
      {children}
    </p>
  );
}
