import { motion } from "framer-motion";
import productImg from "@/assets/product-canister.jpg";

const steps = [
  { n: "01", title: "Разведение", desc: "Концентрат смешивается с водой в пропорции 1:4. Из 5 л концентрата получается 25 л рабочего раствора." },
  { n: "02", title: "Нанесение", desc: "Распыление, кистью или валиком в 2–3 слоя с интервалом 30 минут. Расход 250–300 г/м²." },
  { n: "03", title: "Реакция", desc: "Активные соли проникают в волокна и при нагреве выделяют инертные газы, прерывая горение." },
  { n: "04", title: "Защита", desc: "При воздействии огня образуется вспученный коксовый слой — теплоизолятор, замедляющий обугливание в 8 раз." },
];

export const HowItWorks = () => {
  return (
    <section id="how" className="relative py-24 md:py-32 bg-card border-y border-border overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">— 02 / Принцип работы</div>
            <h2 className="font-display text-5xl md:text-7xl leading-none mb-8">
              Молекулярный<br /><span className="text-gradient-fire">щит</span> против пламени
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md">
              PYROSHIELD действует на двух уровнях: химически прерывает реакцию горения и физически блокирует доступ кислорода к древесине.
            </p>
            <div className="relative aspect-square max-w-md">
              <div className="absolute inset-0 bg-gradient-fire blur-3xl opacity-40 animate-flicker" />
              <img src={productImg} alt="Канистра PYROSHIELD" loading="lazy" width={1024} height={1024} className="relative w-full h-full object-cover border border-border" />
            </div>
          </div>

          <div className="space-y-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex gap-6 p-6 md:p-8 border border-border hover:border-primary/50 bg-background/40 backdrop-blur-sm transition-all"
              >
                <div className="font-display text-5xl md:text-6xl text-gradient-fire shrink-0 w-20">{s.n}</div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};