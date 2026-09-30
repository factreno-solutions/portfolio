import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
      duration: 0.55,
      delay: (index % 3) * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Blog() {
  const { t } = useTranslation();
  const articles = t("blog.articles", { returnObjects: true });

  return (
    <section id="blog" className="w-full px-4 py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        {/* عنوان القسم */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <span className="inline-flex items-center rounded-full bg-primary-50 px-4 py-1.5 text-body-small font-semibold text-primary-500">
            {t("blog.eyebrow")}
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-h2 text-primary-900">
            {t("blog.title")}
          </h2>
        </motion.div>

        {/* شبكة المقالات */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {Array.isArray(articles) &&
            articles.map((article, index) => (
              <motion.article
                key={article.id || index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="overflow-hidden rounded-2xl bg-bg-secondary shadow-[0_4px_12px_rgba(30,41,59,0.07)] hover:shadow-[0_8px_24px_rgba(30,41,59,0.12)] transition-shadow"
              >
                {/* Article image placeholder */}
                <div className="aspect-490/320 w-full bg-primary-100/40" />

                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-body-small font-semibold text-primary-500">
                      {article.category}
                    </span>
                    <span className="text-body-small text-text-muted">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="mt-3 text-h3 text-primary-900">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-body-regular leading-7 text-text-muted">
                    {article.description}
                  </p>

                  <Link
                    to={`/blog/${article.id}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-body-regular font-semibold text-primary-500 hover:text-primary-700"
                  >
                    {t("blog.readMore")}
                    <ArrowRight
                      size={16}
                      className="rtl:-scale-x-100"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </motion.article>
            ))}
        </div>

        {/* زر المزيد من المقالات */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <Link
            to="/blogs"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3.5 text-body-regular font-semibold text-white transition-all hover:bg-primary-700 hover:scale-[1.02] sm:w-auto"
          >
            {t("blog.moreArticles")}
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

