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
    title: "120-Hour TEFL certification",
    location: "UK",
    description:
      "                                                                                                                                          ",
    icon: React.createElement(TbLicense),
    date: "2019",
  },
  {
    title: "Student Representative",
    location: "Birmingham, UK",
    description:
      "I was a student representative at The University of Birmingham.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2021",
  },
  {
    title: "30-Hour Teaching IELTS Exam Preparation Course",
    location: "UK",
    description:
      "                                                                                                                 ",
    icon: React.createElement(TbLicense),
    date: "2022",
  },
  {
    title: "Volunteer Tutor at Tutor the Nation ",
    location: "UK",
    description:
      "I firmly believe in the provision of equal education opportunities across society. Therefore, I started volunteering for Tutor the Nation, an organisation supporting students from unprivileged backgrounds throughout their GCSEs and A-levels. Since then, I have had two tutees achieve their desired grades that have allowed them to get into the college/university of their choice.",
    icon: React.createElement(PiChalkboardTeacher),
    date: "2022-2023",
  },
  {
    title: "University of Birmingham",
    location: "Birmingham, UK",
    description:
      "1st Class Honours Degree with Distinction in Spoken Spanish",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2023",
  },
  {
    title: "180-Hour Level 5 TEFL (Highfield) Certification",
    location: "UK",
    description:
      "                                                                                                       ",
    icon: React.createElement(TbLicense),
    date: "2023",
  },
  {
    title: "Freelance Translator ",
    location: "UK",
    description:
      "Language skills are an inevitable result of my multicultural upbringing. Enabling me to cultivate translation skills within my personal life, which I then transported into my career. I have worked as a translator and proof-reader, mainly working with non-fiction texts ranging from lengths of 10 pages to a book with a 40,000-word count.",

    icon: React.createElement(CgWorkAlt),
    date: "2019-present",
  },
  {
    title: "EFL/ESL Teacher ",
    location: "UK",
    description:
      "I have completed a total of over 500-hours teaching online via the digital learning platform Preply. Although using a digital platform is often frowned upon, it has allowed me to transform traditional teaching methodologies, tailoring my lesson plans to the individual needs of each student. Thus, propelling their learning journey. ",
    icon: React.createElement(PiChalkboardTeacher),
    date: "2021-present",
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
  "Team Leadership",
  "Translation and Proof-reading",
  "Linguistics",
  "TEFL",
  "Art and Design",
  "French",
  "English",
  "Russian",
  "Spanish",
  "Catalan",
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
