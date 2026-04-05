import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollWrapper } from "../../../../components/ui/useScrollAnimation";

const bottomCards = [
  {
    label: "design focus",
    bg: "bg-cream-100",
    textColor: "text-charcoal-900",
    title: "Designed for humans",
    description:
      "Complex problems deserve simple solutions. We craft intuitive interfaces and seamless experiences that feel natural from the first interaction.",
  },
  {
    label: "results driven",
    bg: "bg-cream-100",
    textColor: "text-charcoal-900",
    title: "Measurable impact",
    description:
      "We're not only solving today's challenges, we anticipate tomorrow's. Our team explores emerging technologies to keep your business ahead of the curves.",
  },
  {
    label: "results driven",
    bg: "bg-cream-100",
    textColor: "text-charcoal-900",
    title: "Flexible Adaptability",
    description:
      "To be able to adapt is to be able to strive. We prioritize solutions that are flexible and adaptable to any forms of devices or medias necessary for the clients and users",
  },
  {
    label: "optimistic visionary",
    bg: "bg-cream-100",
    textColor: "text-charcoal-900",
    title: "Forward Thinking",
    description:
      "We solve today's problems and anticipate tomorrow's. Our team constantly explores emerging technologies and trends for your business to stay ahead of the curve.",
  }
];

export const ApproachGrid = (): JSX.Element => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 w-full">
      {bottomCards.map((card, index) => (
        <ScrollWrapper key={index} delay={0.3 + (index * 0.1)} className="w-full hover-scale">
          <Card
            className={`flex flex-col flex-1 items-start gap-4 p-10 ${card.bg} bg-gradient-warm rounded-[20px] overflow-hidden border-0 shadow-none`}
          >
            <CardContent className="p-0 flex flex-col items-start gap-4 w-full">
              <span className="px-5 py-3 rounded-full text-base bg-white text-orange-600 font-medium">
                {card.label}
              </span>

              <div className="flex flex-col items-start gap-5 w-full">
                <h3 className={`font-serif font-light ${card.textColor} text-white text-2xl sm:text-3xl lg:text-[40px] leading-tight`}>
                  {card.title}
                </h3>
                <div className="flex flex-col items-start w-full">
                  <p
                    className={`font-normal ${card.textColor} text-white text-base sm:text-lg lg:text-lg leading-[25.2px]`}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollWrapper>
      ))}
    </div>
  );
};