import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import AboutUs from "./sections/AboutUs";
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
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
