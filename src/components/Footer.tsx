import logo from "@/assets/logo-arte-arena.png";

const Footer = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-12 px-4 mt-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center mb-8">
        <img src={logo} alt="Arte Arena" className="h-16 object-contain mb-4" />
        <p className="text-muted-foreground text-xs text-center max-w-xl leading-relaxed">
          A Arte Arena é sua parceira ideal na criação de materiais personalizados que refletem a identidade única de cada cliente. Desde nossa fundação, nos dedicamos a oferecer produtos de alta qualidade, combinando criatividade, inovação e um compromisso inabalável com a satisfação do cliente. Nossa missão é transformar suas ideias em realidade, proporcionando produtos que não apenas atendem, mas superam suas expectativas.
        </p>

        <nav className="flex flex-wrap justify-center gap-4 mt-6">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-xs text-muted-foreground hover:text-primary transition font-semibold">
            Início
          </button>
          <button onClick={() => scrollTo("marcas")} className="text-xs text-muted-foreground hover:text-primary transition font-semibold">
            Marcas
          </button>
          <button onClick={() => scrollTo("formulario")} className="text-xs text-muted-foreground hover:text-primary transition font-semibold">
            Orçamento
          </button>
          <button onClick={() => scrollTo("simulador")} className="text-xs text-muted-foreground hover:text-primary transition font-semibold">
            Simulador
          </button>
          <button onClick={() => scrollTo("contato")} className="text-xs text-muted-foreground hover:text-primary transition font-semibold">
            Contato
          </button>
        </nav>
      </div>

      <div className="max-w-5xl mx-auto pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © 2026 Arte Arena. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
