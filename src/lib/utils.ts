import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function getImageUrl(path: string) {
  // Si la ruta empieza con http(s), viene de un backend → la devolvemos tal cual
  if (path.startsWith("http")) return path;

  // Si es local (ejemplo: "carrousel/promo1.jpg"), anteponemos el BASE_URL
  return `${import.meta.env.BASE_URL}${path}`;
}
