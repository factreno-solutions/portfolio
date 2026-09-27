import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function Portfolio() {
  const { t } = useTranslation();
  const filters = t('portfolio.filters', { returnObjects: true });
  const projects = t('portfolio.projects', { returnObjects: true });
  const [activeFilter, setActiveFilter] = useState(0);

  const visibleProjects =
    activeFilter === 0
      ? projects
      : projects.filter((project) => project.category === filters[activeFilter]);

  return (
    <section id="portfolio" className="w-full px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-primary-50 px-4 py-1.5 text-body-small font-semibold text-primary-500">
            {t('portfolio.badge')}
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-h2 text-primary-900">
            {t('portfolio.title')}
          </h2>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {Array.isArray(filters) &&
              filters.map((filter, index) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(index)}
                  className={`rounded-full border px-5 py-2 text-body-small font-semibold transition-colors ${activeFilter === index
                    ? 'border-primary-500 bg-primary-500 text-white'
                    : 'border-border bg-white text-primary-900 hover:border-primary-300'
                    }`}
                >
                  {filter}
                </button>
              ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {Array.isArray(visibleProjects) &&
            visibleProjects.map((project, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl bg-bg-secondary shadow-[0_4px_12px_rgba(30,41,59,0.07)] transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Project image placeholder — replace with the real project screenshot */}
                <div className="aspect-490/320 w-full bg-primary-100/40" />

                <div className="p-6">
                  <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-body-small font-semibold text-primary-500">
                    {project.category}
                  </span>
                  <h3 className="mt-3 text-h3 text-primary-900">{project.title}</h3>
                  <p className="mt-2 text-body-regular leading-7 text-text-muted">
                    {project.description}
                  </p>
<Link
  to={`/portfolio/${project.id}`}
  className="mt-4 inline-flex items-center gap-1.5 text-body-regular font-semibold text-primary-500 hover:text-primary-700"
>
  {project.action}
  <ArrowRight size={16} className="rtl:-scale-x-100" aria-hidden="true" />
</Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
