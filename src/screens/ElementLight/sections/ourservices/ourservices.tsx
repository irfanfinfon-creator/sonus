import { ServicesGrid } from "./ServicesGrid";

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="w-full px-4 md:px-[80px] lg:px-[175px] py-16 md:pt-[50px] lg:py-[140px] bg-cream-50 ">
      <div className="w-full">
        <span className="px-5 py-3 rounded-full text-white bg-gradient-warm font-medium">
          what we offer
        </span>
      </div>
      <div className="mt-10">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[72px] py-3 font-light text-charcoal-900 leading-tight">
          Our services
        </h2>
      </div>
      <div className="mt-10">
        <ServicesGrid />
      </div>
    </section>
  );
};
