export default function Home() {
  return (
    <section
      id="home"
      className="text-gray-400 body-font transition-opacity duration-1000  delay-500 easy-out opacity-100"
      
    >
      <div className=" overflow-hidden container mx-auto  flex space-x-6 px-5 py-2 mb-0 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm p-6 rounded-lg shadow-lg" data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white animate-bounce">
            Hi, I am Stefano.
          </h1>
          <h2 className="title-font sm:text-2xl text-xl mb-4 font-medium text-rose-500">
            <br className="hidden lg:inline-block" />
            Frontend Web Developer & Audiovisual Creator
          </h2>
          <p className="mb-8 leading-relaxed">
            I am a creative person with a passion for technology and art. I have
            a background in Audiovisual Production, which has allowed me to work
            on various projects such as short films, music videos, and podcasts.
            Recently, I have been focusing on Web Development projects during my
            studies at the Digital Career Institute in Germany. I am now seeking
            more opportunities to work, learn, and grow in the tech industry.
          </p>
          <div className="flex space-x-2 justify-center flex-wrap">
            <a
              href="#contact"
              className="inline-flex text-white bg-rose-700 bg-opacity-70 backdrop-filter backdrop-blur-lg border-spacing-0.5 py-2 px-6 focus:outline-none hover:bg-rose-600 hover:scale-105 rounded text-lg transition-transform duration-300 mb-4 md:mb-0 md:mr-4"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="inline-flex text-white bg-rose-700 bg-opacity-70 backdrop-filter backdrop-blur-lg border-spacing-0.5 py-2 px-6 focus:outline-none hover:bg-rose-600 hover:scale-105 rounded text-lg transition-transform duration-300 mb-4 md:mb-0 md:mr-4"
            >
              My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-10 mb-0 md:mt-0 overflow-x-hidden"data-aos="fade-left">
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
