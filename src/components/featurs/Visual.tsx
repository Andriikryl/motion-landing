import React from "react";

type VisualProps = {
  children: React.ReactNode;
};

export default function Visual({ children }: VisualProps) {
  return (
    <div className=" fixed inset-0 flex items-center justify-center">
      <div className=" max-w-6xl px-4">{children}</div>
    </div>
  );
}

export const MusicVisual = () => {
  return (
    <Visual>
      <img src="/window-spotify.webp" alt="image" />
    </Visual>
  );
};
export const OtherVisual = () => {
  return (
    <Visual>
      <img src="/window-spotify.webp" alt="image" />
    </Visual>
  );
};
