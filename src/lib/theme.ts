import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const theme = {
  colors: {
    primary: "#6366f1",
    secondary: "#8b5cf6",
    background: {
      dark: "#000000",
      light: "#ffffff",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.7)",
      muted: "rgba(255, 255, 255, 0.5)",
    },
    border: {
      light: "rgba(255, 255, 255, 0.1)",
      dark: "rgba(0, 0, 0, 0.1)",
    },
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "1rem",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
  },
  transitions: {
    default: "all 0.2s ease-in-out",
    fast: "all 0.1s ease-in-out",
    slow: "all 0.3s ease-in-out",
  },
  glass: {
    background: "rgba(0, 0, 0, 0.2)",
    backdrop: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
} as const; 