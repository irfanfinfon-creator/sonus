import { Button } from "../../../../components/ui/button";
import { ScrollWrapper } from "../../../../components/ui/useScrollAnimation";

export const HeroSection = (): JSX.Element => {
  return (
    <ScrollWrapper className="w-full">
      <section className="w-full mx-auto">
        <div className="w-full px-4 md:px-[80px] lg:px-[174px] md:py-auto lg:py-auto bg-[url('/orangegradient.svg')] bg-cover bg-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2.5 w-full">
            {/* Content - All animated as ONE */}
            <div className="animate-fade-up flex flex-col h-[85vh] items-center justify-center gap-[9px] py-[140px] flex-1">
              <div className="flex flex-col items-center justify-center gap-[31px]">
                <div className="inline-flex max-w-[1390px] bg-gradient-to-r from-amber-50 to-amber-100 flex-col items-center rounded-[100px] backdrop-blur-[10px]">
                  <div className="inline-flex flex-col items-center justify-center">
                    <span className="px-5 py-[10px] rounded-full text-base bg-white text-orange-600 font-medium text-center">
                      transforming industries with intuitive digital solutions
                    </span>
                  </div>
                </div>

                <h1 className="font-serif font-light text-white text-4xl sm:text-5xl lg:text-[85px] leading-[normal] m-0 text-center">
                  We build software <br /> that solves real problems.
                </h1>

                <p className="max-w-[1390px] font-normal text-white text-base sm:text-lg lg:text-lg leading-[25.2px] m-0">
                  From education platforms to ride-sharing apps, we create powerful
                  technology <br />
                  that connects people and streamlines operations across diverse
                  sectors.
                </p>

                <div className="flex flex-wrap items-center gap-5 w-full justify-center items-center">
                  <Button
                    variant="outline"
                    className="hover-scale h-auto px-[41px] py-3 bg-cream-100 rounded-[100px] font-medium text-charcoal-900 text-base sm:text-lg lg:text-lg text-center leading-[25.2px] whitespace-nowrap hover:bg-cream-200"
                  >
                    Explore Our Products
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollWrapper>
  );
};