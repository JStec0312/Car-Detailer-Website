"use client";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { urlFor } from "@/sanity/image";

export default function GalleryCarousel({ images }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // aktualizacja aktywnej kropki
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);


  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-hidden" ref={emblaRef} aria-label="Galeria detailingowa">
        <div className="flex gap-x-4">
          {images.map((image, index) => (
            <div key={index} className="min-w-full relative">
              <img
                src={urlFor(image.src)}
                alt={image.alt}
                className="w-full h-full aspect-[16/9] object-cover"
              />
              <span
                className={
                  "absolute top-4 left-4 text-2xl font-bold drop-shadow-lg " +
                  (index % 2 === 0 ? "text-white" : "text-secondary")
                }
              >
                {index % 2 === 0 ? "PRZED" : "PO"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* kropki */}
      <div className="flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === selectedIndex ? "bg-secondary" : "bg-white/30"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Przejdź do slajdu ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
