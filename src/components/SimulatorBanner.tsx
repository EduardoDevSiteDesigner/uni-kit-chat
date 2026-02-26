import { ExternalLink } from "lucide-react";

const SimulatorBanner = () => {
  return (
    <section id="simulador" className="py-16 px-4">
      <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-10 text-center">
        <h3 className="text-2xl md:text-3xl font-extrabold mb-3">
          Ainda na dúvida sobre a arte do seu uniforme?
        </h3>
        <p className="text-muted-foreground mb-8 text-lg">
          Simule uma agora mesmo!
        </p>
        <a
          href="https://www.totemsports.com.br/simulador/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg"
        >
          <ExternalLink className="w-5 h-5" />
          ABRIR SIMULADOR
        </a>
      </div>
    </section>
  );
};

export default SimulatorBanner;
