import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import heroIllustration from '../assets/3d-character-hero.jpg';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="w-full bg-bg-secondary px-4 py-12 sm:py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-12">
        {/* Left column: copy + actions */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-body-small font-semibold text-primary-500">
            <span className="h-2 w-2 rounded-full bg-primary-500" aria-hidden="true" />
            {t('hero.badge')}
          </span>

          <h1 className="mt-5 max-w-lg text-h1 text-primary-900">{t('hero.title')}</h1>

          <p className="mt-5 max-w-md text-body-large text-text-muted">
            {t('hero.subtitle')}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href="#free-consultation"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3.5 text-body-regular font-semibold text-white transition-colors hover:bg-primary-700 sm:w-auto"
            >
              {t('hero.primaryAction')}
              <ArrowRight size={18} className="rtl:-scale-x-100" aria-hidden="true" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-50 px-6 py-3.5 text-body-regular font-semibold text-primary-900 transition-colors hover:bg-primary-100 sm:w-auto"
            >
              {t('hero.secondaryAction')}
              <ArrowRight size={18} className="rtl:-scale-x-100" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right column: illustration — replace the src with the final image */}
        <div className="mx-auto w-full max-w-110">
          <div className="overflow-hidden rounded-3xl bg-white">
            <img
              src={heroIllustration}
              alt="Illustration of a person managing multiple digital products at once"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
