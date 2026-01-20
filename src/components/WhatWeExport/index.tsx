// components/WhatWeExport.tsx
"use client";

import useEmblaCarousel from 'embla-carousel-react';
import featuresData from "./exportData";
import SingleFeature from "./SingleExport";
import SectionTitle from '../Common/SectionTitle';
import FadeIn from '../motion/FadeIn';

export default function WhatWeExport() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: 'start',
    dragFree: true,
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { dragFree: false, slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 },
    }
  });

  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <FadeIn delay={0.2}>
          <SectionTitle
            title="What We Export"
            paragraph="Discover our premium selection of Afghan dry fruits and nuts, meticulously sourced and exported to meet the highest quality standards. From luscious almonds to rich walnuts, our products are a testament to excellence and authenticity."
            center
          />
        </FadeIn>

        <div className="embla overflow-hidden mt-12">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container flex gap-x-8">
              {featuresData.map((feature, index) => (
                <div
                  key={feature.id}
                  className="embla__slide min-w-0 flex-[0_0_85%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <FadeIn delay={index * 0.5}>
                    <SingleFeature feature={feature} />
                  </FadeIn>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
