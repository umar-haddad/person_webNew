import React, { useState } from "react";
import "../../assets/certifCard.css";

// importing skills Img
import canva from "../../../public/img/canva.png";
import figma from "../../../public/img/figma.png";
import excel from "../../../public/img/excel.png";
import word from "../../../public/img/word.png";
import powerpoint from "../../../public/img/powerpoint.png";
import css from "../../../public/img/css.png";
import tailwind from "../../../public/img/tailwind.png";
import bootstrap from "../../../public/img/bootstrap.png";
import html from "../../../public/img/html.png";
import javascript from "../../../public/img/javascript.png";
import react from "../../../public/img/react.png";
import node from "../../../public/img/node.png";
import express from "../../../public/img/express.png";
import github from "../../../public/img/github.png";
import php from "../../../public/img/php.png";
import laravel from "../../../public/img/laravel.png";
import mysql from "../../../public/img/mysql.png";
import mongodb from "../../../public/img/mongodb.png";

// certificate importing
import img1 from "../../../public/img/certificated/basic_computer.png";
import img2 from "../../../public/img/certificated/beginner_1_computer.jpg";
import img3 from "../../../public/img/certificated/computer_beginner2.png";
import img4 from "../../../public/img/certificated/computer_beginner3.png";
import img5 from "../../../public/img/certificated/intermediate_computer.png";
import img6 from "../../../public/img/certificated/graphic_design.png";
import img7 from "../../../public/img/certificated/coding_ycab.png";
import img8 from "../../../public/img/certificated/career_preparation.png";
import img10 from "../../../public/img/certificated/penghargaan_skilvul.png";
import img11 from "../../../public/img/certificated/participant_skilvul.png";
import img12 from "../../../public/img/certificated/sertifikat_web_programming_PPKDJP.jpg";
import img13 from "../../../public/img/certificated/fullstack_skilvul.png";

function Certificate({ isDark }) {
  const certificates = [
    {
      image: img1,
      skill: [word, excel, powerpoint],
      name: "Basic Computer",
      list: [
        "how to create data from word and excel level 1",
        "Basic file operations",
        "Typing and analysis skills, as well as learning some of the features in it",
      ],
    },
    {
      image: img2,
      skill: [word, excel, powerpoint],
      name: "Beginner Computer 1",
      list: [
        "how to create data from word and excel level 1",
        "Formatting documents",
        "Typing and analysis skills, as well as learning some of the features in it",
      ],
    },
    {
      image: img3,
      skill: [word, excel, powerpoint],
      name: "Beginner Computer 2",
      list: [
        "How to make data from Word and Excel a little more expert",
        "Creating simple spreadsheets",
        "Typing and analysis skills, as well as learning some of the features in it",
      ],
    },
    {
      image: img4,
      skill: [word, excel, powerpoint],
      name: "Beginner Computer 3",
      list: [
        "how to make data from word and excel more expert and final assignment to make real project",
        "Designing slides and presentations",
        "Typing and analysis skills, as well as learning some of the features in it",
      ],
    },
    {
      image: img5,
      skill: [word, excel, powerpoint],
      name: "Intermediate Computer",
      list: [
        "Advanced Word & Excel techniques",
        "Efficient file management",
        "System settings and controls",
      ],
    },
    {
      image: img6,
      skill: [canva],
      name: "Graphic Design",
      list: [
        "Basic graphic design principles",
        "Using Canva and other tools",
        "Creating marketing materials",
      ],
    },
    {
      image: img7,
      skill: [html, css, javascript],
      name: "Coding with YCAB Foundation",
      list: [
        "Introduction to HTML, CSS, JS",
        "Making simple web pages",
        "Basic programming logic",
      ],
    },
    {
      image: img8,
      name: "Career Preparation",
      list: [
        "Resume and cover letter creation",
        "Interview preparation",
        "Workplace communication skills",
      ],
    },
    {
      image: img10,
      skill: [css, html, javascript],
      name: "Skilvul Award",
      list: [
        "Outstanding participant award for taking part in the competition and entering the top 10",
        "Completion of several projects",
        "Active engagement in class",
      ],
    },
    {
      image: img11,
      name: "Participant Skilvul",
      list: [
        "Attended web development bootcamp",
        "Completed assignments and quizzes",
        "Collaborated in peer reviews",
      ],
    },
    {
      image: img12,
      skill: [
        html,
        css,
        php,
        javascript,
        react,
        bootstrap,
        tailwind,
        laravel,
        mysql,
      ],
      name: "Web Programming PPKD Jakarta Pusat",
      list: [
        "Comprehensive web programming training held by the Central Jakarta Regional Job Training Center",
        "official in nature and held by the local government",
        "create a website depending on industry needs and testing at the end of the website creation for BNSP certification",
      ],
    },
    {
      image: img13,
      skill: [
        html,
        css,
        javascript,
        react,
        node,
        express,
        github,
        bootstrap,
        figma,
        mongodb,
      ],
      name: "Fullstack Web Development Skilvul",
      list: [
        "Bootcamp from Skillvul can get scholarships from schools, full 100% learning assistance for around 4-5 months, and learn teamwork in the final project",
        "Attend a real-life project-based bootcamp with an emphasis on teamwork, use of popular frameworks, and the latest industry standards.",
        "Building an interactive backend with Express.js and JavaScript in a real project, including an authentication system and APIs that are optimally used by the team.",
      ],
    },
  ];

  const [flipped, setFlipped] = useState(
    Array(certificates.length).fill(false)
  );
  const toggleFlip = (index) => {
    const newFlip = [...flipped];
    newFlip[index] = !newFlip[index];
    setFlipped(newFlip);
  };

  const bgColor = isDark ? "bg-gray-900" : "bg-white";
  const textColor = isDark ? "text-white" : "text-gray-800";
  const cardBg = isDark ? "bg-gray-800" : "bg-white";
  const shadowFont = isDark
    ? "shadow-[4px_15px_15px_rgba(255,255,255,0.2)]"
    : "shadow-[4px_4px_15px_rgba(0,0,0,0.2)]";
  const shadowBack = isDark
    ? "shadow-[-4px_15px_15px_rgba(255,255,255,0.2)]"
    : "shadow-[-4px_4px_15px_rgba(0,0,0,0.2)]";

  return (
    <div className={`pt-20 transition-colors duration-500 ${bgColor}`}>
      <div
        className={`text-center py-4 tracking-[7.5px] text-xs font-medium ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        MY CERTIFICATES
      </div>

      <div className="w-full overflow-x-auto">
        <div className="flex gap-6 px-4 py-4 w-max snap-x snap-mandatory overflow-x-auto scroll-smooth">
          {certificates.map((certif, index) => (
            <div
              key={index}
              className="w-80 h-96 perspective-[1000px]"
              onClick={() => toggleFlip(index)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  flipped[index] ? "rotate-y-180" : ""
                }`}
              >
                {/* Front Side */}
                <div
                  className={`absolute w-full h-full backface-hidden rounded-xl overflow-hidden flex flex-col ${cardBg} ${textColor} ${shadowFont}`}
                >
                  <div
                    className="w-full aspect-[4/3] bg-cover bg-center"
                    style={{ backgroundImage: `url(${certif.image})` }}
                  />
                  <div className="p-4">
                    <h2 className="text-sm font-bold tracking-wide drop-shadow-lg transition-transform duration-300 hover:scale-105 mb-2">
                      {certif.name}
                    </h2>

                    {certif.skill && (
                      <div className="flex pt-2 flex-wrap gap-4 justify-center">
                        {certif.skill.map((icon, i) => (
                          <div
                            key={i}
                            className={`w-7 h-7 flex items-center justify-center rounded-xl ${shadowFont}  transform hover:scale-105 hover:rotate-[1deg] transition duration-300 ease-in-out`}
                          >
                            <img
                              src={icon}
                              alt={`skill-${i}`}
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Back Side */}
                <div
                  className={`absolute w-full h-full backface-hidden rotate-y-180 rounded-xl p-4 flex flex-col justify-between ${cardBg} ${textColor} ${shadowBack}`}
                >
                  <div>
                    <h2 className="text-lg font-semibold mb-2">
                      {certif.name}
                    </h2>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      {certif.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certificate;
