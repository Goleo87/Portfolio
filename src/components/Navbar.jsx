import { FaArrowRight } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import Logo from "/LogoSB.png";

export default function Navbar() {
  return (
    <header
      className="bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-lg md:sticky top-0 z-10"
      data-aos="fade-down"
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex justify-between w-full md:w-auto mb-4 md:mb-0 items-center">
          <img src={Logo} alt="logo" className="w-10 h-10 ml-1" />
          <a
            className="title-font font-medium text-white ml-3 text-3xl"
            href="#home"
          >
            Stefano Borrelli
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center w-full md:w-auto">
          <a
            href="#about"
            className="mr-5 hidden md:block text-2xl hover:text-white transition duration-300 ease-in-out"
          >
            About
          </a>
          <a
            href="#projects"
            className="mr-5 hidden md:block text-2xl hover:text-white transition duration-300 ease-in-out"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="mr-5 hidden md:block text-2xl hover:text-white transition duration-300 ease-in-out"
          >
            Skills
          </a>
        </nav>
        <div className="flex justify-center w-full md:w-auto space-x-4 ">
          <a
            href="#contact"
            className="inline-flex items-center border-0 py-3 px-3 focus:outline-none hover:bg-white/[0.1] hover:scale-105 rounded  transition-transform duration-300 text-white text-2xl"
          >
            Contact
            <FaArrowRight className="w-6 h-6 ml-2 " />
          </a>
          <a
            href="https://github.com/Goleo87"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center   border-0 py-2 px-4 focus:outline-none hover:bg-white/[0.1] hover:scale-105 rounded text-lg transition-transform duration-300 text-white"
          >
            <FaGithub className="w-8 h-8 " />
          </a>
          <a
            href="https://www.linkedin.com/in/stefanoborrelli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border-0 py-2 px-4 focus:outline-none hover:bg-white/[0.1] hover:scale-105 rounded text-lg transition-transform duration-300 text-white"
          >
            <GrLinkedin className="w-8 h-8 " />
          </a>
        </div>
      </div>
    </header>
  );
}
