import { Mail, MessageCircle, MapPin, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          FALE COM A <span className="text-primary text-glow">ARTE ARENA</span>
        </h2>

        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {/* E-mail */}
          <div className="bg-card border border-border rounded-2xl p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">E-mail</p>
              <a href="mailto:contato@artearena.com.br" className="font-bold hover:text-primary transition">
                contato@artearena.com.br
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="bg-card border border-border rounded-2xl p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">WhatsApp</p>
              <a href="https://wa.me/5511934881548" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-primary transition">
                +55 11 93488-1548
              </a>
            </div>
          </div>

          {/* Localização */}
          <div className="bg-card border border-border rounded-2xl p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Localização</p>
              <p className="font-bold">
                Av. Dr. Luís Arrobas Martins, 335 - Interlagos Zona Sul, São Paulo - SP, 04781-000
              </p>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center">
            <h3 className="font-bold text-lg mb-4">Siga-nos nas redes sociais!</h3>
            <div className="flex gap-4 flex-wrap justify-center">
              <a href="https://instagram.com/artearena" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://facebook.com/artearena" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://youtube.com/@artearena" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="https://tiktok.com/@artearena" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.93a8.24 8.24 0 0 0 4.76 1.52V7a4.83 4.83 0 0 1-1-.31z"/></svg>
              </a>
              <a href="https://x.com/artearena" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://linkedin.com/company/artearena" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
