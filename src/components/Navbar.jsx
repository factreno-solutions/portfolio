import { useTranslation } from 'react-i18next';
import logo from '../assets/Logo Factreno.svg';
export default function Navbar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  // مصفوفة الروابط  
  const navLinks = [
    { name: t('home'), active: true },
    { name: t('about'), active: false },
    { name: t('services'), active: false },
    { name: t('portfolio'), active: false },
    { name: t('blog'), active: false },
    { name: t('contact'), active: false },
  ];

  return (
    <nav className="w-full py-4 px-4 flex justify-center">
      <div className="w-full max-w-6xl bg-bg-primary rounded-full shadow-sm px-6 py-3 flex items-center justify-between border border-bg-secondary">
        
        {/* الشعار */}
        <img src={logo} alt="Logo" className="h-10" />

        {/* روابط التنقل (تختفي في الشاشات الصغيرة) */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href="#" 
              className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                link.active ? 'text-primary-500' : 'text-text-dark'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* زر تغيير اللغة */}
        <button 
          onClick={toggleLanguage}
          className="px-3 py-1.5 bg-gray-100 hover:bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center gap-1.5 text-xs transition-all duration-300"
        >
          <span className={i18n.language === 'en' ? 'text-primary-500 font-bold' : 'text-dark font-medium'}>
            EN
          </span>
          <span className="text-gray-300 select-none">|</span>
          <span className={i18n.language === 'ar' ? 'text-[#00b4d8] font-bold' : 'text-gray-500 font-medium'}>
            عربي
          </span>
        </button>

      </div>
    </nav>
  );
}