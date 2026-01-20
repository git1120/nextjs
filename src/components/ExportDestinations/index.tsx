// components/ExportDestinations.tsx
"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import brandsData from "./ExportDestinationsData";

export default function Brands() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [AutoScroll({ speed: 0.7, stopOnMouseEnter: false })]
  );

  return (
    <section className="py-16 overflow-hidden">
      <div className="container">
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container flex">
              {[...brandsData, ...brandsData].map((brand, idx) => (
                <div
                  key={`${brand.id}-${idx}`}
                  className="embla__slide min-w-0 flex-[0_0_auto] px-8 md:px-12 lg:px-16"
                >
                  <div className="flex h-24 w-48 items-center justify-center opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      width={600}
                      height={420}
                      className=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
