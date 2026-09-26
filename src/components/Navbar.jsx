import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/Logo-Factreno.svg';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  // مصفوفة الروابط
  const navLinks = [
    { name: t('nav.home'), href: '#home', active: true },
    { name: t('nav.about'), href: '#about', active: false },
    { name: t('nav.services'), href: '#services', active: false },
    { name: t('nav.portfolio'), href: '#portfolio', active: false },
    { name: t('nav.blog'), href: '#blog', active: false },
    { name: t('nav.contact'), href: '#contact', active: false },
  ];

  // إعدادات حركة دخول النافبار عند فتح الموقع
  const navContainerVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -15, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.25,
        ease: 'easeOut',
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.97,
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navContainerVariants}
      className="sticky top-0 z-50 w-full bg-bg-secondary/80 px-3 py-3 backdrop-blur sm:px-4 sm:py-4"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex items-center justify-between gap-2 rounded-full border border-bg-secondary bg-bg-primary px-3 py-2 shadow-sm sm:gap-0 sm:px-6 sm:py-3">
          {/* الشعار */}
          <motion.a
            href="#home"
            variants={itemVariants}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center"
          >
            <img src={logo} alt="Logo" className="h-6 w-auto shrink-0 sm:h-9 md:h-10" />
          </motion.a>

          {/* روابط التنقل (تختفي في الشاشات الصغيرة) */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                  link.active ? 'text-primary-500' : 'text-text-dark'
                }`}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <motion.div variants={itemVariants} className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            {/* زر تغيير اللغة */}
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={i18n.language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
              className="flex shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-full border border-gray-200 bg-gray-100 px-2 py-1 text-[11px] transition-colors cursor-pointer hover:bg-gray-200 active:bg-gray-300 sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-xs"
            >
              <span className={i18n.language === 'en' ? 'text-primary-500 font-bold' : 'text-dark font-medium'}>
                EN
              </span>
              <span className="text-gray-300 select-none">|</span>
              <span className={i18n.language === 'ar' ? 'text-primary-500 font-bold' : 'text-gray-500 font-medium'}>
                عربي
              </span>
            </motion.button>

            {/* زر القائمة للشاشات الصغيرة */}
            <motion.button
              onClick={() => setIsOpen((prev) => !prev)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-200 text-text-dark transition-colors hover:bg-gray-100 sm:h-9 sm:w-9 md:hidden"
            >
              {isOpen ? <X size={16} aria-hidden="true" /> : <Menu size={16} aria-hidden="true" />}
            </motion.button>
          </motion.div>
        </div>

        {/* قائمة الجوال المنسدلة */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              className="mt-2 flex flex-col gap-1 rounded-2xl border border-bg-secondary bg-bg-primary p-4 shadow-sm md:hidden overflow-hidden"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  variants={mobileItemVariants}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-primary-50 hover:text-primary-500 ${
                    link.active ? 'text-primary-500' : 'text-text-dark'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
