import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Изменяет ли антипирен цвет древесины?", a: "Нет. PYROSHIELD — бесцветный раствор, после высыхания не оставляет налётов и пятен. Древесина сохраняет натуральную текстуру и оттенок." },
  { q: "Можно ли наносить сверху лак или краску?", a: "Да. После полного высыхания (24–48 часов) поверхность можно покрывать любыми ЛКМ — как водными, так и алкидными." },
  { q: "Сколько времени сохраняется огнезащитный эффект?", a: "Внутри помещений — до 10 лет. На наружных поверхностях, подверженных осадкам, — до 5 лет, рекомендуется обновлять покрытие." },
  { q: "Безопасен ли антипирен для людей и животных?", a: "Да. PYROSHIELD относится к IV классу опасности (малоопасное вещество). Не выделяет токсичных паров после высыхания, разрешён для жилых помещений." },
  { q: "Нужны ли документы для приёмки объекта?", a: "С каждой партией поставляется сертификат соответствия, паспорт качества и протокол огневых испытаний — этого достаточно для пожарного надзора." },
  { q: "Какой срок годности концентрата?", a: "36 месяцев в герметичной заводской упаковке при температуре от +5 до +30 °C. Допускается замораживание без потери свойств." },
];

export const FAQ = () => {
  return (
    <section id="faq" className="relative py-24 md:py-32 bg-card border-y border-border">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">— 06 / Вопросы</div>
            <h2 className="font-display text-5xl md:text-7xl leading-none mb-6">
              Часто<br />спрашивают
            </h2>
            <p className="text-muted-foreground">
              Не нашли ответ? Напишите нам — техническая поддержка отвечает в течение часа.
            </p>
          </div>
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary hover:no-underline py-6">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};