"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const skills = [
    { name: "English",skill: "Native (C2)", level: 10 },
    { name: "Russian",skill: "Native (C2)", level: 10 },
    { name: "Spanish",skill: "Native (C2)", level: 10 },
    { name: "Catalan",skill: "Upper Intermidiate (B2)", level: 7.5 },
    { name: "French",skill: "Intermidiate (B1)", level: 6 },
    { name: "Swedish",skill: "Elementary (A2)", level: 4 }
  ];


  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
      <div className="mt-40">
      <SectionHeading>Technical skills</SectionHeading>
      <div className="p-4 md:p-8 dark:text-white text-black text-center">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <ul className="space-y-6 md:space-y-8 text-base md:text-lg">
          <li className="flex flex-col items-center gap-2 md:gap-3 bg-[#F3F4F6] dark:bg-[#1D2432] p-6 rounded-lg transition-colors duration-200">
            <span className="font-bold text-2xl">Linear Algebra Course:</span>
            <span className="text-lg text-gray-600 dark:text-gray-400">Codecademy, Issued Jan 2025</span>
          </li>
          
          <li className="flex flex-col items-center gap-2 md:gap-3 bg-[#F3F4F6] dark:bg-[#1D2432] p-6 rounded-lg transition-colors duration-200">
            <span className="font-bold text-2xl">Text Preprocessing Course:</span>
            <span className="text-lg text-gray-600 dark:text-gray-400">Codecademy, Issued Nov 2024</span>
          </li>
          
          <li className="flex flex-col items-center gap-2 md:gap-3 bg-[#F3F4F6] dark:bg-[#1D2432] p-6 rounded-lg transition-colors duration-200">
            <span className="font-bold text-2xl">Machine Learning: Advanced Learning Algorithms:</span>
            <span className="text-lg text-gray-600 dark:text-gray-400">DeepLearning.AI, Issued Oct 2024</span>
            <span className="italic text-lg text-gray-600 dark:text-gray-400">Skills: TensorFlow, Artificial Neural Networks, Model Development</span>
          </li>
          
          <li className="flex flex-col items-center gap-2 md:gap-3 bg-[#F3F4F6] dark:bg-[#1D2432] p-6 rounded-lg transition-colors duration-200">
            <span className="font-bold text-2xl">Learn Python 3 Course:</span>
            <span className="text-lg text-gray-600 dark:text-gray-400">Codecademy, Issued Sep 2024</span>
            <span className="text-lg text-gray-600 dark:text-gray-400">Credential ID: 66E828F09D</span>
            <span className="italic text-lg text-gray-600 dark:text-gray-400">Skills: Python, Computer Science</span>
          </li>
          
          <li className="flex flex-col items-center gap-2 md:gap-3 bg-[#F3F4F6] dark:bg-[#1D2432] p-6 rounded-lg transition-colors duration-200">
            <span className="font-bold text-2xl">Supervised Machine Learning:</span>
            <span className="font-bold text-2xl">Regression and Classification</span>
            <span className="text-lg text-gray-600 dark:text-gray-400">DeepLearning.AI, Stanford University, Issued Sep 2024</span>
            <span className="text-lg text-gray-600 dark:text-gray-400">Credential ID: DJ79GXQYEYY6</span>
            <span className="italic text-lg text-gray-600 dark:text-gray-400">Skills: Python, Machine Learning</span>
          </li>
          
          <li className="flex flex-col items-center gap-2 md:gap-3 bg-[#F3F4F6] dark:bg-[#1D2432] p-6 rounded-lg transition-colors duration-200">
            <span className="font-bold text-2xl">Learn the Command Line Course:</span>
            <span className="text-lg text-gray-600 dark:text-gray-400">Codecademy, Issued Aug 2024</span>
          </li>
          
          <li className="flex flex-col items-center gap-2 md:gap-3 bg-[#F3F4F6] dark:bg-[#1D2432] p-6 rounded-lg transition-colors duration-200">
            <span className="font-bold text-2xl">180 Hour Level 5 TEFL Certificate Course (Highfield):</span>
            <span className="text-lg text-gray-600 dark:text-gray-400">Premier TEFL, Issued Jan 2023</span>
          </li>
        </ul>
      </div>
    </div>
    </div>
      <div className="mt-40">
      <SectionHeading>Language skills</SectionHeading>
      <div className="flex flex-col gap-6 items-center text-white  p-8 rounded-lg">
        {skills.map((skill, index) => (
          <div key={index} className="w-full flex items-center gap-4">
            <div className="w-32 text-left text-black dark:text-white ">{skill.name} <br/>{skill.skill}</div>
            <div className="relative flex-1 h-8">
              {/* Background bar */}
              <div className="absolute w-full h-full opacity-20 bg-white-300 border-2 border-black bg-white-300 border-3px dark:bg-gray-300" />
              {/* Foreground bar */}
              <motion.div 
                className="absolute h-full bg-black dark:bg-gray-200"
                initial={{ width: 0 }}
                animate={{ width: `${(skill.level / 10) * 100}%` }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
              {/* Score text */}
              <div className={`absolute right-0 top-1/2 -translate-y-1/2 pr-2 text-sm 
    ${skill.level === 10 ? 'text-white dark:text-black' : 'text-black dark:text-white'}`}>
                {skill.level * 10}%
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
