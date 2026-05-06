// Project images — RAPMAFEST #9
import rapmafest9Thumb from "../assets/projects/project-1/rapmafest9.png";
import rapmafest9Sc1 from "../assets/projects/project-1/rapmafest9-1.png";
import rapmafest9Sc2 from "../assets/projects/project-1/rapmafest9-2.png";
import rapmafest9Sc3 from "../assets/projects/project-1/rapmafest9-3.png";

// Project images — RAPMAFEST #10
import rapmafest10Thumb from "../assets/projects/project-2/rapmafest10.png";
import rapmafest10Sc1 from "../assets/projects/project-2/rapmafest10-1.png";
import rapmafest10Sc2 from "../assets/projects/project-2/rapmafest10-2.png";
import rapmafest10Sc3 from "../assets/projects/project-2/rapmafest10-3.png";

// Project images — Jelajah Tulang
import jelajahTulangThumb from "../assets/projects/project-3/jelajah-tulang.png";
import jelajahTulangSc1 from "../assets/projects/project-3/jelajah-tulang-1.png";
import jelajahTulangSc2 from "../assets/projects/project-3/jelajah-tulang-2.png";
import jelajahTulangSc3 from "../assets/projects/project-3/jelajah-tulang-3.png";

// Project images — Jelajah Sendi
import jelajahSendiThumb from "../assets/projects/project-4/jelajah-sendi.png";
import jelajahSendiSc1 from "../assets/projects/project-4/jelajah-sendi-1.png";
import jelajahSendiSc2 from "../assets/projects/project-4/jelajah-sendi-2.png";
import jelajahSendiSc3 from "../assets/projects/project-4/jelajah-sendi-3.png";

// Project images — Jelajah Saraf
import jelajahSarafThumb from "../assets/projects/project-5/jelajah-saraf.png";
import jelajahSarafSc1 from "../assets/projects/project-5/jelajah-saraf-1.png";
import jelajahSarafSc2 from "../assets/projects/project-5/jelajah-saraf-2.png";
import jelajahSarafSc3 from "../assets/projects/project-5/jelajah-saraf-3.png";

// Project images — E-Posyandu Si Bunda
import ePosyanduThumb from "../assets/projects/project-6/eposyandu.png";
import ePosyanduSc1 from "../assets/projects/project-6/eposyandu-1.png";
import ePosyanduSc2 from "../assets/projects/project-6/eposyandu-2.png";
import ePosyanduSc3 from "../assets/projects/project-6/eposyandu-3.png";

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  screenshots: string[];
  tags: string[];
  color: string;
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "Landing Page RAPMAFEST #9",
    description: "A dedicated landing page built to introduce the RAPMAFEST #9 event and manage all online ticket sales in one place.",
    longDescription: "A dedicated landing page built to introduce the RAPMAFEST #9 event and manage all online ticket sales in one place. Features include responsive design, ticketing integration, and interactive elements.",
    image: rapmafest9Thumb,
    screenshots: [rapmafest9Sc1, rapmafest9Sc2, rapmafest9Sc3],
    tags: ["HTML", "CSS", "Bootstrap"],
    color: "bg-neo-pink",
    link: "https://landing-page-rapmafest9.vercel.app/",
  },
  {
    title: "Landing Page RAPMAFEST #10",
    description: "A dedicated landing page built to introduce the RAPMAFEST #10 event and manage all online ticket sales in one place.",
    longDescription: "A dedicated landing page built to introduce the RAPMAFEST #10 event and manage all online ticket sales in one place. Features include responsive design, ticketing integration, and interactive elements.",
    image: rapmafest10Thumb,
    screenshots: [rapmafest10Sc1, rapmafest10Sc2, rapmafest10Sc3],
    tags: ["HTML", "CSS", "Bootstrap"],
    color: "bg-neo-teal",
    link: "https://landing-page-rapmafest10.vercel.app/",
  },
  {
    title: "Jelajah Tulang",
    description: "An interactive learning app built with Next.js 16. Designed to make studying the human skeletal system engaging through learning videos, quizzes, and audio for each bone.",
    longDescription:
      "An interactive learning application built with Next.js 16, focusing on educational content about the human skeletal system. The app features high-quality tutorial videos, interactive quizzes for self-assessment, and detailed audio pronunciations for every bone.",
    image: jelajahTulangThumb,
    screenshots: [jelajahTulangSc1, jelajahTulangSc2, jelajahTulangSc3],
    tags: ["Next Js", "Tailwind CSS"],
    color: "bg-neo-yellow",
    link: "https://jelajah-tulang.vercel.app/",
    github: "https://github.com/rwynns/jelajah-tulang",
  },
  {
    title: "Jelajah Sendi",
    description: "A learning website designed as an introduction to human joints. This application uses interactive puzzles and GIF animations of joint movements to create a unique and engaging learning experience.",
    longDescription: "A learning website designed as an introduction to human joints. This application uses interactive puzzles and GIF animations of joint movements to create a unique and engaging learning experience.",
    image: jelajahSendiThumb,
    screenshots: [jelajahSendiSc1, jelajahSendiSc2, jelajahSendiSc3],
    tags: ["React", "Chakra UI"],
    color: "bg-neo-purple",
    link: "https://jelajah-sendi.vercel.app/",
    github: "https://github.com/rwynns/jelajah-sendi",
  },
  {
    title: "Jelajah Saraf",
    description: "A learning website that aims to introduce the human nervous system. This application uses learning videos for material delivery and interactive quizzes to test understanding.",
    longDescription: "A learning website that aims to introduce the human nervous system. This application uses learning videos for material delivery and interactive quizzes to test understanding.",
    image: jelajahSarafThumb,
    screenshots: [jelajahSarafSc1, jelajahSarafSc2, jelajahSarafSc3],
    tags: ["React", "Chakra UI"],
    color: "bg-neo-orange",
    link: "https://jelajah-saraf-sandy.vercel.app/",
    github: "https://github.com/rwynns/jelajah-saraf",
  },
  {
    title: "E-Posyandu Si Bunda",
    description:
      "A digital solution built to modernize child health monitoring by replacing the conventional Posyandu (maternal/child health) book. This web application features direct integration with an IoT digital scale, allowing for the seamless capture of toddler height and weight data to efficiently track their health conditions.",
    longDescription:
      "A digital solution built to modernize child health monitoring by replacing the conventional Posyandu (maternal/child health) book. This web application features direct integration with an IoT digital scale, allowing for the seamless capture of toddler height and weight data to efficiently track their health conditions.",
    image: ePosyanduThumb,
    screenshots: [ePosyanduSc1, ePosyanduSc2, ePosyanduSc3],
    tags: ["IoT", "Laravel", "Next.js", "MySQL"],
    color: "bg-neo-mint",
  },
];
