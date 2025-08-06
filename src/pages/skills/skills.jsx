import React, { useEffect, useRef } from "react";
import gsap from "gsap";

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

function Skills({ isDark }) {
  const skillRefs = useRef([]);

  // GSAP Hover Animasi
  useEffect(() => {
    skillRefs.current.forEach((card, index) => {
      if (!card) return;

      const tl = gsap.timeline({ paused: true });
      tl.to(card, {
        scale: 1.08,
        rotateY: 10,
        rotateX: -5,
        boxShadow: isDark
          ? "0px 10px 20px rgba(255, 255, 255, 0.2)"
          : "0px 10px 20px rgba(0, 0, 0, 0.2)",
        duration: 0.3,
        ease: "power2.out",
      });

      card.addEventListener("mouseenter", () => tl.play());
      card.addEventListener("mouseleave", () => tl.reverse());
    });
  }, [isDark]);

  const skills = [
    { name: "canva", percent: "80%", image: canva },
    { name: "figma", percent: "80%", image: figma },
    { name: "excel", percent: "65%", image: excel },
    { name: "word", percent: "90%", image: word },
    { name: "powerPoint", percent: "75%", image: powerpoint },
    { name: "css", percent: "80%", image: css },
    { name: "tailwind", percent: "50%", image: tailwind },
    { name: "bootstrap", percent: "70%", image: bootstrap },
    { name: "html", percent: "95%", image: html },
    { name: "javascript", percent: "60%", image: javascript },
    { name: "react", percent: "70%", image: react },
    { name: "node", percent: "70%", image: node },
    { name: "express", percent: "40%", image: express },
    { name: "php", percent: "65%", image: php },
    { name: "laravel", percent: "65%", image: laravel },
    { name: "github", percent: "75%", image: github },
    { name: "mysql", percent: "85%", image: mysql },
    { name: "mongodb", percent: "45%", image: mongodb },
  ];

  const bgColor = isDark ? "bg-gray-900" : "bg-white";
  const textColor = isDark ? "text-white" : "text-gray-800";
  const borderColor = isDark ? "border-gray-700" : "border-gray-300";
  const headerBg = isDark ? "bg-gray-900" : "bg-white";

  return (
    <div className={`min-h-[50vh] transition-colors duration-300 ${bgColor}`}>
      <div className={`top-0 pt-20 z-50 shadow-md ${headerBg}`}>
        <div className="flex justify-center items-center py-4">
          <span
            className={`text-xs tracking-[7.5px] font-medium font-inter ${
              isDark ? "text-white" : "text-gray-700"
            }`}
          >
            MY SKILLS
          </span>
        </div>
      </div>

      <div className="overflow-x-auto py-4 px-4">
        <div className="inline-grid grid-flow-col auto-cols-[150px] gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (skillRefs.current[index] = el)}
              className={`text-center border ${borderColor} p-4 rounded-lg ${textColor} ${
                isDark ? "bg-gray-800" : "bg-white"
              } shadow-sm cursor-pointer transition-transform`}
            >
              <p className={`text-2xl font-bold ${textColor}`}>
                {skill.percent}
              </p>
              <p className="text-green-500 font-semibold">{skill.name}</p>

              <img
                src={skill.image}
                alt={skill.name}
                className="w-8 h-8 mx-auto mt-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
