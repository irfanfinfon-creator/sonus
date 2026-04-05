import { Button } from "../../../../components/ui/button";
import { ScrollWrapper } from "../../../../components/ui/useScrollAnimation";

export const CTASection = (): JSX.Element => {
  return (
    <section className="w-full px-4 md:px-[80px] lg:px-[174px] py-16 md:py-[100px] lg:py-[140px] bg-charcoal-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/ctabg.svg')] bg-cover bg-center opacity-20 pointer-events-none" />
      <div className="w-full">
        <ScrollWrapper>

          <div className="relative z-10 flex flex-col items-center gap-5">
            <div className="flex flex-col items-start w-full">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[64px] text-center font-light text-cream-100 leading-tight w-full">
                Ready To Get Started?
              </h2>
            </div>

            <div className="flex flex-col items-center w-full max-w-[385px]">
              <p className="self-stretch font-normal text-cream-200 text-base sm:text-lg lg:text-lg text-center leading-[25.2px]">
                Let's schedule a free consultation to discuss your project and explore how we can help
              </p>
            </div>
            <Button className="hover-scale h-auto px-10 py-3 bg-gradient-warm hover:opacity-90 rounded-[100px] font-semibold text-white text-base sm:text-lg lg:text-lg text-center leading-[25.2px] whitespace-nowrap border-none shadow-none">
              Start a Project
            </Button>
          </div>
        </ScrollWrapper>
      </div>
    </section>
  );
};