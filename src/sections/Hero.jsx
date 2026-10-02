import { useTranslation } from "react-i18next";
import { ArrowRight, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroIllustration from "../assets/3d-character-hero.jpg";

export default function Hero() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleServiceSearch = (event) => {
    event.preventDefault();
    navigate(`/services${query.trim() ? `?search=${encodeURIComponent(query.trim())}` : ""}`);
  };

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

          <motion.form
            variants={itemVariants}
            onSubmit={handleServiceSearch}
            className="mt-8 flex max-w-xl items-center gap-2 rounded-full border border-primary-100 bg-white p-2 shadow-sm"
          >
            <Search className="ms-3 shrink-0 text-primary-500" aria-hidden="true" />
            <label htmlFor="hero-service-search" className="sr-only">
              {t("hero.searchLabel")}
            </label>
            <input
              id="hero-service-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t("hero.searchPlaceholder")}
              className="min-w-0 flex-1 bg-transparent px-2 py-2 text-body-regular text-text-dark outline-none placeholder:text-text-muted"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-primary-500 px-5 py-3 text-body-small font-semibold text-white transition-colors hover:bg-primary-700"
            >
              {t("hero.searchAction")}
            </button>
          </motion.form>
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
