import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import IllustrationAboutUs from '../assets/Illustration-about.jpg';

export default function AboutUs() {
  const { t } = useTranslation();
  const points = t('about.points', { returnObjects: true });

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="w-full px-4 py-16 md:py-24 overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Left column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
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
                <motion.li key={index} variants={itemVariants} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-500">
                    <Check size={14} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className="text-body-regular font-semibold text-primary-900">{point}</span>
                </motion.li>
              ))}
          </ul>
        </motion.div>

        {/* Right column*/}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-120 overflow-hidden rounded-3xl bg-bg-secondary shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
        >
          <div className="aspect-480/380 w-full overflow-hidden">
            <img
              src={IllustrationAboutUs}
              alt="Illustration of a person managing multiple digital products at once"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

