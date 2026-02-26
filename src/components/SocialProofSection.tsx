import palmeiras from "@/assets/brands/palmeiras.png";
import spfc from "@/assets/brands/spfc.png";
import nubank from "@/assets/brands/nubank.png";
import heineken from "@/assets/brands/heineken.png";
import corinthians from "@/assets/brands/corinthians.png";
import ambev from "@/assets/brands/ambev.png";
import puma from "@/assets/brands/puma.png";
import adidas from "@/assets/brands/adidas.png";
import mcdonalds from "@/assets/brands/mcdonalds.png";
import f1 from "@/assets/brands/f1.png";

const brands = [
  { name: "Palmeiras", logo: palmeiras },
  { name: "São Paulo FC", logo: spfc },
  { name: "Nubank", logo: nubank },
  { name: "Heineken", logo: heineken },
  { name: "Corinthians", logo: corinthians },
  { name: "Ambev", logo: ambev },
  { name: "Puma", logo: puma },
  { name: "Adidas", logo: adidas },
  { name: "McDonald's", logo: mcdonalds },
  { name: "F1", logo: f1 },
];

const SocialProofSection = () => {
  return (
    <section id="marcas" className="py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-wider text-primary">
          MARCAS QUE CONFIAM NA ARTE ARENA
        </h2>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 md:gap-6">
        {brands.map((brand, i) => (
          <div
            key={i}
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto rounded-2xl bg-white border border-border flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_hsl(24_95%_53%/0.3)] cursor-pointer"
          >
            <img src={brand.logo} alt={brand.name} className="w-14 h-14 sm:w-18 sm:h-18 md:w-28 md:h-28 object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialProofSection;
