import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default function About() {
  return (
    <section id="about" className="text-gray-400 body-font mt-10 mb-10 px-4 ">
      <div className="container mx-auto  flex space-x-6 px-5 py-2 mb-0 md:flex-row flex-col items-center ">
        <div className="lg:max-w-lg lg:w-full md:w-1/2  mt-10 mb-0 md:mt-0">
          <img
            src="/fano3.png"
            alt="About Me"
            className="object-cover object-center rounded "
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-lg mb-4 mr-5">
            I was born in Venezuela son of Italian father and Venezuelan mother,
            multiculturalism has been part of my daily life , I studied
            journalism specializing in audiovisual content production, career
            that I had the opportunity to put into practice in various
            independent projects.
          </p>
          <p className="text-lg mb-5 mr-5">
            In 2020 I had the opportunity to move to Germany to look for new job
            opportunities and professional growth. since then i have been
            working hard to achieve this, learning the german language, working
            for companies like Amazon and constantly learning new skills that
            will allow me to fully integrate into the german labour market.
          </p>
          <p className="text-lg mb-4 mr-5">
            in 2022 i decided to enrich my knowledge, so i took the opportunity
            to enroll in a ‘Weiterbildung’ full-time Training program, to become
            in a Full Stack Web Developer, my goal is to continue enriching my
            knowledge by putting it into practice in the job market.
          </p>
        </div>
      </div>
    </section>
  );
}
