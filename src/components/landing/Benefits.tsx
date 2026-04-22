import { motion } from "framer-motion";
import { Flame, Droplets, Bug, Clock, Leaf, Layers } from "lucide-react";

const items = [
  { icon: Flame, title: "I группа огнезащиты", desc: "Потеря массы менее 9% при стандартизированных огневых испытаниях." },
  { icon: Layers, title: "Глубокое проникновение", desc: "Активные компоненты проникают в волокна на 3–5 мм, защищая структуру изнутри." },
  { icon: Bug, title: "Антисептик в составе", desc: "Одновременная защита от грибка, плесени, синевы и древоточцев." },
  { icon: Clock, title: "До 10 лет защиты", desc: "Сохраняет огнезащитные свойства внутри помещений до десяти лет." },
  { icon: Droplets, title: "Без запаха и цвета", desc: "Не окрашивает древесину и не изменяет её текстуру — подходит под лак и масло." },
  { icon: Leaf, title: "Безопасен для человека", desc: "Не содержит галогенов и тяжёлых металлов. IV класс — малоопасное вещество." },
];

export const Benefits = () => {
  return (
    <section id="benefits" className="relative py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">— 01 / Преимущества</div>
            <h2 className="font-display text-5xl md:text-7xl leading-none max-w-2xl">
              Шесть причин<br />выбрать <span className="text-gradient-fire">PYROSHIELD</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Мы разработали формулу, которая превосходит требования I группы огнезащиты, не жертвуя натуральной красотой древесины.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative bg-background p-8 md:p-10 hover:bg-card transition-colors"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/40 transition-all" />
                  <it.icon className="relative w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-3 leading-tight">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};