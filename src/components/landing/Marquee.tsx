import { Flame } from "lucide-react";

const items = [
  "I группа огнезащиты",
  "ГОСТ Р 53292",
  "Антисептик в составе",
  "До 10 лет защиты",
  "Без запаха",
  "Сертифицировано",
];

export const Marquee = () => {
  return (
    <div className="relative py-6 bg-gradient-fire border-y border-primary overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-4 px-8 font-display text-2xl md:text-3xl text-primary-foreground">
            <Flame className="w-5 h-5" strokeWidth={2.5} />
            <span className="tracking-wider">{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
};