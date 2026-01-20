import type { JSX, ReactNode } from "react";
export type Feature = {
  id: number;
  icon: ReactNode | JSX.Element;
  title: string;
  paragraph: string;
};
