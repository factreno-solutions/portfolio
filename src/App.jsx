import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import AboutUs from './sections/AboutUs';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import FreeConsultation from './sections/FreeConsultation';
import Blog from './sections/Blog';
import Footer from './sections/Footer';

function App() {
  const { i18n } = useTranslation();

  // تغيير اتجاه الصفحة والخط بناءً على اللغة الحالية
  useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Portfolio />
        <FreeConsultation />
        <Blog />
      </main>
      <Footer />
    </>
  );
}

export default App;