import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ArticleDetails() {
  const { id } = useParams();
  const { t } = useTranslation();

  // جلب مصفوفة المقالات من ملف الترجمة (تأكد أن المسار 'blog.articles' يطابق ملف الـ JSON لديك)
  const articles = t('blog.articles', { returnObjects: true });

  // تمرير الشاشة للأعلى عند فتح الصفحة أو الانتقال لمقال آخر
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // إذا لم يتم تحميل المقالات بعد
  if (!Array.isArray(articles)) {
    return <div className="text-center py-20 text-h3">جاري التحميل...</div>;
  }

  // البحث عن المقال المختار وتصفية باقي المقالات
  const currentArticle = articles.find((article) => article.id.toString() === id);
  const otherArticles = articles.filter((article) => article.id.toString() !== id);

  if (!currentArticle) {
    return <div className="text-center py-20 mt-20 text-xl font-bold">المقال غير موجود</div>;
  }

  return (
    <section className="w-full px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        
        {/* --- القسم الأول: المقال المختار --- */}
        <div className="mb-20">
          <div className="aspect-[21/9] w-full rounded-2xl bg-primary-100/40 mb-8" />
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-body-small font-semibold text-primary-500">
              {currentArticle.category}
            </span>
          </div>
          <h1 className="text-h1 text-primary-900 mb-6">{currentArticle.title}</h1>
          <p className="text-body-regular leading-relaxed text-text-muted">
            {currentArticle.description}
          </p>
        </div>

        {/* --- القسم الثاني: باقي المقالات --- */}
        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-h2 text-primary-900 mb-8">
            {t('blog.moreArticles', 'مقالات أخرى قد تهمك')}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {otherArticles.map((article, index) => (
              <article key={index} className="overflow-hidden rounded-2xl bg-bg-secondary shadow-[0_4px_12px_rgba(30,41,59,0.07)] transition-transform hover:-translate-y-1">
                <div className="aspect-490/320 w-full bg-primary-100/40" />
                <div className="p-6">
                  <h3 className="mt-3 text-h3 text-primary-900">{article.title}</h3>
                  <Link
                    to={`/blog/${article.id}`}
                    className="mt-5 inline-flex text-primary-500 hover:text-primary-700"
                  >
                    {t('blog.readMore')}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}