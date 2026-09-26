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
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticleDetails from './pages/ArticleDetails';

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
  
   <BrowserRouter>
    <Navbar />
    
    <main>
      <Routes>
        {/* مسار الصفحة الرئيسية: يضم كل الأقسام */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <AboutUs />
              <Services />
              <Portfolio />
              <FreeConsultation />
              <Blog />
            </>
          } 
        />
<Route path="/blog/:id" element={<ArticleDetails />} />        {/* مسار صفحة التواصل فقط */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>

    <Footer />
  </BrowserRouter>
    </>
  );
}

export default App;