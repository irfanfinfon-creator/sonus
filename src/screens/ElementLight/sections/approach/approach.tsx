import { ScrollWrapper } from "../../../../components/ui/useScrollAnimation";
import { ApproachGrid } from "./ApproachGrid";

export const ApproachSection = (): JSX.Element => {
  return (
    <section className="w-full">
      <div className="w-full mx-auto px-4 md:px-[80px] lg:px-[175px]">
        <div className="flex flex-col items-start gap-[15px] py-16 md:py-[100px] lg:py-[140px]">
          <div className="flex flex-col lg:flex-row items-stretch gap-4 w-full">
            <ScrollWrapper delay={0.2} className="flex-1">
              <div className="flex flex-col items-start gap-4 max-w-[471.6px]">
                <div className="w-full">
                  <span className="px-5 py-3 rounded-full text-white bg-gradient-warm font-medium">
                    why sonus
                  </span>
                </div>
                <div className="mt-10">
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-[72px] py-3 font-light text-charcoal-900 leading-tight mb-7">
                    Our approach
                  </h2>
                </div>

              </div>
            </ScrollWrapper>
          </div>
          <ApproachGrid />
        </div>
      </div>
    </section>
  );
};