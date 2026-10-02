import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Blogs() {
  const { t } = useTranslation();
  const articles = t("blog.articles", { returnObjects: true });
  const [query, setQuery] = useState("");
  const filteredArticles = Array.isArray(articles) ? articles.filter((article) => `${article.title} ${article.description} ${article.category}`.toLowerCase().includes(query.toLowerCase())) : [];

  // تمرير الشاشة للأعلى عند فتح الصفحة
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        
        {/* ترويسة الصفحة */}
        <div className="text-center mb-16">
          <h1 className="text-h1 text-primary-900 mb-4">
            {t("blog.allArticlesTitle", "المدونة والمقالات")}
          </h1>
          <p className="text-body-regular text-text-muted max-w-2xl mx-auto">
            {t("blog.allArticlesSubtitle", "تصفح جميع المقالات والتدوينات الخاصة بنا.")}
          </p>
        </div>

        <div className="mx-auto mb-8 max-w-xl">
          <label htmlFor="article-search" className="sr-only">{t("blog.search", "ابحث في المقالات")}</label>
          <input id="article-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t("blog.search", "ابحث في المقالات")} className="w-full rounded-xl border border-primary-100 bg-background px-4 py-3 text-body-regular outline-none focus:border-primary-500" />
        </div>

        {/* شبكة عرض كل المقالات */}
        <div className="grid gap-6 md:grid-cols-3">
          {filteredArticles.map((article, index) => (
              <article
                key={index}
                className="overflow-hidden rounded-2xl bg-bg-secondary shadow-[0_4px_12px_rgba(30,41,59,0.07)] transition-transform duration-300 hover:-translate-y-1"
              >
                {/* مكان صورة المقالة */}
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
                    {t("blog.readMore", "اقرأ المزيد")}
                    <ArrowRight
                      size={16}
                      className="rtl:-scale-x-100"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            ))}
        </div>
        
      </div>
    </section>
  );
}
