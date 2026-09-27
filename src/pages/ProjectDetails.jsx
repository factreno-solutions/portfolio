import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";

export default function ProjectDetails() {
  const { id } = useParams();
  const { t } = useTranslation();

  const projects = t("portfolio.projects", { returnObjects: true });

  // تمرير الشاشة للأعلى عند فتح الصفحة أو الانتقال لمشروع آخر
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // التحقق من تحميل البيانات
  if (!Array.isArray(projects)) {
    return <div className="text-center py-20 text-h3">جاري التحميل...</div>;
  }

  // البحث عن المشروع المختار وتصفية باقي المشاريع
  const currentProject = projects.find(
    (project) => project.id?.toString() === id,
  );
  const otherProjects = projects.filter(
    (project) => project.id?.toString() !== id,
  );

  // إذا كان الـ id غير موجود
  if (!currentProject) {
    return (
      <div className="text-center py-20 mt-20 text-xl font-bold">
        المشروع غير موجود
      </div>
    );
  }

  return (
    <section className="w-full px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* --- القسم الأول: المشروع المختار --- */}
        <div className="mb-20">
          {/* صورة المشروع */}
          <div className="aspect-[21/9] w-full rounded-2xl bg-primary-100/40 mb-8 shadow-sm" />

          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-body-small font-semibold text-primary-500">
              {currentProject.category}
            </span>
          </div>

          <h1 className="text-h1 text-primary-900 mb-6">
            {currentProject.title}
          </h1>

          <p className="text-body-regular leading-relaxed text-text-muted max-w-4xl">
            {currentProject.description}
          </p>
        </div>

        {/* --- القسم الثاني: باقي المشاريع --- */}
        {otherProjects.length > 0 && (
          <div className="border-t border-gray-200 pt-16">
            <h2 className="text-h2 text-primary-900 mb-8">
              {t("portfolio.otherProjects", "مشاريع أخرى")}
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {otherProjects.map((project, index) => (
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
        )}
      </div>
    </section>
  );
}
