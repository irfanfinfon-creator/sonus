import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollWrapper } from "../../../../components/ui/useScrollAnimation";

const products = [
  {
    id: "elara",
    label: "bridging the creativity",
    title: "Arts platform connecting creators, art lovers, collectors, and founders.",
    description:
      "Elara simplifies social networking, creative exposures, and enhances communication between creators, art lovers, collectors, and founders.",
    image: "/Elara.svg",
    layout: "horizontal",
  },
  {
    id: "hollaven",
    label: "ease the travel plan",
    title: "An all-in-one vacation solution for your solo travel and family travel.",
    description:
      "Hollaven addresses both with a unified platform that connects accommodations, restaurants, and businesses in a seamless ecosystem.",
    image: "/hollaven.svg",
    layout: "horizontal",
  },
  {
    id: "esunnah",
    label: "islamic inventory",
    title: "eSunnah",
    description:
      "Daily tips built specifically for Islamic practices. Improving muslims' daily live while discovering sunnah that users might never knew with reliable sources and citations.",
    image: "/eSunnah.svg",
    layout: "vertical",
  },
  {
    id: "dama",
    label: "customers relation",
    title: "Dama",
    description:
      "An elaborated platforms for business to share and connect their leads and prospect for much more organized informations for their customers relations.",
    image: "/eSunnah.svg",
    layout: "vertical",
  },
];

const ProductCard = ({
  product,
}: {
  product: (typeof products)[0];
}): JSX.Element => {
  const isHorizontal = product.layout === "horizontal";

  if (isHorizontal) {
    return (
      <ScrollWrapper className="w-full">
        <Card className="w-full bg-cream-100 rounded-[20px] overflow-hidden border-0 shadow-none">
          <CardContent className="flex flex-col lg:flex-row w-full items-center p-0">
            <div className="flex flex-col w-full lg:w-[628.8px] items-start gap-5 p-10">
              <span className="px-5 py-3 rounded-full text-base bg-gradient-warm text-white font-medium">
                {product.label}
              </span>
              <h2 className="font-serif text-2xl sm:text-5xl lg:text-[48px] font-light text-charcoal-900 leading-tight mt-10">
                {product.title}
              </h2>
              <p className="text-base sm:text-lg text-charcoal-600 leading-[25.2px]">
                {product.description}
              </p>
              <Button
                variant="outline"
                className="hover-scale h-auto px-[41px] py-3 bg-cream-100 rounded-[100px] border border-solid border-charcoal-900 hover:bg-cream-100/90"
              >
                Request a Demo
              </Button>
            </div>
            <div className="w-full h-[300px] lg:h-auto flex items-right justify-end">
              <img
                src={product.image}
                alt={product.title}
                className="w-auto h-[600px] object-contain lg:object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </ScrollWrapper>
    );
  }

  return (
    <ScrollWrapper className="w-full">
      <Card className="flex flex-col min-h-[500px] items-start gap-5 p-10 bg-cream-100 rounded-[20px] overflow-hidden border-0 shadow-none">
        <CardContent className="flex flex-col w-full items-start gap-5 p-0">
          <div className="w-full h-[350px] flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="px-5 py-3 rounded-full text-base bg-gradient-warm text-white font-medium">
            {product.label}
          </span>

          <h3 className="font-serif text-[36px] font-light text-charcoal-900 leading-tight mt-10">
            {product.title}
          </h3>
          <p className="text-lg text-charcoal-900 leading-[25.2px]">
            {product.description}
          </p>
          <div className="flex items-center justify-between w-full">
            <Button
              variant="outline"
              className="hover-scale h-auto py-3 px-[33px] bg-cream-100 rounded-[100px] border border-solid border-charcoal-900 hover:bg-cream-100/90"
            >
              Request a Demo
            </Button>
          </div>
        </CardContent>
      </Card>
    </ScrollWrapper>
  );
};

export const ProductsSection = (): JSX.Element => {
  const horizontalProducts = products.filter((p) => p.layout === "horizontal");
  const verticalProducts = products.filter((p) => p.layout === "vertical");

  return (
    <section className="w-full px-4 md:px-[80px] lg:px-[174px] py-16 md:py-[100px] lg:py-[140px] bg-charcoal-900">
      <div className="flex flex-col items-start gap-5 w-full">
        <span className="px-5 py-3 rounded-full text-base bg-gradient-warm text-white font-medium">
          innovative solutions
        </span>

        <h1 className="hover-scale font-serif text-3xl sm:text-4xl lg:text-[72px] font-light text-cream-100 leading-tight pb-20 mt-10">
          Our Products
        </h1>

        {horizontalProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {verticalProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
