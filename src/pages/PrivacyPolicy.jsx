import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:py-24">
      <span className="text-body-small font-semibold text-primary-500">{t("footer.privacy")}</span>
      <h1 className="mt-4 text-h1 text-primary-900">{t("legal.privacyTitle")}</h1>
      <div className="mt-8 flex flex-col gap-6 text-body-regular leading-8 text-text-muted">
        <p>{t("legal.privacyIntro")}</p>
        <h2 className="text-h3 text-primary-900">{t("legal.dataTitle")}</h2>
        <p>{t("legal.dataText")}</p>
        <h2 className="text-h3 text-primary-900">{t("legal.contactTitle")}</h2>
        <p>{t("legal.contactText")}</p>
      </div>
    </section>
  );
}

  
