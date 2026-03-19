import { useState } from "react";
import { Shirt, ChevronRight, ChevronLeft, MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type KitOption = "camisa" | "camisa_calcao" | "conjunto";

const kitLabels: Record<KitOption, string> = {
  camisa: "Somente Camisa",
  camisa_calcao: "Camisa + Calção",
  conjunto: "Conjunto Completo (Camisa + Calção + Meião)",
};

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [quantity, setQuantity] = useState("");
  const [kit, setKit] = useState<KitOption | "">("");
  const [sponsors, setSponsors] = useState(0);
  const [cep, setCep] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 4;

  const formatCep = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 8);
    if (digits.length > 5) return `${digits.slice(0, 5)}-${digits.slice(5)}`;
    return digits;
  };

  const quantityNum = parseInt(quantity);
  const quantityError = quantity !== "" && quantityNum < 10;

  const canNext = () => {
    if (step === 1) return quantityNum >= 10;
    if (step === 2) return kit !== "";
    if (step === 3) return true;
    if (step === 4) return cep.replace(/\D/g, "").length === 8;
    return false;
  };

  const sendWhatsApp = () => {
    const msg = encodeURIComponent(
      `Olá! Gostaria de um orçamento para ${quantity} unidades de ${kitLabels[kit as KitOption]} com ${sponsors} patrocinadores. Meu CEP é ${cep}.`
    );
    setSubmitted(true);
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: kitLabels[kit as KitOption],
        value: quantityNum,
      });
    }
    setTimeout(() => {
      window.open(`https://wa.me/5511934881548?text=${msg}`, "_blank");
    }, 2000);
  };

  return (
    <section id="formulario" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2">
          Monte seu <span className="text-primary text-glow">Orçamento</span>
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          Responda em poucos passos e receba no WhatsApp
        </p>

        {submitted ? (
          <div className="bg-card border border-border rounded-2xl p-10 min-h-[320px] flex flex-col items-center justify-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-extrabold">Orçamento enviado!</h3>
            <p className="text-muted-foreground max-w-md">
              Siga com o atendimento com a nossa equipe comercial via WhatsApp. Você será redirecionado em instantes...
            </p>
            <a
              href={`https://wa.me/5511934881548?text=${encodeURIComponent(
                `Olá! Gostaria de um orçamento para ${quantity} unidades de ${kitLabels[kit as KitOption]} com ${sponsors} patrocinadores. Meu CEP é ${cep}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-bold hover:scale-105 transition-transform mt-2"
            >
              <MessageCircle className="w-5 h-5" />
              ABRIR WHATSAPP
            </a>
          </div>
        ) : (
          <>
            {/* Progress */}
            <div className="flex items-center gap-2 mb-10 max-w-xs mx-auto">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                    i < step ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>

            <div className="bg-card border border-border rounded-2xl p-5 sm:p-10 min-h-[320px] flex flex-col justify-between">
              {/* Step 1 */}
              {step === 1 && (
                <div className="flex-1">
                  <label className="block text-lg font-semibold mb-4">
                    Quantidade de uniformes?
                  </label>
                  <input
                    type="number"
                    min={10}
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Ex: 22"
                    className={`w-full bg-muted border rounded-lg px-5 py-4 text-2xl font-bold text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition ${
                      quantityError ? "border-destructive" : "border-border"
                    }`}
                  />
                  {quantityError && (
                    <p className="text-destructive text-sm mt-2 font-semibold">
                      O pedido mínimo é de 10 unidades.
                    </p>
                  )}
                  <p className="text-muted-foreground text-xs mt-2">
                    Pedido mínimo: 10 unidades
                  </p>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="flex-1">
                  <label className="block text-lg font-semibold mb-4">
                    Qual a composição do kit?
                  </label>
                  <div className="grid gap-3">
                    {(Object.keys(kitLabels) as KitOption[]).map((key) => (
                      <button
                        key={key}
                        onClick={() => setKit(key)}
                        className={`flex items-center gap-4 p-5 rounded-xl border-2 text-left transition-all duration-200 ${
                          kit === key
                            ? "border-primary bg-primary/10 neon-glow"
                            : "border-border bg-muted hover:border-muted-foreground"
                        }`}
                      >
                        <Shirt className={`w-6 h-6 flex-shrink-0 ${kit === key ? "text-primary" : "text-muted-foreground"}`} />
                        <span className="font-semibold">{kitLabels[key]}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="flex-1">
                  <label className="block text-lg font-semibold mb-4">
                    Quantos patrocinadores terá o uniforme?
                  </label>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => (
                      <button
                        key={n}
                        onClick={() => setSponsors(n)}
                        className={`w-14 h-14 rounded-xl font-bold text-lg border-2 transition-all duration-200 ${
                          sponsors === n
                            ? "border-primary bg-primary text-primary-foreground neon-glow"
                            : "border-border bg-muted text-foreground hover:border-muted-foreground"
                        }`}
                      >
                        {n === 7 ? "7+" : n}
                      </button>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Selecionado: <span className="text-primary font-bold">{sponsors === 7 ? "7+" : sponsors}</span> patrocinador{sponsors !== 1 ? "es" : ""}
                  </p>
                </div>
              )}

              {/* Step 4 */}
              {step === 4 && (
                <div className="flex-1">
                  <label className="block text-lg font-semibold mb-4">
                    Qual o seu CEP?
                  </label>
                  <input
                    type="text"
                    value={cep}
                    onChange={(e) => setCep(formatCep(e.target.value))}
                    placeholder="00000-000"
                    className="w-full bg-muted border border-border rounded-lg px-5 py-4 text-2xl font-bold text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition tracking-widest"
                    maxLength={9}
                  />
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                {step > 1 ? (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="flex items-center gap-2 px-5 py-3 text-muted-foreground hover:text-foreground transition font-semibold"
                  >
                    <ChevronLeft className="w-5 h-5" /> Voltar
                  </button>
                ) : (
                  <div />
                )}

                {step < totalSteps ? (
                  <button
                    onClick={() => canNext() && setStep(step + 1)}
                    disabled={!canNext()}
                    className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-bold transition-all hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
                  >
                    Próximo <ChevronRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    onClick={sendWhatsApp}
                    disabled={!canNext()}
                    className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold text-xs sm:text-sm animate-pulse-glow hover:scale-105 transition-transform disabled:opacity-40 disabled:animate-none disabled:hover:scale-100"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0" />
                    <span className="whitespace-nowrap">SOLICITAR ORÇAMENTO</span>
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default MultiStepForm;
