import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-fire-wood.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden noise">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="Огнезащищённая древесина" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-50 -z-10" />

      <div className="container relative">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8"
          >
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary">I группа огнезащиты · ГОСТ Р 53292</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.85] mb-6"
          >
            ОГОНЬ
            <br />
            <span className="text-gradient-fire">ОСТАНАВЛИВАЕТСЯ</span>
            <br />
            ЗДЕСЬ
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10"
          >
            PYROSHIELD — концентрированный антипирен глубокого проникновения. Превращает древесину в трудногорючий материал на срок до 10 лет.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a href="#contact" className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-fire text-primary-foreground font-bold uppercase tracking-wider text-sm hover:shadow-fire transition-all">
              Купить концентрат
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#how" className="inline-flex items-center gap-3 px-8 py-4 border border-border hover:border-primary/50 hover:bg-primary/5 font-bold uppercase tracking-wider text-sm transition-all">
              Как это работает
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-6 max-w-xl border-t border-border pt-8"
          >
            {[
              { v: "I", l: "группа защиты" },
              { v: "10", l: "лет гарантии" },
              { v: "1:4", l: "разведение" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-4xl md:text-5xl text-gradient-fire">{s.v}</div>
                <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};