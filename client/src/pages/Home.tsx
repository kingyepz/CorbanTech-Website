import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import ServiceCalculator from "@/components/sections/ServiceCalculator";
import Industries from "@/components/sections/Industries";
import Portfolio from "@/components/sections/Portfolio";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import CaseStudies from "@/components/sections/CaseStudies";
import Newsletter from "@/components/sections/Newsletter";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <ServiceCalculator />
      <Industries />
      <Portfolio />
      <CaseStudies />
      <Team />
      <Testimonials />
      <Newsletter />
      <Contact />
    </div>
  );
}