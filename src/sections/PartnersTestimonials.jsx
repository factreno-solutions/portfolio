import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

const partners = ["TechFlow", "Nexa", "Bright Labs", "Mada", "Cloud Nine", "Launchpad"];

export default function PartnersTestimonials() {
  const { t } = useTranslation();
  const translatedTestimonials = t("testimonials.items", { returnObjects: true });
  const testimonials = Array.isArray(translatedTestimonials) ? translatedTestimonials : [
    { quote: "فريق احترافي يحول الأفكار إلى منتجات رقمية مؤثرة.", name: "أحمد — شريك مؤسس" },
    { quote: "سرعة في التنفيذ واهتمام حقيقي بتفاصيل العمل.", name: "سارة — مديرة منتج" },
    { quote: "حلول واضحة ونتائج قابلة للقياس من أول إطلاق.", name: "عمر — مدير شركة ناشئة" },
  ];

  return (
    <section className="w-full overflow-hidden px-4 py-14" aria-labelledby="partners-title">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-body-small font-semibold text-primary-500">{t("partners.badge", "شركاء النجاح")}</span>
          <h2 id="partners-title" className="mt-3 text-h2 text-primary-900">{t("partners.title", "نبني نجاحاً مستداماً معاً")}</h2>
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl bg-bg-secondary py-5" dir="ltr">
          <motion.div className="flex w-max items-center gap-12" animate={{ x: [0, -420] }} transition={{ repeat: Infinity, duration: 18, ease: "linear" }}>
            {[...partners, ...partners].map((partner, index) => <span key={`${partner}-${index}`} className="text-lg font-bold tracking-wide text-primary-900/65">{partner}</span>)}
          </motion.div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {Array.isArray(testimonials) && testimonials.map((item, index) => (
            <figure key={index} className="rounded-2xl border border-primary-100 bg-background p-6 shadow-sm">
              <Quote className="text-primary-500" aria-hidden="true" />
              <blockquote className="mt-4 text-body-regular leading-7 text-text-muted">{item.quote}</blockquote>
              <figcaption className="mt-5 font-semibold text-primary-900">{item.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
