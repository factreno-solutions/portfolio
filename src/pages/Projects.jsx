import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const { t } = useTranslation();
  const projects = t("portfolio.projects", { returnObjects: true });
  const [query, setQuery] = useState("");
  const filteredProjects = Array.isArray(projects) ? projects.filter((project) => `${project.title} ${project.category}`.toLowerCase().includes(query.toLowerCase())) : [];

  // تمرير الشاشة للأعلى عند فتح الصفحة
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!Array.isArray(projects)) {
    return <div className="text-center py-20 text-h3">جاري التحميل...</div>;
  }

  return (
    <section className="w-full px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* عنوان الصفحة الرئيسية للمشاريع */}
        <div className="text-center mb-16">
          <h1 className="text-h1 text-primary-900 mb-4">
            {t("portfolio.allProjects", "معرض المشاريع")}
          </h1>
          <p className="text-body-regular text-text-muted max-w-2xl mx-auto">
            {t("portfolio.subtitle", "مجموعة من أحدث المشاريع والأعمال التي قمت بتنفيذها.")}
          </p>
        </div>

        <div className="mx-auto mb-8 max-w-xl">
          <label htmlFor="project-search" className="sr-only">{t("portfolio.search", "ابحث في المشاريع")}</label>
          <input id="project-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t("portfolio.search", "ابحث في المشاريع")} className="w-full rounded-xl border border-primary-100 bg-background px-4 py-3 text-body-regular outline-none focus:border-primary-500" />
        </div>

        {/* شبكة المشاريع */}
        <div className="grid gap-6 md:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-bg-secondary shadow-[0_4px_12px_rgba(30,41,59,0.07)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="aspect-490/320 w-full bg-primary-100/40" />
              <div className="p-6">
                <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-body-small font-semibold text-primary-500">
                  {project.category}
                </span>
                <h3 className="mt-3 text-h3 text-primary-900">
                  {project.title}
                </h3>
                <Link
                  to={`/portfolio/${project.id}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-body-regular font-semibold text-primary-500 hover:text-primary-700"
                >
                  {project.action || "عرض التفاصيل"}
                  <ArrowRight
                    size={16}
                    className="rtl:-scale-x-100"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
