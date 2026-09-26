import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

export default function FreeConsultation() {
  const { t } = useTranslation();
  const options = t('freeConsultation.options', { returnObjects: true });
  const [activeOption, setActiveOption] = useState(0);

  return (
    <section
      id="free-consultation"
      className="w-full bg-primary-50 px-4 py-16 md:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-body-small font-semibold text-primary-500">
          {t('freeConsultation.eyebrow')}
        </span>

        <h2 className="mx-auto mt-5 text-h2 text-primary-900">
          {t('freeConsultation.title')}
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-body-regular text-text-muted">
          {t('freeConsultation.description')}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {Array.isArray(options) &&
            options.map((option, index) => (
              <button
                key={option}
                type="button"
                onClick={() => setActiveOption(index)}
                className={`rounded-full px-6 py-3 text-body-regular font-semibold transition-colors ${
                  activeOption === index
                    ? 'bg-primary-500 text-white'
                    : 'bg-white text-primary-900 hover:bg-primary-100'
                }`}
              >
                {option}
              </button>
            ))}
        </div>

        <a
          href="#contact"
          className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3.5 text-body-regular font-semibold text-white transition-colors hover:bg-primary-700 sm:w-auto"
        >
          {t('freeConsultation.action')}
          <ArrowRight size={18} className="rtl:-scale-x-100" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
