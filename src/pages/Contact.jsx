import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
    <p>{t('contact.titele')}</p>

    </>
  )
}

export default Contact