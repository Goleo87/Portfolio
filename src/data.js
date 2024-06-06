// src/data.js
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaWindows, FaLinux, FaPhotoVideo, FaPalette, FaLightbulb, FaTools } from 'react-icons/fa';
import { SiAdobecreativecloud } from "react-icons/si";

export const skills = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "MongoDB", icon: FaDatabase, color: "#47A248" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "Windows", icon: FaWindows, color: "#0078D6" },
  { name: "Linux", icon: FaLinux, color: "#FCC624" },
  { name: "Adobe Creative ", icon: SiAdobecreativecloud, color: "#FF0000"},
  { name: "Video Editing", icon: FaPhotoVideo, color: "#FF9A00" },
  { name: "Graphic Design", icon: FaPalette, color: "#4CAF50" },
];



export const projects = [
  {
    title: "Palazzo Mazzioti Booking App",
    subtitle: "React , CSS and Javascript",
    description:
      "Applicazione per la prenotazione di camere in un hotel di lusso.",
    image: "/Palazzo.png",
    link: "https://goleo87.github.io/PalazzoMazziotiBookingApp/",
  },
  {
    title: "Picker App",
    subtitle: "React, CSS and Javascript",
    description:
      "Application that allows you to pick a random item from a list.",
    image: "./pickerapp.png",
    link: "https://random-picker-app-rgm2.onrender.com/",
  },
  {
    title: "Diario del Hostil",
    subtitle: "HTML and CSS",
    description:
      "Website of the podcast Diario del Hostil.",
    image: "./iconopicyoutube.jpg",
    link: "https://goleo87.github.io/diariodelhostil/intro.html",
  },
  {
    title: "Stefhano Music",
    subtitle: "React, Javascript and CSS",
    description:
      "Professional website of the musician Stefhano.",
    image: "./Stefhano.png",
    link: "https://stefhanomusic.onrender.com/",
  },
];




