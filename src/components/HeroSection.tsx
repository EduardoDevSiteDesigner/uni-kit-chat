import heroBg from "@/assets/hero-bg-new.png";

const HeroSection = () => {
  const scrollToForm = () => {
    const el = document.getElementById("formulario");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Uniformes esportivos de alta performance"
          className="w-full h-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-24">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-6">
          Uniformes Esportivos de{" "}
          <span className="text-primary text-glow">Alta Performance</span>{" "}
          para o seu Time.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Qualidade profissional, design exclusivo e entrega rápida para todo o Brasil.
        </p>
        <button
          onClick={scrollToForm}
          className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold bg-primary text-primary-foreground rounded-lg animate-pulse-glow hover:scale-105 transition-transform duration-300 tracking-wider"
        >
          FAZER UM ORÇAMENTO
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
