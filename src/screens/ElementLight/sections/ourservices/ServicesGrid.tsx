import { ScrollWrapper } from "../../../../components/ui/useScrollAnimation";

const services = [
  {
    id: "001",
    title: "Web Development",
    description: "Custom solutions built with modern frameworks and optimized performance & scalability.",
  },
  {
    id: "002",
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
  },
  {
    id: "003",
    title: "UI/UX Design",
    description: "Human-centered design that creates intuitive interfaces and delightful user experiences.",
  },
  {
    id: "004",
    title: "Consulting",
    description: "Strategic technology consulting to guide your digital transformation journey.",
  },
  {
    id: "005",
    title: "E-Commerce",
    description: "Custom web applications built with modern frameworks and optimized for performance and scalability.",
  },
  {
    id: "006",
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment strategies for modern applications.",
  },
];

const getBorderClass = (index: number): string => {
  switch (index) {
    case 0: // Cell 1 - Top-left
      return "lg:border-b lg:border-b-[#333333]";
    case 1: // Cell 2 - Top-middle
      return "lg:border-r lg:border-b lg:border-l border-charcoal-900";
    case 2: // Cell 3 - Top-right
      return "lg:border-b border-charcoal-900";
    case 3: // Cell 4 - Bottom-left
      return "";
    case 4: // Cell 5 - Bottom-middle
      return "lg:border-r lg:border-l border-charcoal-900";
    case 5: // Cell 6 - Bottom-right
      return "";
    default:
      return "";
  }
};

export const ServicesGrid = (): JSX.Element => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
      <div className={`flex flex-col items-center justify-center gap-5 px-2.5 py-10 lg:py-[104px] w-full h-full ${getBorderClass(0)}`}>
        <ScrollWrapper delay={0} className="hover-scale w-full h-full">
          <div className="flex flex-col items-center justify-center gap-5">
            <span className="px-5 py-1 rounded-2xl text-charcoal-900 bg-[linear-gradient(177deg,rgba(255,136,0,0.25)_0%,rgba(255,217,0,0.25)_100%)]">
              {services[0].id}
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-[32px] font-light text-charcoal-900 leading-tight">
              {services[0].title}
            </h3>
            <p className="text-base sm:text-lg text-charcoal-900 text-center leading-[25.2px] max-w-[403px]">
              {services[0].description}
            </p>
          </div>
        </ScrollWrapper>
      </div>

      {/* Mobile divider */}
      <div className="flex lg:hidden w-full border-b border-charcoal-700" />


      <div className={`flex flex-col items-center justify-center gap-5 px-2.5 py-10 lg:py-[104px] ${getBorderClass(1)}`}>
        <ScrollWrapper delay={0.1} className="hover-scale">
          <div className="flex flex-col items-center justify-center gap-5">
            <span className="px-5 py-1 rounded-2xl text-charcoal-900 bg-[linear-gradient(177deg,rgba(255,136,0,0.25)_0%,rgba(255,217,0,0.25)_100%)]">
              {services[1].id}
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-[32px] font-light text-charcoal-900 leading-tight">
              {services[1].title}
            </h3>
            <p className="text-base sm:text-lg text-charcoal-900 text-center leading-[25.2px] max-w-[403px]">
              {services[1].description}
            </p>
          </div>
        </ScrollWrapper>
      </div>

      {/* Mobile divider */}
      <div className="flex lg:hidden w-full border-b border-charcoal-700" />


      <div className={`flex flex-col items-center justify-center gap-5 px-2.5 py-10 lg:py-[104px] ${getBorderClass(2)}`}>
        <ScrollWrapper delay={0.2} className="hover-scale">
          <div className="flex flex-col items-center justify-center gap-5">
            <span className="px-5 py-1 rounded-2xl text-charcoal-900 bg-[linear-gradient(177deg,rgba(255,136,0,0.25)_0%,rgba(255,217,0,0.25)_100%)]">
              {services[2].id}
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-[32px] font-light text-charcoal-900 leading-tight">
              {services[2].title}
            </h3>
            <p className="text-base sm:text-lg text-charcoal-900 text-center leading-[25.2px] max-w-[403px]">
              {services[2].description}
            </p>
          </div>
        </ScrollWrapper>
      </div>

      {/* Mobile divider */}
      <div className="flex lg:hidden w-full border-b border-charcoal-700" />

      <div className={`flex flex-col items-center justify-center gap-5 px-2.5 py-10 lg:py-[104px] ${getBorderClass(3)}`}>
        <ScrollWrapper delay={0.25} className="hover-scale">
          <div className="flex flex-col items-center justify-center gap-5">
            <span className="px-5 py-1 rounded-2xl text-charcoal-900 bg-[linear-gradient(177deg,rgba(255,136,0,0.25)_0%,rgba(255,217,0,0.25)_100%)]">
              {services[3].id}
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-[32px] font-light text-charcoal-900 leading-tight">
              {services[3].title}
            </h3>
            <p className="text-base sm:text-lg text-charcoal-900 text-center leading-[25.2px] max-w-[403px]">
              {services[3].description}
            </p>
          </div>
        </ScrollWrapper>
      </div>

      {/* Mobile divider */}
      <div className="flex lg:hidden w-full border-b border-charcoal-700" />


      <div className={`flex flex-col items-center justify-center gap-5 px-2.5 py-10 lg:py-[104px] ${getBorderClass(4)}`}>
        <ScrollWrapper delay={0.3} className="hover-scale">
          <div className="flex flex-col items-center justify-center gap-5">
            <span className="px-5 py-1 rounded-2xl text-charcoal-900 bg-[linear-gradient(177deg,rgba(255,136,0,0.25)_0%,rgba(255,217,0,0.25)_100%)]">
              {services[4].id}
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-[32px] font-light text-charcoal-900 leading-tight">
              {services[4].title}
            </h3>
            <p className="text-base sm:text-lg text-charcoal-900 text-center leading-[25.2px] max-w-[403px]">
              {services[4].description}
            </p>
          </div>
        </ScrollWrapper>
      </div>

      {/* Mobile divider */}
      <div className="flex lg:hidden w-full border-b border-charcoal-700 " />


      <div className={`flex flex-col items-center justify-center gap-5 px-2.5 py-10 lg:py-[104px] ${getBorderClass(5)}`}>
        <ScrollWrapper delay={0.4} className="hover-scale">
          <div className="flex flex-col items-center justify-center gap-5">
            <span className="px-5 py-1 rounded-2xl text-charcoal-900 bg-[linear-gradient(177deg,rgba(255,136,0,0.25)_0%,rgba(255,217,0,0.25)_100%)]">
              {services[5].id}
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-[32px] font-light text-charcoal-900 leading-tight">
              {services[5].title}
            </h3>
            <p className="text-base sm:text-lg text-charcoal-900 text-center leading-[25.2px] max-w-[403px]">
              {services[5].description}
            </p>
          </div>
        </ScrollWrapper>
      </div>
    </div>
  );
};
