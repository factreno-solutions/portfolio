import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroIllustration from "../assets/3d-character-hero.jpg";

export default function Hero() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      className="w-full bg-bg-secondary px-4 py-12 sm:py-16 md:py-24 overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-12">
        {/* Left column: copy + actions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}>
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-body-small font-semibold text-primary-500">
            <span
              className="h-2 w-2 rounded-full bg-primary-500"
              aria-hidden="true"
            />
            {t("hero.badge")}
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="mt-5 max-w-lg text-h1 text-primary-900">
            {t("hero.title")}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-md text-body-large text-text-muted">
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <motion.a
              href="#free-consultation"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3.5 text-body-regular font-semibold text-white transition-colors hover:bg-primary-700 sm:w-auto">
              {t("hero.primaryAction")}
              <ArrowRight
                size={18}
                className="rtl:-scale-x-100"
                aria-hidden="true"
              />
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-50 px-6 py-3.5 text-body-regular font-semibold text-primary-900 transition-colors hover:bg-primary-100 sm:w-auto">
              {t("hero.secondaryAction")}
              <ArrowRight
                size={18}
                className="rtl:-scale-x-100"
                aria-hidden="true"
              />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right column: illustration */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-110">
          <div className="overflow-hidden rounded-3xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            <img
              src={heroIllustration}
              alt="Illustration of a person managing multiple digital products at once"
              className="h-auto w-full object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
