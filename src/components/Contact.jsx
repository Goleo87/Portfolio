// src/components/Contact.jsx
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="relative scroll-mt-7">
      <div className="container py-10 mx-auto lg:w-1/2 px-6 mt-4 lg:mt-0 text-center lg:text-center">
        <h1 className="text-3xl font-medium text-white mb-12">{t("contact")}</h1>
        <h2 className="text-lg leading-relaxed mb-2">{t("contactIntro")}</h2>
        <a
          href="mailto:stefano.borrelli@gmail.com"
          className="text-rose-500 leading-relaxed text-xl hover:text-rose-100 transition duration-300 ease-in-out"
        >stefano.borrelli@gmail.com</a>

        <h1 className="text-xl mt-16 mb-0">
          © 2024 Stefano Borrelli. {t("allRightsReserved")}
        </h1>
      </div>
    </section>
  );
}
