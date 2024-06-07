// src/components/About.jsx
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

AOS.init();

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="text-gray-400 body-font mt-30 mb-10 px-4 scroll-my-40 "
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-x-6 px-5 py-2 mb-0 ">
        <div className="w-full md:w-1/2 lg:max-w-lg mt-10 mb-0 md:mt-0 mx-auto">
          <img
            src="/fano3.png"
            alt={t("aboutMeImgAlt")}
            className="object-cover object-center rounded w-full shadow-lg"
          />
        </div>
        <div className="text-gray-300 w-full md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">{t("aboutMe")}</h2>
          <p className="text-lg mb-4 text-left">{t("aboutParagraph1")}</p>
          <p className="text-lg mb-5 text-left">{t("aboutParagraph2")}</p>
          <p className="text-lg mb-4 text-left">{t("aboutParagraph3")}</p>
        </div>
      </div>
    </section>
  );
}
