import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function ServiceDetails() {
  const { t, i18n } = useTranslation();
  const { slug } = useParams();
  const items = t("services.items", { returnObjects: true });
  const service = Array.isArray(items) ? items.find((item) => item.slug === slug) : null;
  const isArabic = i18n.language === "ar";
  const BackIcon = isArabic ? ArrowRight : ArrowLeft;

  if (!service) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-24 text-center">
        <h1 className="text-h2 text-primary-900">{t("services.notFound")}</h1>
        <Link to="/services" className="mt-6 inline-flex rounded-full bg-primary-500 px-6 py-3 font-semibold text-white">
          {t("services.backToServices")}
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-[70vh] bg-bg-secondary px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <Link to="/services" className="inline-flex items-center gap-2 text-body-small font-semibold text-primary-500 hover:text-primary-700">
          <BackIcon size={16} aria-hidden="true" /> {t("services.backToServices")}
        </Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-10 rounded-3xl bg-white p-7 shadow-[0_12px_40px_rgba(30,41,59,0.08)] md:p-12">
          <span className="inline-flex rounded-full bg-primary-50 px-4 py-1.5 text-body-small font-semibold text-primary-500">{t("services.badge")}</span>
          <h1 className="mt-5 text-h1 text-primary-900">{service.title}</h1>
          <p className="mt-5 max-w-3xl text-body-large leading-8 text-text-muted">{service.details}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {service.highlights.map((highlight) => (
              <div key={highlight} className="flex items-start gap-3 rounded-2xl bg-bg-secondary p-4 text-body-regular text-primary-900">
                <CheckCircle2 className="mt-0.5 shrink-0 text-primary-500" size={20} aria-hidden="true" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3.5 font-semibold text-white hover:bg-primary-700">
            {t("services.startProject")} <ArrowRight size={16} className="rtl:-scale-x-100" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
