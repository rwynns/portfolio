import raiLogo from "../assets/companies/RAI.png";
import tsLogo from "../assets/companies/TS.png";

export interface Experience {
  id: string;
  role: string;
  company: string;
  logo: string;
  type: string;
  period: string;
  duration: string;
  location: string;
  workMode: string;
  description: string;
  skills: string[];
  logoBackground: string;
  accentColor: string;
  isCurrent?: boolean;
}

export const experiences: Experience[] = [
  {
    id: "rumah-atsiri",
    role: "Fullstack Developer",
    company: "Rumah Atsiri Indonesia",
    logo: raiLogo,
    type: "Full-time",
    period: "May 2026 - Present",
    duration: "4 mos",
    location: "Tawangmangu, Central Java, Indonesia",
    workMode: "On site",
    description:
      "Bertanggung jawab sebagai Fullstack Developer dalam merancang, merintis, dan memelihara aplikasi web serta ekosistem sistem digital Rumah Atsiri Indonesia untuk mengoptimalkan operasional dan pengalaman pengguna.",
    skills: ["Web Development", "Software Development", "Fullstack Engineering"],
    logoBackground: "bg-[#fff7ed]",
    accentColor: "bg-neo-pink",
    isCurrent: true,
  },
  {
    id: "tiga-serangkai",
    role: "Fullstack Website Developer",
    company: "PT. Tiga Serangkai Inti Corpora",
    logo: tsLogo,
    type: "Internship",
    period: "Sep 2024 - Jan 2025",
    duration: "5 mos",
    location: "Surakarta, Central Java, Indonesia",
    workMode: "On-site",
    description:
      "Sebagai Fullstack Developer Intern, saya bertanggung jawab dalam mengembangkan Document Approval Management System untuk mendigitalisasi dan mempercepat alur birokrasi dokumen perusahaan.",
    skills: ["Pengembangan Web", "Desain web", "Laravel", "React", "Inertia.js"],
    logoBackground: "bg-white",
    accentColor: "bg-neo-purple",
    isCurrent: false,
  },
];
