import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                  Quality Control
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color">
                  Each product undergoes careful inspection, cleaning, and grading to meet
                  international food safety and quality standards.
                </p>

              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                  Export Compliance
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color">
                  We follow proper export documentation, packaging regulations, and customs
                  requirements for smooth international trade.
                </p>

              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                  Trusted Supply Chain
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color">
                  Strong relationships with farmers, processors, and logistics partners ensure
                  consistency and reliability for every shipment.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
