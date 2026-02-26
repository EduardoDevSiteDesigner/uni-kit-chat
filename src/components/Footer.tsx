import { Instagram, Facebook, MapPin, Building2 } from "lucide-react";
import logo from "@/assets/logo-arte-arena.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4 mt-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center mb-10">
        <img src={logo} alt="Arte Arena" className="h-16 object-contain" />
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        <div>
          <h4 className="font-extrabold text-primary text-xl mb-4">ARTE ARENA</h4>
          <p className="text-muted-foreground leading-relaxed">
            Uniformes esportivos de alta qualidade para times e clubes de todo o Brasil.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" /> Endereço
          </h4>
          <p className="text-muted-foreground leading-relaxed">
            Rua Exemplo, 123 - Centro<br />
            São Paulo - SP, 01000-000
          </p>
          <p className="text-muted-foreground mt-3 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-primary" /> CNPJ: 00.000.000/0001-00
          </p>
        </div>

        <div>
          <h4 className="font-bold text-foreground mb-4">Redes Sociais</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © 2026 Arte Arena. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
