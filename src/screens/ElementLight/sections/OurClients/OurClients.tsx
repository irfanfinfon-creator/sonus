const clients = [
  { id: 1, name: "Client 1" },
  { id: 2, name: "Client 2" },
  { id: 3, name: "Client 3" },
  { id: 4, name: "Client 4" },
  { id: 5, name: "Client 5" },
  { id: 6, name: "Client 6" },
];

const ClientLogo = ({ name }: { name: string }) => (
  <div className="flex items-center justify-center h-[60px] w-[180px] shrink-0">
    <img
      src="/sonus logo.svg"
      alt={name}
      className="h-[40px] w-auto object-contain"
    />
  </div>
);

export const OurClientsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="w-full px-4 md:px-20 lg:px-40 py-8 md:py-10 lg:py-10">
        <div className="flex flex-col items-center gap-10 w-full">
          <span className="font-serif text-4xl px-5 py-3 rounded-full text-black font-medium">
            Our Clients
          </span>

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
                  <ClientLogo key={`a-${i}`} name={client.name} />
                ))}
              </div>
              {/* Group 2 (identical copy for seamless loop) */}
              <div className="flex gap-8 shrink-0 pr-8">
                {[...clients, ...clients, ...clients].map((client, i) => (
                  <ClientLogo key={`b-${i}`} name={client.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
