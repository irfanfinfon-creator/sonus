const clients = [
  { id: 1, name: "Elara", logo: "/Elara.svg" },
  { id: 3, name: "FitWrist", logo: "/fitwrist.svg" },
  { id: 5, name: "Walkify", logo: "/walkify.svg" },
  { id: 6, name: "Dama", logo: "/dama.svg" },
];

const ClientLogo = ({ name, logo }: { name: string; logo: string }) => (
  <div className="flex items-center justify-center h-[70px] w-[180px] shrink-0 mx-5">
    <img
      src={logo}
      alt={name}
      className="h-[30px] w-auto object-contain hover-scale grayscale hover:grayscale-0"
    />
  </div>
);

export const OurClientsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="w-full px-4 md:px-20 lg:px-40 py-5 md:py-5 lg:py-5">
        <div className="flex flex-col items-center gap-10 w-full">
          <div className="w-full mx-4 md:mx-[80px] lg:mx-[174px] px-0">
            <div
              className="flex w-max"
              style={{
                animation: 'marquee-seamless 30s linear infinite',
              }}
            >
              {/* Group 1 */}
              <div className="flex gap-8 shrink-0 pr-8">
                {[...clients, ...clients, ...clients].map((client, i) => (
                  <ClientLogo key={`a-${i}`} name={client.name} logo={client.logo} />
                ))}
              </div>
              {/* Group 2 (identical copy for seamless loop) */}
              <div className="flex gap-8 shrink-0 pr-8">
                {[...clients, ...clients, ...clients].map((client, i) => (
                  <ClientLogo key={`b-${i}`} name={client.name} logo={client.logo} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
