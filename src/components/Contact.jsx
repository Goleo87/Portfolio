// src/components/Contact.jsx
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="relative">
      <div className="container py-10 mx-auto lg:w-1/2 px-6 mt-4 lg:mt-0 text-center lg:text-center">
        <h1 className="text-5xl font-medium text-white mb-4">{t('contact')}</h1>
        <h2 className="text-lg leading-relaxed mb-8">{t('contactIntro')}</h2>
        <span>
          {t('contactEmailLabel')}:{" "}
          <a
            href="mailto:stefano.borrelli@gmail.com"
            className="text-rose-500 leading-relaxed text-xl mb-8 hover:text-rose-100 transition duration-300 ease-in-out"
          >
            stefano.borrelli@gmail.com
          </a>
        </span>
        <h1 className="text-xl">
          © 2024 Stefano Borrelli. {t('allRightsReserved')}
        </h1>
      </div>
    </section>
  );
}
