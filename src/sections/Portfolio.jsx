import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const cardVariants = {
  hidden: (index) => ({
    opacity: 0,
    y: 35,
    scale: 0.96,
  }),
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: (index % 3) * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Portfolio() {
  const { t } = useTranslation();
  const filters = t("portfolio.filters", { returnObjects: true });
  const projects = t("portfolio.projects", { returnObjects: true });
  const [activeFilter, setActiveFilter] = useState(0);

  const visibleProjects =
    activeFilter === 0
      ? projects
      : projects.filter(
          (project) => project.category === filters[activeFilter],
        );


        console.log("projects ", projects)
  return (
    <section id="portfolio" className="w-full px-4 py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        {/* عنوان وفلاتر القسم */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <span className="inline-flex items-center rounded-full bg-primary-50 px-4 py-1.5 text-body-small font-semibold text-primary-500">
            {t("portfolio.badge")}
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-h2 text-primary-900">
            {t("portfolio.title")}
          </h2>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {Array.isArray(filters) &&
              filters.map((filter, index) => (
                <motion.button
                  key={filter}
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(index)}
                  className={`rounded-full border px-5 py-2 text-body-small font-semibold transition-colors cursor-pointer ${
                    activeFilter === index
                      ? "border-primary-500 bg-primary-500 text-white shadow-sm"
                      : "border-border bg-white text-primary-900 hover:border-primary-300"
                  }`}
                >
                  {filter}
                </motion.button>
              ))}
          </div>
        </motion.div>

        {/* شبكة المشاريع */}
        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {Array.isArray(visibleProjects) &&
              visibleProjects.map((project, index) => (
                <motion.div
                  key={project.id || index}
                  layout
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.25 } }}
                  viewport={{ once: false, amount: 0.15 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="overflow-hidden rounded-2xl bg-bg-secondary shadow-[0_4px_12px_rgba(30,41,59,0.07)] hover:shadow-[0_8px_24px_rgba(30,41,59,0.12)] transition-shadow"
                >
                  {/* Project image placeholder */}
                  <div className="aspect-490/320 w-full bg-primary-100/40" />

                  <div className="p-6">
                    <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-body-small font-semibold text-primary-500">
                      {project.category}
                    </span>
                    <h3 className="mt-3 text-h3 text-primary-900">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-body-regular leading-7 text-text-muted">
                      {project.description}
                    </p>
                    <Link
                      to={`/portfolio/${project.id}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-body-regular font-semibold text-primary-500 hover:text-primary-700"
                    >
                      {project.action}
                      <ArrowRight
                        size={16}
                        className="rtl:-scale-x-100"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>

        {/* زر عرض كل المشاريع */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <Link
            to="/projects"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3.5 text-body-regular font-semibold text-white transition-all hover:bg-primary-700 hover:scale-[1.02] sm:w-auto"
          >
            {t("portfolio.allProjects")}
                                  <ArrowRight
                        size={16}
                        className="rtl:-scale-x-100"
                        aria-hidden="true"
                      />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

