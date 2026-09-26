import { useTranslation } from 'react-i18next';
import { Globe, Smartphone, Palette, Cloud, Cpu, Activity } from 'lucide-react';

const ICONS = {
  globe: <Globe size={20} strokeWidth={1.5} aria-hidden="true" />,
  mobile: <Smartphone size={20} strokeWidth={1.5} aria-hidden="true" />,
  palette: <Palette size={20} strokeWidth={1.5} aria-hidden="true" />,
  cloud: <Cloud size={20} strokeWidth={1.5} aria-hidden="true" />,
  cpu: <Cpu size={20} strokeWidth={1.5} aria-hidden="true" />,
  pulse: <Activity size={20} strokeWidth={1.5} aria-hidden="true" />,
};

export default function Services() {
  const { t } = useTranslation();
  const items = t('services.items', { returnObjects: true });

  return (
    <section id="services" className="w-full bg-bg-secondary px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-primary-50 px-4 py-1.5 text-body-small font-semibold text-primary-500">
            {t('services.badge')}
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-h2 text-primary-900">
            {t('services.title')}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(items) &&
            items.map((service, index) => (
              <div
                key={index}
                className="rounded-[16px] bg-white p-6 shadow-[0_4px_12px_rgba(30,41,59,0.07)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-500">
                  {ICONS[service.icon]}
                </div>
                <h3 className="text-h3 text-primary-900">{service.title}</h3>
                <p className="mt-2 text-body-regular leading-7 text-text-muted">
                  {service.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
