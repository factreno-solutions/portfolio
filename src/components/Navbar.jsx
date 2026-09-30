import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/Logo-Factreno.svg';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // حالة لتتبع السيكشن النشط أثناء السكرول

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  const location = useLocation();

  // مصفوفة الروابط
  const navLinks = [
    { name: t('nav.home'), href: '/#home' },
    { name: t('nav.about'), href: '/#about' },
    { name: t('nav.services'), href: '/#services' },
    { name: t('nav.portfolio'), href: '/#portfolio' },
    { name: t('nav.blog'), href: '/#blog' },
    { name: t('nav.pageContact'), href: '/contact' },
    { name: t('nav.projects'), href: '/projects' },
  ];

  // (1) الانتقال للسيكشن بناءً على الرابط
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  // (2) مراقبة التمرير (Scroll Spy) لتحديث السيكشن النشط
  useEffect(() => {
    const handleScroll = () => {
      // الأقسام الموجودة في الصفحة الرئيسية
      const hashSections = ['home', 'about', 'services', 'portfolio', 'blog'];
      let currentSection = '';

      for (const section of hashSections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // نعتبر السيكشن نشط إذا كان الجزء العلوي منه يلامس ثلث الشاشة العلوي
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // تشغيل مستمع التمرير فقط إذا كنا في الصفحة الرئيسية
    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // استدعاء مبدئي لتحديد السيكشن النشط عند فتح الصفحة
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

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
      transition: { duration: 0.25, ease: 'easeOut', staggerChildren: 0.05 },
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
            href="/#home"
            variants={itemVariants}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center"
          >
            <img src={logo} alt="Logo" className="h-6 w-auto shrink-0 sm:h-9 md:h-10" />
          </motion.a>

          {/* روابط التنقل (تختفي في الشاشات الصغيرة) */}
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link, index) => {
              const isHashLink = link.href.startsWith('/#');
              const hash = isHashLink ? link.href.replace('/#', '') : '';

              // تحديد هل الرابط نشط أم لا
              let isActive = false;
              if (isHashLink) {
                // للروابط داخل الصفحة الرئيسية (حسب السكرول)
                isActive = location.pathname === '/' && activeSection === hash;
              } else {
                // للصفحات الأخرى مثل (اتصل بنا)
                isActive = location.pathname === link.href;
              }

              return (
                <motion.div key={index} variants={itemVariants} whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}>
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm transition-colors hover:text-primary-500 ${
                      isActive ? 'font-bold text-primary-500' : 'font-medium text-text-dark'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}
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
              className="mt-2 flex flex-col gap-1 overflow-hidden rounded-2xl border border-bg-secondary bg-bg-primary p-4 shadow-sm md:hidden"
            >
              {navLinks.map((link, index) => {
                const isHashLink = link.href.startsWith('/#');
                const hash = isHashLink ? link.href.replace('/#', '') : '';

                let isActive = false;
                if (isHashLink) {
                  isActive = location.pathname === '/' && activeSection === hash;
                } else {
                  isActive = location.pathname === link.href;
                }

                return (
                  <motion.div key={index} variants={mobileItemVariants}>
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-primary-50 hover:text-primary-500 ${
                        isActive ? 'font-bold text-primary-500 bg-primary-50' : 'font-medium text-text-dark'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}