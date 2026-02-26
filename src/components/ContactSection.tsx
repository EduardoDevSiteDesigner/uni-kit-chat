import { Mail, MessageCircle, MapPin, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          FALE COM A <span className="text-primary text-glow">ARTE ARENA</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* E-mail */}
          <div className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center">
            <Mail className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-bold text-lg mb-2">E-mail</h3>
            <a href="mailto:contato@artearena.com.br" className="text-muted-foreground hover:text-primary transition text-sm">
              contato@artearena.com.br
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center">
            <MessageCircle className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
            <a href="https://wa.me/5511934881548" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition text-sm">
              +55 11 93488-1548
            </a>
          </div>

          {/* Localização */}
          <div className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center">
            <MapPin className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-bold text-lg mb-2">Localização</h3>
            <p className="text-muted-foreground text-sm">
              Av. Dr. Luís Arrobas Martins, 335 - Interlagos<br />
              Zona Sul, São Paulo - SP, 04781-000
            </p>
          </div>

          {/* Redes Sociais */}
          <div className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center">
            <h3 className="font-bold text-lg mb-4">Siga-nos nas redes sociais!</h3>
            <div className="flex gap-3 flex-wrap justify-center">
              <a href="https://instagram.com/artearena" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/artearena" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/artearena" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@artearena" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://tiktok.com/@artearena" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.93a8.24 8.24 0 0 0 4.76 1.52V7a4.83 4.83 0 0 1-1-.31z"/></svg>
              </a>
              <a href="https://x.com/artearena" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
