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
      I’m Tatiana, a Language Sciences MSc student with a deep passion for computational
      linguistics and language technology. While my dissertation focuses on speech emotion
      recognition (SER), my broader interest lies in exploring the challenges posed by noisy data
      in language technology. I’m particularly curious about how large language models (LLMs)
      perform in noisy environments and how they can be adapted for low-resource languages. As
      humans, we often communicate imperfectly, and I believe that developing robust systems to
      handle this linguistic noise will help advance language technologies.
      </p> 
      <div className="block mt-40 !important">
      <SectionHeading>Research Interests</SectionHeading>
      <p className="mb-3">My research 
      interests are centred around natural language processing (NLP), machine
      learning, and computational linguistics, with a strong focus on working with noisy data. I am
      particularly interested in how LLMs behave under noisy conditions and how they can be
      used for classification tasks in low-resource languages. My proposed research explores the
      potential of KB-BERT for handling noisy Swedish text, investigating techniques such as
      adversarial training to improve performance in environments with typographical errors,
      informal language, and phonetic misspellings. I am also keen to explore how NLP solutions
      can be scaled and adapted for low-resource languages, aiming to create systems that can
      handle both linguistic noise and limited resources effectively. Ultimately, I want to contribute
      to building language technologies that are more resilient and adaptable to the imperfections
      of real-world communication.</p>
      </div>
    </motion.section>

  );
}
