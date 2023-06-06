import classNames from "classnames";
import { useInView } from "framer-motion";
import React, { useRef } from "react";

type Props = {
  children: React.ReactNode;
};

export default function FeatureTitle({ children }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  return (
    <p
      ref={ref}
      className={classNames(
        "py-16 text-5xl transition-colors",
        isInView ? "text-black" : "text-gray-300"
      )}
    >
      {children}
    </p>
  );
}
