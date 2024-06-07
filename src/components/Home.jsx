// src/components/Home.jsx
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="text-gray-400 body-font transition-opacity duration-1000 delay-500 easy-out opacity-100"
    >
      <div className="overflow-hidden container mx-auto mt-10 flex space-x-6 px-5 py-2 mb-0 md:flex-row flex-col items-center ">
        <div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm p-6 rounded-lg shadow-lg"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white animate-bounce">
            {t("homeGreeting")}
          </h1>
          <h2 className="titletext text-3xl sm:text-2xl mb-4 font-medium text-rose-500">
            {t("homeTitle")}
          </h2>
          <p className="textintro text-lg mb-8 leading-relaxed text-left">
            {t("homeIntro")}
          </p>
          <div className="flex w-full justify-left gap-5 ">
            <a
              href="#contact"
              className="inline-flex drop-shadow-sm shadow-lg text-white bg-rose-700 bg-opacity-70 backdrop-filter backdrop-blur-lg border-spacing-0.5 py-2 px-6 focus:outline-none hover:bg-rose-600 hover:scale-105 rounded text-1xl transition-transform duration-300 mb-4 "
            >
              {t("workWithMe")}
            </a>
            <a
              href="#projects"
              className="inline-flex drop-shadow-sm shadow-lg text-white bg-rose-700 bg-opacity-70 backdrop-filter backdrop-blur-lg border-spacing-0.5 py-2 px-6 focus:outline-none hover:bg-rose-600 hover:scale-105 rounded text-1xl transition-transform duration-300 mb-4  "
            >
              {t("myProjects")}
            </a>
          </div>
        </div>
        <div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-10 mb-0 md:mt-0 overflow-x-hidden"
          data-aos="fade-left"
        >
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./home1.png"
          />
        </div>
      </div>
    </section>
  );
}
