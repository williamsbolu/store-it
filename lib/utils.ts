import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseStringify = (value: unknown) => {
  // Whenever passing large payloads to server actions, we first have to stringify and parse that value.
  return JSON.parse(JSON.stringify(value));
};
