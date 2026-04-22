import { Flame } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-primary" strokeWidth={2.5} />
            <span className="font-display text-xl tracking-wider">PYRO<span className="text-primary">SHIELD</span></span>
          </div>
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            © 2026 · Все права защищены · ИНН 5260000000
          </div>
        </div>
      </div>
    </footer>
  );
};