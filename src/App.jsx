import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar'; // تأكد من مسار الاستيراد

function App() {
  const { i18n } = useTranslation();

  // تغيير اتجاه الصفحة بناءً على اللغة الحالية
  useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (  
      <>
      <Navbar />
      <main className="p-8 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">محتوى الموقع هنا</h1>
      </main>

  </>
  );
}

export default App;