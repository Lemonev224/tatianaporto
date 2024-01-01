"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      Hello, my name is Tatiana and I am a 22-years old. I have completed a Bachelor's Degree in Modern Languages at the University of Birmingham. Specialising in Spanish, Hispanic History and Cultures, and Catalan.

      I have been extremely fortunate to live in various countries in Europe throughout my childhood, which enabled me to learn several languages. Combining this experience with my qualifications has given me the tools necessary to develop a career in TEFL and work as a translator and proof-reader.

      Currently, I am based in Berlin. I work as an EFL Teacher and Translator, as well as a team member collaborating on the first ever multi-lingual website addressed to parents of children with hearing loss and other developmental diagnoses. 

      I specialise in foreign and second language acquisition, and I pride myself on being adaptable and by exposing my students to a variety of methods and tasks within reading, listening, writing and speaking, the journey towards their language goals is a lot more attainable. 

      </p>
    </motion.section>
  );
}
