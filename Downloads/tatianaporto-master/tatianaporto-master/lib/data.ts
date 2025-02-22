import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { PiChalkboardTeacher } from "react-icons/pi";
import { TbLicense } from "react-icons/tb";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BA in Modern Languages ",
    location: "University of Birmingham, Birmingham, UK ",
    description:
      "This degree provided me with a strong foundation in linguistics and language proficiency, particularly in Spanish, while fostering my interest in the application of language technology. My studies included both theoretical and practical aspects of language, enhancing my communication skills and understanding of language acquisition, key elements that now inform my research in computational linguistics and machine learning applications.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2023",
  },
  {
    title: "Volunteer Tutor ",
    location: "Tutor the Nation, UK",
    description:
      "Driven by my belief in equal educational opportunities, I volunteered with Tutor the Nation to support students from underprivileged backgrounds during their GCSEs and A-levels. Through tailored tutoring, I helped several students achieve their desired grades, enabling them to secure places at their chosen colleges or universities. This experience enhanced my ability to communicate complex concepts effectively and reinforced my commitment to making education accessible to all.",

    icon: React.createElement(PiChalkboardTeacher),
    date: "2022-2023",
  },
  {
    title: "EFL/ESL Teacher",
    location: "Preply, UK",
    description:
      "With nearly 1000 hours of online teaching experience through Preply, I have leveraged digital platforms to revolutionise traditional teaching methods. By tailoring lessons to the individual needs of students, I’ve worked with a diverse range of learners from various cultural backgrounds and proficiency levels. Managing my own teaching business, I have honed skills in marketing, client relationship management, and tech-driven education, ensuring I effectively attract and retain students while delivering personalised, high-quality learning experiences.",
    icon: React.createElement(PiChalkboardTeacher),
    date: "2021–Present",
  },
  {
    title: "MSc in Language Sciences",
    location: "University College London (UCL)",
    description:
      "At UCL, I am specialising in Technology of Language and Speech, with a focus on computational linguistics and machine learning applications. My coursework and research have deepened my understanding of language processing, speech technologies, and AI-driven linguistic models, preparing me for a future career at the intersection of language science and technology. Through hands-on projects, I’ve applied my theoretical knowledge to real-world challenges in speech emotion recognition and NLP.",
    icon: React.createElement(LuGraduationCap),
    date: "2024-2025",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Computational Linguistics",
  "Machine Learning & AI",
  "Natural Language Processing (NLP)",
  "Speech Emotion Recognition (SER)",
  "Language Technology",
  "Data Analysis",
  //"MongoDB",
  //"Redux",
  //"GraphQL",
  //"Apollo",
  //"Express",
  //"PostgreSQL",
 // "Python",
 // "Django",
  //"Framer Motion",
] as const;
