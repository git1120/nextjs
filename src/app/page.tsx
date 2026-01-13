import AboutSectionOne from "@/components/About/CompanyOverview";
import AboutSectionTwo from "@/components/About/Quality&Process";
import Blog from "@/components/Blog";
import Brands from "@/components/ExportDestinations";
import ScrollUp from "@/components/Common/ScrollUp";
import WhatWeExport from "@/components/WhatWeExport";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Najib Ahmad Exporting Company – Afghan Dry Fruits Exporter",
  description: "Najib Ahmad Exporting Company exports premium Afghan dry fruits including raisins, apricots, figs, and nuts worldwide with guaranteed quality.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <WhatWeExport />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
    </>
  );
}
