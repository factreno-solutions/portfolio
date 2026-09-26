import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const { t } = useTranslation();
  const articles = t('blog.articles', { returnObjects: true });

  return (
    <section id="blog" className="w-full px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-primary-50 px-4 py-1.5 text-body-small font-semibold text-primary-500">
            {t('blog.eyebrow')}
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-h2 text-primary-900">
            {t('blog.title')}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {Array.isArray(articles) &&
            articles.map((article, index) => (
              <article
                key={index}
                className="overflow-hidden rounded-2xl bg-bg-secondary shadow-[0_4px_12px_rgba(30,41,59,0.07)] transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Article image placeholder — replace with the real cover image */}
                <div className="aspect-490/320 w-full bg-primary-100/40" />

                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-body-small font-semibold text-primary-500">
                      {article.category}
                    </span>
                    <span className="text-body-small text-text-muted">{article.date}</span>
                  </div>
                  <h3 className="mt-3 text-h3 text-primary-900">{article.title}</h3>
                  <p className="mt-2 text-body-regular leading-7 text-text-muted">
                    {article.description}
                  </p>

                  <Link
                    to={`/blog/${article.id}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-body-regular font-semibold text-primary-500 hover:text-primary-700"
                  >
                    {t('blog.readMore')}
                    <ArrowRight size={16} className="rtl:-scale-x-100" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}
