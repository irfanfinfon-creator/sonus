import { useState } from "react";

const navLinks = [
  { label: "Our Products", href: "#products" },
  { label: "Our Services", href: "#services" },
  { label: "Our Approach", href: "#approach" },
  { label: "Contact Us", href: "#contact" },
];

export const FooterSection = (): JSX.Element => {
  const [activeNav, setActiveNav] = useState<string>("Our Products");

  return (
    <footer className="flex flex-col items-start self-stretch w-full bg-transparent">
      <div className="flex flex-col w-full bg-charcoal-900 px-4 md:px-[80px] lg:px-[174px] py-0">
        <div className="flex flex-col lg:flex-row items-start pt-8 lg:pt-20 pb-8 lg:pb-10 px-0 self-stretch w-full gap-12 lg:gap-20">
          <div className="flex flex-col items-start flex-1 self-stretch gap-8 lg:gap-12">
            <div className="flex flex-col max-w-[393px] w-[314.39px] items-start gap-4">
              <img src="/Sonus Logo White.svg" alt="" className="w-[152px] h-[40px]" />
              <div className="flex flex-col max-w-[393px] w-[314.39px] items-start gap-4">
                <p className="font-light text-cream-200 text-sm sm:text-base lg:text-base leading-[22.4px] self-stretch">
                  GO Ride delivers innovative, affordable tech solutions to empower businesses and individuals.
                </p>
                <div className="flex flex-col lg:flex-row items-start justify-start pt-5 pb-10 px-0 self-stretch w-full">
                  <p className="font-light text-cream-300 text-sm text-left leading-4 self-stretch">
                    © 2024 Sonus | All Rights Reserved
                  </p>
                </div>

              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-8">
            <div className="flex flex-col items-start pt-0 pb-0 px-0 self-stretch w-full">
              <p className="font-normal text-cream-100 text-lg leading-[25.2px] self-stretch">
                Contact
              </p>
            </div>

            <div className="flex flex-col max-w-[393px] w-[314.39px] items-start gap-4">
              <p className="font-light text-cream-200 text-sm sm:text-base lg:text-base leading-[22.4px] self-stretch">
                contact@sonus.com
              </p>
              <p className="font-light text-cream-200 text-sm sm:text-base lg:text-base leading-[22.4px] self-stretch">
                Boulevard Garden, Pantalone Streets, 87930, Elbaf, Norway
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-8">
            <div className="flex flex-col items-start pt-0 pb-0 px-0 self-stretch w-full">
              <p className="font-normal text-cream-100 text-lg leading-[25.2px] self-stretch">
                Quick Links
              </p>
            </div>

            <nav className="flex flex-col self-stretch w-full items-start gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveNav(link.label)}
                  className={`flex self-stretch w-full items-center ${activeNav === link.label ? "opacity-100" : "opacity-80"}`}

                >
                  <span className="font-light text-cream-200 text-sm sm:text-base lg:text-base">
                    {link.label}
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};