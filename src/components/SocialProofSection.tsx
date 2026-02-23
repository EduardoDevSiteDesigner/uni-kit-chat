const brands = [
  "FC Barcelona", "Real Madrid", "Manchester City", "Bayern Munich",
  "PSG", "Juventus", "Liverpool", "Chelsea",
  "Arsenal", "Inter Milan", "AC Milan", "Borussia Dortmund",
  "Atlético Madrid", "Ajax", "Benfica"
];

const SocialProofSection = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="text-center mb-12 px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-wider text-primary">
          MARCAS QUE CONFIAM NA ARTE ARENA
        </h2>
      </div>

      <div className="relative">
        <div className="flex animate-scroll-left" style={{ width: "fit-content" }}>
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-4 w-20 h-20 rounded-full bg-foreground/90 border border-border flex items-center justify-center"
            >
              <span className="text-xs font-bold text-background text-center leading-tight px-1">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
