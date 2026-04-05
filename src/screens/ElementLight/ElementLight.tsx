import { HeroSection } from "./sections/Hero";
import { CTASection } from "./sections/CTA";
import { ProductsSection } from "./sections/Products";
import { ServicesSection } from "./sections/ourservices/ourservices";
import { ApproachSection } from "./sections/approach/approach";
import { FooterSection } from "./sections/FooterSection";
import { TopNav } from "./sections/Hero";
import { OurClientsSection } from "./sections/OurClients";

export const ElementLight = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-stretch relative bg-[linear-gradient(0deg,rgba(246,246,246,1)_0%,rgba(246,246,246,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
      <div className="flex flex-col items-center relative self-stretch w-full">
        <TopNav />
        <div id="hero" className="w-full"><HeroSection /></div>
        <OurClientsSection />
        <div id="products" className="w-full"><ProductsSection /></div>
        <div id="services" className="w-full"><ServicesSection /></div>
        <div id="approach" className="w-full"><ApproachSection /></div>
        <div id="contact" className="w-full"><CTASection /></div>
        <FooterSection />
      </div>
    </div>
  );
};