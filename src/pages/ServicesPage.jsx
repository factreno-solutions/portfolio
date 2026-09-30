import { useTranslation } from "react-i18next";
import { Globe, Smartphone, Palette, Cloud, Cpu, Activity } from "lucide-react";
import { motion } from "framer-motion";

const ICONS = {
  globe: <Globe size={20} strokeWidth={1.5} aria-hidden="true" />,
  mobile: <Smartphone size={20} strokeWidth={1.5} aria-hidden="true" />,
  palette: <Palette size={20} strokeWidth={1.5} aria-hidden="true" />,
  cloud: <Cloud size={20} strokeWidth={1.5} aria-hidden="true" />,
  cpu: <Cpu size={20} strokeWidth={1.5} aria-hidden="true" />,
  pulse: <Activity size={20} strokeWidth={1.5} aria-hidden="true" />,
};

// إعدادات حركة دخول البطاقات عند التمرير (من اليمين واليسار بالتناوب)
const cardVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: index % 2 === 0 ? -60 : 60,
    y: 20,
  }),
  visible: (index) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      delay: (index % 3) * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function ServicesPage() {
  const { t } = useTranslation();
  const items = t("services.items", { returnObjects: true });

  return (
    <section
      id="services"
      className="w-full bg-bg-secondary px-4 py-16 md:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        {/* عنوان القسم مع تأثير الظهور عند التمرير */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <span className="inline-flex items-center rounded-full bg-primary-50 px-4 py-1.5 text-body-small font-semibold text-primary-500">
            {t("services.badge")}
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-h2 text-primary-900">
            {t("services.title")}
          </h2>
        </motion.div>

        {/* شبكة البطاقات مع حركة الدخول من اليمين واليسار */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(items) &&
            items.map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="rounded-[16px] bg-white p-6 shadow-[0_4px_12px_rgba(30,41,59,0.07)] transition-shadow hover:shadow-[0_8px_24px_rgba(30,41,59,0.12)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-500">
                  {ICONS[service.icon]}
                </div>
                <h3 className="text-h3 text-primary-900">{service.title}</h3>
                <p className="mt-2 text-body-regular leading-7 text-text-muted">
                  {service.description}
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
