import bandeiraLogo from "@/assets/brands/bandeira-personalizada.png";
import atletizeLogo from "@/assets/brands/atletize.png";
import totemLogo from "@/assets/brands/totem-sports.jpg";
import lojaTorcidaLogo from "@/assets/brands/loja-de-torcida.png";

const groupBrands = [
  { name: "Bandeira Personalizada", logo: bandeiraLogo },
  { name: "Atletize", logo: atletizeLogo },
  { name: "Totem Sports", logo: totemLogo },
  { name: "Loja de Torcida", logo: lojaTorcidaLogo },
];

const GroupSection = () => {
  return (
    <section id="grupo" className="py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-wider text-primary">
          GRUPO ARTE ARENA
        </h2>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {groupBrands.map((brand, i) => (
          <a
            key={i}
            href="https://www.artearena.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full aspect-square max-w-[200px] mx-auto rounded-2xl bg-white border border-border flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_hsl(24_95%_53%/0.3)] cursor-pointer p-4"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-full h-full object-contain"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default GroupSection;
