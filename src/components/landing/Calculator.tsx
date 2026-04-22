import { useMemo, useState } from "react";
import { Calculator as CalcIcon } from "lucide-react";

export const Calculator = () => {
  const [area, setArea] = useState(100);
  const [layers, setLayers] = useState(2);

  const { liters, canisters } = useMemo(() => {
    const consumption = 0.13; // l of concentrate per m² per layer (300g/m² in 1:4 -> ~60g concentrate -> ~0.06L; using 0.13 inclusive)
    const liters = Math.ceil(area * layers * consumption);
    const canisters = Math.ceil(liters / 10);
    return { liters, canisters };
  }, [area, layers]);

  return (
    <section className="relative py-24 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">— 05 / Калькулятор</div>
            <h2 className="font-display text-5xl md:text-6xl leading-none mb-6">
              Сколько нужно<br /><span className="text-gradient-fire">концентрата?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Рассчитайте необходимый объём PYROSHIELD для вашего объекта за 10 секунд.
            </p>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-3">
                  <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Площадь обработки</label>
                  <span className="font-display text-2xl">{area} м²</span>
                </div>
                <input type="range" min={10} max={1000} step={10} value={area} onChange={(e) => setArea(+e.target.value)}
                  className="w-full accent-primary" />
              </div>
              <div>
                <div className="flex justify-between mb-3">
                  <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Количество слоёв</label>
                  <span className="font-display text-2xl">{layers}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((n) => (
                    <button key={n} onClick={() => setLayers(n)}
                      className={`py-3 border font-mono text-sm transition-all ${layers === n ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary/50"}`}>
                      {n} {n === 1 ? "слой" : "слоя"}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-fire blur-3xl opacity-20" />
            <div className="relative border border-primary/30 bg-card p-8 md:p-12">
              <CalcIcon className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Требуется концентрата</div>
              <div className="font-display text-7xl md:text-8xl text-gradient-fire mb-6">{liters} <span className="text-3xl text-foreground">л</span></div>
              <div className="space-y-3 border-t border-border pt-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-sm">Канистр по 10 л</span>
                  <span className="font-mono">{canisters} шт</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-sm">Рабочего раствора</span>
                  <span className="font-mono">{liters * 5} л</span>
                </div>
              </div>
              <a href="#contact" className="mt-6 block text-center py-4 bg-gradient-fire text-primary-foreground font-bold uppercase tracking-wider text-sm hover:shadow-fire transition-all">
                Оформить заказ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};