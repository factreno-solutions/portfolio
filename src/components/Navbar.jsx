import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo-removebg-preview.png';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  const location = useLocation();

  useEffect(() => {
    // التحقق مما إذا كان الرابط يحتوي على علامة #
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      
      // ننتظر 100 ملي ثانية حتى يتم رسم الصفحة بالكامل ثم ننزل للقسم
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // إذا كان الانتقال لصفحة جديدة عادية، نصعد لأعلى الصفحة
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]); // يتم تشغيل هذا الكود في كل مرة يتغير فيها الرابط
  // مصفوفة الروابط
  const navLinks = [
    { name: t('nav.home'), href: '/#home' },
    { name: t('nav.about'), href: '/#about' },
    { name: t('nav.services'), href: '/#services' },
    { name: t('nav.portfolio'), href: '/#portfolio' },
    { name: t('nav.blog'), href: '/#blog' },
    { name: t('nav.contact'), href: '/#contact' },
    {name:  t('nav.pageContact'),href:"/contact"},
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-bg-secondary/80 px-3 py-3 backdrop-blur sm:px-4 sm:py-4">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex items-center justify-between gap-2 rounded-full border border-bg-secondary bg-bg-primary px-3 py-2 shadow-sm sm:gap-0 sm:px-6 sm:py-3">
          {/* الشعار */}
          <a href="#home">
          <img src={logo} alt="Logo" className="h-6 w-auto shrink-0 sm:h-9 md:h-10" />
          </a>

          {/* روابط التنقل (تختفي في الشاشات الصغيرة) */}
          <div className="hidden md:flex items-center gap-6">
{navLinks.map((link, index) => {
  // تجميع المسار الحالي (اسم الصفحة + القسم إن وجد)
  const currentPath = location.pathname + location.hash;
  
  // التحقق من تطابق الرابط الحالي مع رابط الزر
  // السطر الثاني يعالج حالة الصفحة الرئيسية الافتراضية "/"
  const isActive = 
    currentPath === link.href || 
    (currentPath === '/' && link.href === '/#home');

  return (
    <Link
      key={index}
      to={link.href}
      onClick={() => setIsOpen(false)}
      className={`text-sm font-medium transition-colors hover:text-primary-500 ${
        isActive ? 'text-primary-500 font-bold' : 'text-text-dark'
      }`}
    >
      {link.name}
    </Link>
  );
})}
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            {/* زر تغيير اللغة */}
            <button
              onClick={toggleLanguage}
              aria-label={i18n.language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
              className="flex shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-full border border-gray-200 bg-gray-100 px-2 py-1 text-[11px] transition-all duration-300 cursor-pointer hover:bg-gray-200 active:bg-gray-300 sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-xs"
            >
              <span className={i18n.language === 'en' ? 'text-primary-500 font-bold' : 'text-dark font-medium'}>
                EN
              </span>
              <span className="text-gray-300 select-none">|</span>
              <span className={i18n.language === 'ar' ? 'text-primary-500 font-bold' : 'text-gray-500 font-medium'}>
                عربي
              </span>
            </button>

            {/* زر القائمة للشاشات الصغيرة */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-200 text-text-dark transition-colors hover:bg-gray-100 sm:h-9 sm:w-9 md:hidden"
            >
              {isOpen ? <X size={16} aria-hidden="true" /> : <Menu size={16} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* قائمة الجوال المنسدلة */}
        {isOpen && (
          <div className="mt-2 flex flex-col gap-1 rounded-2xl border border-bg-secondary bg-bg-primary p-4 shadow-sm md:hidden">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-primary-50 hover:text-primary-500 ${
                  link.active ? 'text-primary-500' : 'text-text-dark'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
