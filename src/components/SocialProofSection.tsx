import palmeiras from "@/assets/brands/palmeiras.png";
import spfc from "@/assets/brands/spfc.png";
import nubank from "@/assets/brands/nubank.png";
import heineken from "@/assets/brands/heineken.png";
import corinthians from "@/assets/brands/corinthians.png";
import ambev from "@/assets/brands/ambev.png";
import puma from "@/assets/brands/puma.png";
import adidas from "@/assets/brands/adidas.png";

const brands = [
  { name: "Palmeiras", logo: palmeiras },
  { name: "São Paulo FC", logo: spfc },
  { name: "Nubank", logo: nubank },
  { name: "Heineken", logo: heineken },
  { name: "Corinthians", logo: corinthians },
  { name: "Ambev", logo: ambev },
  { name: "Puma", logo: puma },
  { name: "Adidas", logo: adidas },
  { name: "Em breve", logo: null },
  { name: "Em breve", logo: null },
];

const SocialProofSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-wider text-primary">
          MARCAS QUE CONFIAM NA ARTE ARENA
        </h2>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-5 gap-6">
        {brands.map((brand, i) => (
          <div
            key={i}
            className="w-20 h-20 mx-auto rounded-full bg-foreground/90 border border-border flex items-center justify-center overflow-hidden"
          >
            {brand.logo ? (
              <img src={brand.logo} alt={brand.name} className="w-14 h-14 object-contain" />
            ) : (
              <span className="text-xs font-bold text-muted-foreground text-center leading-tight px-1">
                {brand.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialProofSection;
