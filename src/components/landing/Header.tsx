import { Flame, Menu } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#benefits", label: "Преимущества" },
  { href: "#how", label: "Как работает" },
  { href: "#applications", label: "Применение" },
  { href: "#specs", label: "Характеристики" },
  { href: "#faq", label: "FAQ" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <Flame className="w-6 h-6 text-primary animate-flicker" strokeWidth={2.5} />
            <div className="absolute inset-0 blur-md bg-primary/40 -z-10" />
          </div>
          <span className="font-display text-2xl tracking-wider">PYRO<span className="text-primary">SHIELD</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-fire text-primary-foreground font-semibold text-sm hover:shadow-fire transition-all">
          Заказать
        </a>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Меню">
          <Menu className="w-6 h-6" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="px-5 py-2.5 bg-gradient-fire text-primary-foreground font-semibold text-sm text-center">
              Заказать
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};