import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Заявка отправлена! Мы свяжемся с вами в течение часа.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-60" />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">— 07 / Контакты</div>
            <h2 className="font-display text-5xl md:text-7xl leading-none mb-8">
              Защитите свой<br /><span className="text-gradient-fire">объект</span> сегодня
            </h2>
            <p className="text-muted-foreground mb-12 max-w-md">
              Оставьте заявку — менеджер рассчитает точный объём, стоимость с доставкой и пришлёт коммерческое предложение в течение часа.
            </p>

            <div className="space-y-6">
              {[
                { icon: Phone, label: "Телефон", value: "+7 (800) 555-13-37" },
                { icon: Mail, label: "Email", value: "order@pyroshield.ru" },
                { icon: MapPin, label: "Производство", value: "г. Нижний Новгород, ул. Промышленная 42" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 group">
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 bg-primary/30 blur-md group-hover:bg-primary/50 transition-all" />
                    <div className="relative w-12 h-12 border border-primary/30 flex items-center justify-center bg-background">
                      <c.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">{c.label}</div>
                    <div className="font-semibold text-lg">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="border border-primary/30 bg-card/80 backdrop-blur-sm p-8 md:p-10">
            <h3 className="font-display text-3xl md:text-4xl mb-8">Заявка на расчёт</h3>
            <div className="space-y-5">
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-2">Имя</label>
                <input required type="text" className="w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition-colors" />
              </div>
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-2">Телефон</label>
                <input required type="tel" placeholder="+7" className="w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition-colors" />
              </div>
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-2">Объект / комментарий</label>
                <textarea rows={4} className="w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition-colors resize-none" />
              </div>
              <button type="submit" disabled={loading}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-fire text-primary-foreground font-bold uppercase tracking-wider text-sm hover:shadow-fire transition-all disabled:opacity-60">
                {loading ? "Отправка..." : <>Отправить заявку <Send className="w-4 h-4" /></>}
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};