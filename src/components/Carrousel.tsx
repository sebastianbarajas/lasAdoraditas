import React, { useEffect, useRef, useState } from "react";

interface CarouselProps {
  images: string[];
  interval?: number; // ms entre slides
  aspectWidth?: number; // ancho original de la imagen (por defecto 1439)
  aspectHeight?: number; // alto original de la imagen (por defecto 420)
}

const Carrousel = ({
  images,
  interval = 3000,
  aspectWidth = 1439,
  aspectHeight = 420,
}: CarouselProps) => {
  const [current, setCurrent] = useState(0);
  const len = images?.length ?? 0;
  const timerRef = useRef<number | null>(null);

  // si no hay imágenes no renderizamos nada
  if (len === 0) return null;

  // padding-top % para forzar la relación de aspecto (fallback cross-browser)
  const paddingTopPercent = (aspectHeight / aspectWidth) * 100;

  useEffect(() => {
    // limpiar si hay uno previo
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % len);
    }, interval);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [interval, len]);

  return (
    <div className="w-full overflow-hidden relative">
      {/* contenedor que se desplaza */}
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="min-w-full flex-shrink-0">
            {/* contenedor con aspect-ratio vía padding-top (fallback compatible) */}
            <div
              className="relative w-full overflow-hidden bg-transparent"
              style={{ paddingTop: `${paddingTopPercent}%` }}
            >
              {/* imagen absoluta que llena el contenedor y se muestra completa */}
              <img
                src={src}
                alt={`slide-${i}`}
                className="absolute inset-0 w-full h-full object-contain"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
