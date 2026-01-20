import AboutSectionOne from "@/components/About/CompanyOverview";
import AboutSectionTwo from "@/components/About/Quality&Process";
import Brands from "@/components/ExportDestinations";
import ScrollUp from "@/components/Common/ScrollUp";
import WhatWeExport from "@/components/WhatWeExport";
import HeroSection from "@/components/hero-section";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import FadeInSection from "@/components/motion/FadeInSection";

export const metadata: Metadata = {
  title: "Najeeb Ahmad Exporting Company – Afghan Dry Fruits Exporter",
  description: "Najeeb Ahmad Exporting Company exports premium Afghan dry fruits including raisins, apricots, figs, and nuts worldwide with guaranteed quality.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <HeroSection />
      
    </>
  );
}
