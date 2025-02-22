"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  const certifications = [
    {
      title: "Linear Algebra Course",
      organization: "Codecademy",
      date: "Jan 2025"
    },
    {
      title: "Text Preprocessing Course",
      organization: "Codecademy",
      date: "Nov 2024"
    },
    {
      title: "Machine Learning: Advanced Learning Algorithms",
      organization: "DeepLearning.AI",
      date: "Oct 2024",
      skills: "TensorFlow, Artificial Neural Networks, Model Development"
    },
    {
      title: "Learn Python 3 Course",
      organization: "Codecademy",
      date: "Sep 2024",
      credentialId: "66E828F09D",
      skills: "Python, Computer Science"
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      organization: "DeepLearning.AI, Stanford University",
      date: "Sep 2024",
      credentialId: "DJ79GXQYEYY6",
      skills: "Python, Machine Learning"
    },
    {
      title: "Learn the Command Line Course",
      organization: "Codecademy",
      date: "Aug 2024"
    },
    {
      title: "180 Hour Level 5 TEFL Certificate Course (Highfield)",
      organization: "Premier TEFL",
      date: "Jan 2023"
    }
  ];

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
         <div className="mt-40">
            <SectionHeading>Certifications</SectionHeading>
            <div className="min-h-screen text-gray-900 dark:text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-[#F3F4F6] dark:bg-[#1D2432] p-6 rounded-lg transition-colors duration-200"
            >
              <h2 className="text-xl font-semibold mb-2">{cert.title}</h2>
              <p className="text-gray-600 dark:text-gray-400">
                {cert.organization}, Issued {cert.date}
              </p>
              {cert.credentialId && (
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Credential ID: {cert.credentialId}
                </p>
              )}
              {cert.skills && (
                <p className="text-gray-600 dark:text-gray-400 mt-1 italic">
                  Skills: {cert.skills}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    </section>
  );
}
