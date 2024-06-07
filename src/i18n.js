
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "home": "Home",
            "contact": "Contact",
            "projects": "Projects",
            "skills": "Skills",
            "about": "About",
            "aboutMe": "About Me",
            "aboutMeImgAlt": "About Me",
            "aboutParagraph1": "I was born in Venezuela son of Italian father and Venezuelan mother, multiculturalism has been part of my daily life, I studied journalism specializing in audiovisual content production, a career that I had the opportunity to put into practice in various independent projects.",
            "aboutParagraph2": "In 2020 I had the opportunity to move to Germany to look for new job opportunities and professional growth. Since then, I have been working hard to achieve this, learning the German language, working for companies like Amazon, and constantly learning new skills that will allow me to fully integrate into the German labor market.",
            "aboutParagraph3": "In 2022, I decided to enrich my knowledge, so I took the opportunity to enroll in a ‘Weiterbildung’ full-time training program, to become a Full Stack Web Developer. My goal is to continue enriching my knowledge by putting it into practice in the job market.",
            "homeGreeting": "Hi, I am Stefano",
            "homeTitle": "Frontend Web Developer & Audiovisual Creator",
            "homeIntro": "I am a creative person with a passion for technology and art. I have a background in Audiovisual Production, which has allowed me to work on various projects such as short films, music videos, and podcasts. Recently, I have been focusing on Web Development projects during my studies at the Digital Career Institute in Germany. I am now seeking more opportunities to work, learn, and grow in the tech industry.",
            "workWithMe": "Work With Me",
            "myProjects": "My Projects",
            "projectsTitle": "Projects in Development",
            "projectImgAlt": "Project Image",
            "contact": "Contact",
            "contactIntro": "Get in touch via Email",
            "allRightsReserved": "All rights reserved",
            "skillsTitle": "Skills & Technologies"

        }
    },
    es: {
        translation: {
            "home": "Inicio",
            "contact": "Contacto",
            "projects": "Proyectos",
            "skills": "Habilidades",
            "about": "Sobre mí",
            "aboutMe": "Sobre mí",
            "aboutMeImgAlt": "Sobre mí",
            "aboutParagraph1": "Nací en Venezuela hijo de padre italiano y madre venezolana, el multiculturalismo ha sido parte de mi vida diaria, estudié periodismo especializándome en la producción de contenido audiovisual, una carrera que tuve la oportunidad de poner en práctica en varios proyectos independientes.",
            "aboutParagraph2": "En 2020 tuve la oportunidad de mudarme a Alemania para buscar nuevas oportunidades laborales y crecimiento profesional. Desde entonces, he estado trabajando arduamente para lograrlo, aprendiendo el idioma alemán, trabajando para empresas como Amazon, y aprendiendo constantemente nuevas habilidades que me permitirán integrarme completamente en el mercado laboral alemán.",
            "aboutParagraph3": "En 2022, decidí enriquecer mis conocimientos, así que aproveché la oportunidad para inscribirme en un programa de formación a tiempo completo 'Weiterbildung', para convertirme en Desarrollador Web Full Stack. Mi objetivo es seguir enriqueciendo mis conocimientos poniéndolos en práctica en el mercado laboral.",
            "homeGreeting": "Hola, soy Stefano",
            "homeTitle": "Desarrollador Web Frontend & Creador Audiovisual",
            "homeIntro": "Soy una persona creativa con pasión por la tecnología y el arte. Tengo experiencia en Producción Audiovisual, lo que me ha permitido trabajar en varios proyectos como cortometrajes, videos musicales y podcasts. Recientemente, me he estado enfocando en proyectos de Desarrollo Web durante mis estudios en el Digital Career Institute en Alemania. Ahora estoy buscando más oportunidades para trabajar, aprender y crecer en la industria tecnológica.",
            "workWithMe": "Trabaja conmigo",
            "myProjects": "Mis Proyectos",
            "projectsTitle": "Proyectos en Desarrollo",
            "projectImgAlt": "Imagen del Proyecto",
            "contact": "Contacto",
            "contactIntro": "Ponte en contacto a través del correo electrónico",
            "allRightsReserved": "Todos los derechos reservados",
            "skillsTitle": "Habilidades y Tecnologías"
        }
    },
    de: {
        translation: {
            "home": "Startseite",
            "contact": "Kontakt",
            "projects": "Projekte",
            "skills": "Fähigkeiten",
            "about": "Über mich",
            "aboutMe": "Über mich",
            "aboutMeImgAlt": "Über mich",
            "aboutParagraph1": "Ich wurde in Venezuela als Sohn eines italienischen Vaters und einer venezolanischen Mutter geboren. Multikulturalismus war Teil meines täglichen Lebens. Ich habe Journalismus mit Spezialisierung auf audiovisuelle Inhaltserstellung studiert, eine Karriere, die ich in verschiedenen unabhängigen Projekten praktizieren konnte.",
            "aboutParagraph2": "Im Jahr 2020 hatte ich die Gelegenheit, nach Deutschland zu ziehen, um neue Arbeitsmöglichkeiten und berufliches Wachstum zu suchen. Seitdem arbeite ich hart daran, dies zu erreichen, lerne die deutsche Sprache, arbeite für Unternehmen wie Amazon und lerne ständig neue Fähigkeiten, die es mir ermöglichen, mich vollständig in den deutschen Arbeitsmarkt zu integrieren.",
            "aboutParagraph3": "Im Jahr 2022 entschied ich mich, mein Wissen zu erweitern, und nutzte die Gelegenheit, an einem Vollzeit-Weiterbildungsprogramm teilzunehmen, um Full Stack Web Developer zu werden. Mein Ziel ist es, mein Wissen weiterhin zu erweitern und es in der Praxis auf dem Arbeitsmarkt anzuwenden.",
            "homeGreeting": "Hallo, ich bin Stefano",
            "homeTitle": "Frontend Web Entwickler & Audiovisueller Schöpfer",
            "homeIntro": "Ich bin eine kreative Person mit Leidenschaft für Technologie und Kunst. Ich habe einen Hintergrund in der Audiovisuellen Produktion, die es mir ermöglicht hat, an verschiedenen Projekten wie Kurzfilmen, Musikvideos und Podcasts zu arbeiten. Kürzlich habe ich mich während meines Studiums am Digital Career Institute in Deutschland auf Webentwicklungsprojekte konzentriert. Jetzt suche ich nach weiteren Möglichkeiten, in der Tech-Industrie zu arbeiten, zu lernen und zu wachsen.",
            "workWithMe": "Arbeite mit mir",
            "myProjects": "Meine Projekte",
            "projectsTitle": "Projekte in Entwicklung",
            "projectImgAlt": "Projektbild",
            "contact": "Kontakt",
            "contactIntro": "Kontaktieren Sie uns per E-Mail",
            "allRightsReserved": "Alle Rechte vorbehalten",
            "skillsTitle": "Fähigkeiten & Technologien"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // default language
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;

