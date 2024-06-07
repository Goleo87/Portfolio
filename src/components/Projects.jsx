import { projects } from "../data";
import { CodeIcon } from "@heroicons/react/solid";

export default function Projects() {
  return (
    <section
      id="projects"
      className="text-gray-400 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm p-6 rounded-lg shadow-lg"
    >
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-20 h-20 mb-5" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects in Development
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              target="_blank"
              rel="noopener noreferrer"
              className="w-60 h-60" // Set width and height to make squares
            >
              <div className="relative w-full h-full">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full rounded shadow-lg object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full h-full bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-lg opacity-0 hover:opacity-100 transition-opacity duration-300 transform ">
                  <h2 className="tracking-widest text-sm title-font font-large text-rose-500 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
