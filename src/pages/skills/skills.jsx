import React from "react";
import canva from "../../../public/img/canva.png";
import capcut from "../../../public/img/capcut.png";
import excel from "../../../public/img/excel.png";
import word from "../../../public/img/word.png";
import powerpoint from "../../../public/img/powerpoint.jpeg";

function skills() {
  const skills = [
    {
      name: "canva",
      percent: "50%",
      image: canva,
    },
    {
      name: "capcut",
      percent: "20%",
      image: capcut,
    },
    {
      name: "excel",
      percent: "10%",
      image: excel,
    },
    {
      name: "word",
      percent: "2%",
      image: word,
    },
    {
      name: "powerPoint",
      percent: "8%",
      image: powerpoint,
    },
  ];

  return (
    <>
      <div className="sticky pt-20 bg-white z-50 shadow-md">
        <div className="bg-light-4 d-flex flex justify-center items-center py-4">
          <span className="text-xs tracking-[7.5px] text-left-light font-medium font-inter">
            MY SKILLS
          </span>
        </div>
      </div>
      <div className="overflow-x-auto  py-1 px-2  rounded-lg">
        <div className="inline-grid grid-flow-col auto-cols-[150px] gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="text-center border border-gray-700 p-4 rounded-lg  text-white"
            >
              <p className="text-2xl font-bold text-gray-800">
                {skill.percent}
              </p>
              <p className="text-green-500 font-semibold">{skill.name}</p>

              <div className="group perspective-[1000px]">
                <div className="transition-transform duration-300 group-hover:rotate-y-20 group-hover:-rotate-x-20">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-8 h-8 mx-auto mt-2"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default skills;
