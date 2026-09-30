import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();
  const location = useLocation();

  // خيارات الخدمات بتيجي من ملف الترجمة (نفس سيكشن الحجز)
  const serviceOptions = t('freeConsultation.options', { returnObjects: true });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  useEffect(() => {
    if (location.state && location.state.selectedService) {
      setFormData((prev) => ({
        ...prev,
        service: location.state.selectedService,
      }));
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // رسالة النجاح من ملف الترجمة
    alert(t('contactPage.form.successMessage'));
  };

  return (
    <main className="w-full min-h-screen bg-bg-secondary px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        
        {/* عنوان الصفحة */}
        <div className="mb-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-h2 text-primary-900 mb-4"
          >
            {t('contactPage.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-body-regular text-text-muted max-w-2xl mx-auto"
          >
            {t('contactPage.subtitle')}
          </motion.p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          
          {/* معلومات التواصل */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-bg-primary p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-primary-900 mb-6">{t('contactPage.contactInfo')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-50 p-3 rounded-full text-primary-500">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted mb-1">{t('contactPage.email')}</p>
                    <a href="mailto:hello@factreno.com" className="text-primary-900 font-semibold hover:text-primary-500 transition-colors">
                      factreno@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-50 p-3 rounded-full text-primary-500">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted mb-1">{t('contactPage.phone')}</p>
                    <a href="tel:+201234567890" className="text-primary-900 font-semibold hover:text-primary-500 transition-colors" dir="ltr">
                    01024676572
                    </a>

                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-50 p-3 rounded-full text-primary-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted mb-1">{t('contactPage.address')}</p>
                    <p className="text-primary-900 font-semibold">
                      {t('contactPage.addressValue')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* نموذج التواصل */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 bg-bg-primary p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* الاسم */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-primary-900">{t('contactPage.form.nameLabel')}</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t('contactPage.form.namePlaceholder')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                  />
                </div>

                {/* رقم الهاتف */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-primary-900">{t('contactPage.form.phoneLabel')}</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+20 123 456 7890"
                    dir="ltr"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-start"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* البريد الإلكتروني */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-primary-900">{t('contactPage.form.emailLabel')}</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@domain.com"
                    dir="ltr"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-start"
                  />
                </div>

                {/* نوع الخدمة */}
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-semibold text-primary-900">{t('contactPage.form.serviceLabel')}</label>
                  <select 
                    id="service" 
                    name="service" 
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                  >
                    <option value="" disabled>{t('contactPage.form.serviceDefault')}</option>
                    {Array.isArray(serviceOptions) && serviceOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>{opt}</option>
                    ))}
                    <option value="other">{t('contactPage.form.serviceOther')}</option>
                  </select>
                </div>
              </div>

              {/* تفاصيل المشروع */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-primary-900">{t('contactPage.form.messageLabel')}</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder={t('contactPage.form.messagePlaceholder')}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-y"
                ></textarea>
              </div>

              {/* زر الإرسال */}
              <button 
                type="submit" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-8 py-3.5 text-body-regular font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                {t('contactPage.form.submitBtn')}
                <Send size={18} className="rtl:-scale-x-100" />
              </button>

            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}