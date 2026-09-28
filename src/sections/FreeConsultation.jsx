import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FreeConsultation() {
  const { t } = useTranslation();
  const options = t('freeConsultation.options', { returnObjects: true });
  const [activeOption, setActiveOption] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="free-consultation"
      className="w-full bg-primary-50 px-4 py-16 md:py-24 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.span
          variants={itemVariants}
          className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-body-small font-semibold text-primary-500 shadow-sm"
        >
          {t('freeConsultation.eyebrow')}
        </motion.span>

        <motion.h2 variants={itemVariants} className="mx-auto mt-5 text-h2 text-primary-900">
          {t('freeConsultation.title')}
        </motion.h2>

        <motion.p variants={itemVariants} className="mx-auto mt-4 max-w-xl text-body-regular text-text-muted">
          {t('freeConsultation.description')}
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {Array.isArray(options) &&
            options.map((option, index) => (
              <motion.button
                key={option}
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveOption(index)}
                className={`rounded-full px-6 py-3 text-body-regular font-semibold transition-colors cursor-pointer ${
                  activeOption === index
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-white text-primary-900 hover:bg-primary-100'
                }`}
              >
                {option}
              </motion.button>
            ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3.5 text-body-regular font-semibold text-white transition-colors hover:bg-primary-700 sm:w-auto"
          >
            {t('freeConsultation.action')}
            <ArrowRight size={18} className="rtl:-scale-x-100" aria-hidden="true" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

