import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import AboutUs from "./sections/AboutUs";
import PartnersTestimonials from "./sections/PartnersTestimonials";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import FreeConsultation from "./sections/FreeConsultation";
import Blog from "./sections/Blog";
import Footer from "./sections/Footer";
import Contact from "./pages/Contact";
import ArticleDetails from "./pages/ArticleDetails";
import ProjectDetails from './pages/ProjectDetails';
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Bobble from "./components/Bobbles";
import AboutUsPage from "./pages/AboutUsPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetails from "./pages/ServiceDetails";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";


function App() {
  const { i18n } = useTranslation();

  // تغيير اتجاه الصفحة والخط بناءً على اللغة الحالية
  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Bobble/>

        <main>
          <Routes>
            {/* مسار الصفحة الرئيسية: يضم كل الأقسام */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <PartnersTestimonials />
                  <AboutUs />
                  <Services />
                  <Portfolio />
                  <FreeConsultation />
                  <Blog />
                </>
              }
            />
            <Route path="/blog/:id" element={<ArticleDetails />} />
            <Route path="/portfolio/:id" element={<ProjectDetails />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetails />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
