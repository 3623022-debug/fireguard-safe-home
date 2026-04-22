import { motion } from "framer-motion";
import construction from "@/assets/app-construction.jpg";
import sauna from "@/assets/app-sauna.jpg";
import house from "@/assets/app-house.jpg";

const apps = [
  { img: construction, title: "Стропила и перекрытия", tag: "Строительство", desc: "Защита несущих конструкций крыш, балок и опор в коммерческом и жилом строительстве." },
  { img: house, title: "Фасады и срубы", tag: "Жилые дома", desc: "Обработка наружной обшивки, бревенчатых срубов и каркасных конструкций." },
  { img: sauna, title: "Бани и сауны", tag: "Интерьер", desc: "Безопасная огнезащита парных, предбанников и бытовок без потери эстетики дерева." },
];

export const Applications = () => {
  return (
    <section id="applications" className="relative py-24 md:py-32">
      <div className="container">
        <div className="mb-16">
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">— 03 / Применение</div>
          <h2 className="font-display text-5xl md:text-7xl leading-none max-w-3xl">
            Везде, где есть <span className="text-gradient-fire">древесина</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {apps.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden border border-border bg-card"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={a.img} alt={a.title} loading="lazy" width={1024} height={768} className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6 md:p-8">
                <div className="font-mono text-xs uppercase tracking-widest text-primary mb-2">{a.tag}</div>
                <h3 className="font-display text-3xl mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};