import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Our Products", href: "#products" },
  { label: "Our Services", href: "#services" },
  { label: "Our Approach", href: "#approach" },
  { label: "Contact Us", href: "#contact" },
];

export const TopNav = (): JSX.Element => {
  const [activeNav, setActiveNav] = useState<string>("Our Products");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="absolute z-50 flex w-full justify-between px-4 md:px-[80px] lg:px-[175px] py-[25px] bg-white/80 backdrop-blur-sm border-b border-gray-300">
      <div className="flex items-center flex-1">
        <img src="/sonus logo.svg" alt="" className="w-[152px] h-[40px]" />
      </div>

      <nav className="hidden md:flex items-center justify-end flex-1">
        <div className="flex items-center gap-0">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActiveNav(link.label)}
              className={`px-5 py-0 h-[31px] flex items-center justify-end font-medium text-charcoal-900 text-lg text-right leading-[27px] whitespace-nowrap hover:opacity-70 transition-opacity ${activeNav === link.label ? "opacity-100" : "opacity-80"
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <button
        className="flex md:hidden items-center justify-center p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {mobileMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-white border-b border-gray-300 flex md:hidden flex-col items-start p-4 z-50">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActiveNav(link.label);
                setMobileMenuOpen(false);
              }}
              className={`py-3 w-full text-left font-medium text-charcoal-900 text-lg tracking-[0] leading-[27px] hover:opacity-70 transition-opacity ${activeNav === link.label ? "opacity-100" : "opacity-80"
                }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};