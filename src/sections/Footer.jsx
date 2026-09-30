import { useTranslation } from 'react-i18next';
import { MessageCircle, User, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo-removebg-preview.png';

export default function Footer() {
  const { t } = useTranslation();

  const servicesList = t('footer.servicesList', { returnObjects: true });
  const aboutList = t('footer.aboutList', { returnObjects: true });

  const socials = [
    { icon: MessageCircle, label: 'Message', href: '#' },
  ];

  return (
    <footer id="contact" className="w-full border-t border-border bg-bg-secondary overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-6xl px-4 py-14 md:py-16"
      >
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-[1.3fr_0.7fr_0.8fr_1fr] md:gap-x-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <img src={logo} alt="Factreno" className="mb-5 w-auto shrink-0 h-15 hover:scale-105 transition-all ease-in" />
            <p className="max-w-xs text-body-regular leading-7 text-text-muted">
              {t('footer.description')}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-primary-500 transition-colors hover:border-primary-500 hover:text-primary-700"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-body-regular font-bold text-primary-900">
              {t('footer.servicesHeading')}
            </h3>
            <ul className="mt-5 space-y-3 text-body-regular text-text-muted">
              {Array.isArray(servicesList) &&
                servicesList.map((item) => (
                  <li key={item}>
                    <a href="#services" className="transition-colors hover:text-primary-700">
                      {item}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* About column */}
          <div>
            <h3 className="text-body-regular font-bold text-primary-900">
              {t('footer.aboutHeading')}
            </h3>
            <ul className="mt-5 space-y-3 text-body-regular text-text-muted">
              {Array.isArray(aboutList) &&
                aboutList.map((item) => (
                  <li key={item}>
                    <a href="#about" className="transition-colors hover:text-primary-700">
                      {item}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Quick contact column */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-body-regular font-bold text-primary-900">
              {t('footer.quickContact')}
            </h3>
            <form className="mt-5 flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <label className="relative block">
                <User
                  size={16}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-primary-300 rtl:right-4 rtl:left-auto"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  placeholder={t('footer.namePlaceholder')}
                  className="w-full rounded-full border border-primary-100 bg-white py-2.5 pl-10 pr-4 text-body-regular text-text-dark outline-none transition-colors placeholder:text-text-muted focus:border-primary-500 rtl:pl-4 rtl:pr-10"
                />
              </label>
              <label className="relative block">
                <Mail
                  size={16}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-primary-300 rtl:right-4 rtl:left-auto"
                  aria-hidden="true"
                />
                <input
                  type="email"
                  placeholder={t('footer.emailPlaceholder')}
                  className="w-full rounded-full border border-primary-100 bg-white py-2.5 pl-10 pr-4 text-body-regular text-text-dark outline-none transition-colors placeholder:text-text-muted focus:border-primary-500 rtl:pl-4 rtl:pr-10"
                />
              </label>
              <button
                type="submit"
                className="mt-1 w-full rounded-full bg-primary-500 py-2.5 text-body-regular font-semibold text-white transition-colors hover:bg-primary-700"
              >
                {t('footer.sendMessage')}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-body-small text-text-muted md:flex-row md:items-center md:justify-between">
          <p>{t('footer.copyright')}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary-700">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-primary-700">{t('footer.terms')}</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
