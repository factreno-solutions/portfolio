import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import IllustrationAboutUs from '../assets/Illustration-about.jpg';

export default function AboutUs() {
  const { t } = useTranslation();
  const points = t('about.points', { returnObjects: true });

  return (
    <section id="about" className="w-full px-4 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Left column */}
        <div>
          <span className="inline-flex items-center rounded-full bg-primary-50 px-4 py-1.5 text-body-small font-semibold text-primary-500">
            {t('about.badge')}
          </span>

          <h2 className="mt-5 max-w-md text-h2 text-primary-900">
            {t('about.title')}
          </h2>

          <p className="mt-6 max-w-lg text-body-regular leading-7 text-text-muted">
            {t('about.description1')}
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {Array.isArray(points) &&
              points.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-500">
                    <Check size={14} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className="text-body-regular font-semibold text-primary-900">{point}</span>
                </li>
              ))}
          </ul>
        </div>

        {/* Right column*/}
        <div className="mx-auto w-full max-w-120 overflow-hidden rounded-3xl bg-bg-secondary">
          <div className="aspect-480/380 w-full">
            <img
              src={IllustrationAboutUs}
              alt="Illustration of a person managing multiple digital products at once"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
