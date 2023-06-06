import classNames from "classnames";
import React from "react";
import { useFeatureStore } from "./store";

type Props = {
  id: string;
};

type VisualProps = {
  children: React.ReactNode;
} & Props;

export default function Visual({ children, id }: VisualProps) {
  const fullscreenFeature = useFeatureStore((state) => state.fullscreenFeature);
  return (
    <div
      className={classNames(
        "fixed inset-0 flex items-center justify-center transition-opacity",
        fullscreenFeature === id
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      )}
    >
      <div className=" max-w-6xl px-4">{children}</div>
    </div>
  );
}

export const MusicVisual = ({ id }: Props) => {
  return (
    <Visual id={id}>
      <img src="/window-spotify.webp" alt="image" />
    </Visual>
  );
};
export const OtherVisual = ({ id }: Props) => {
  return (
    <Visual id={id}>
      <img src="/window-spotify.webp" alt="image" />
    </Visual>
  );
};
