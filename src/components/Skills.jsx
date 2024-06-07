import { ChipIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaWindows,
  FaLinux,
  FaPhotoVideo,
  FaPalette,
} from "react-icons/fa";
import { SiAdobecreativecloud } from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "MongoDB", icon: FaDatabase, color: "#47A248" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "Windows", icon: FaWindows, color: "#0078D6" },
  { name: "Linux", icon: FaLinux, color: "#FCC624" },
  { name: "Adobe Creative ", icon: SiAdobecreativecloud, color: "#FF0000" },
  { name: "Video Editing", icon: FaPhotoVideo, color: "#FF9A00" },
  { name: "Graphic Design", icon: FaPalette, color: "#4CAF50" },
];

export default function Skills() {
  const { t } = useTranslation();
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    setShowSkills(true);
  }, []);

  return (
    <section
      id="skills"
      className="text-gray-400 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm p-6 mb-4 rounded-lg shadow-lg transition-opacity duration-1000 delay-500 ease-out opacity-100 mx-0 justify-center"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="5000"
    >
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="mx-auto inline-block w-20 h-20 mb-5" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            {t("skillsTitle")}
          </h1>
        </div>
        <div className="flex flex-wrap justify-center -mx-2">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className={`p-2 w-1/2 sm:w-1/4 md:w-1/6 lg:w-1/8 transition duration-500 transform ${
                  showSkills
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } delay-${index * 100}`}
              >
                <div className="bg-transparent rounded flex flex-col items-center p-4 h-full text-center">
                  <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
                    <div className="absolute inset-0 bg-white opacity-10 rounded-lg backdrop-filter backdrop-blur-lg transition duration-300 hover:scale-105"></div>
                    <IconComponent
                      className="w-20 h-20 text-white transition duration-300"
                      style={{ color: skill.color }}
                    />
                  </div>
                  <span className="title-font font-medium text-white">
                    {skill.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
