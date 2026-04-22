const rows = [
  ["Группа огнезащитной эффективности", "I (потеря массы ≤ 9%)"],
  ["Норматив", "ГОСТ Р 53292-2009"],
  ["Расход рабочего раствора", "250–300 г/м²"],
  ["Концентрация", "1:4 (концентрат:вода)"],
  ["Срок службы покрытия", "до 10 лет (внутри)"],
  ["Температура нанесения", "от +5 °C"],
  ["Класс опасности", "IV — малоопасное вещество"],
  ["Цвет древесины после обработки", "Не изменяется"],
  ["Дополнительная функция", "Антисептик, биозащита"],
  ["Фасовка", "5 л · 10 л · 20 л · 200 л"],
];

export const Specs = () => {
  return (
    <section id="specs" className="relative py-24 md:py-32 bg-gradient-ember border-y border-border">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">— 04 / Спецификация</div>
            <h2 className="font-display text-5xl md:text-6xl leading-none mb-6">
              Технические<br /><span className="text-gradient-fire">данные</span>
            </h2>
            <p className="text-muted-foreground text-sm">
              Полный технический паспорт и протоколы испытаний предоставляются вместе с поставкой.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="border border-border bg-card/50 backdrop-blur-sm">
              {rows.map(([k, v], i) => (
                <div
                  key={k}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-4 px-6 md:px-8 py-5 ${i !== rows.length - 1 ? "border-b border-border" : ""} hover:bg-primary/5 transition-colors`}
                >
                  <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{k}</div>
                  <div className="font-semibold">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};