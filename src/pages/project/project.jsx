import React, { useState } from "react";
import "../../assets/projectCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import img1 from "../../../public/img/project/bmi_calculator.jpg";
import img2 from "../../../public/img/project/login_LMS_phpNative.jpg";
import img3 from "../../../public/img/project/person_web_php.jpg";
import img4 from "../../../public/img/project/pokedex.jpg";
import img5 from "../../../public/img/project/POS_laravel.jpg";
import img6 from "../../../public/img/project/todolist.jpg";
import img7 from "../../../public/img/project/wehealth.jpg";

function Project({ isDark }) {
  const projects = [
    {
      name: "BMI Calculator",
      image: img1,
      description: [
        "Aplikasi dengan dengan logic perhitungan berat badan",
        "menggunakan javascript, html, dan css",
      ],
      github: "https://github.com/umar-haddad/BMI-Calculator",
      deploy: "https://rococo-taiyaki-0fdfb6.netlify.app/",
    },
    {
      name: "Login LMS PHP Native",
      image: img2,
      description: [
        "sebuah web aplikasi untuk login ke sistem LMS dengan menggunakan PHP Native",
        "menggunakan php, html, dan css, bootstrap, dan jquery",
        "tidak bisa di deploy karena saya masih belajar membuat crud + UI langsung dengan php, menggunakan database mysql",
        "jadi hanya bisa di jalankan di localhost",
      ],
      github: "https://github.com/umar-haddad/latihan_praUjikom",
    },
    {
      name: "Person Web PHP",
      image: img3,
      description: [
        "person web sederhana untuk menampilkan data diri, menggunakan database mysql",
        "menggunakan php, html, dan css, bootstrap, dan jquery",
        "jadi hanya bisa di jalankan di localhost, ambil data dari database mysql",
      ],
      github: "https://github.com/umar-haddad/PPKD_Person_web",
    },
    {
      name: "Pokedex API",
      image: img4,
      description: [
        "web aplikasi untuk menampilkan data pokemon dari API",
        "menggunakan react, bootstrap, dan css",
      ],
      github: "https://github.com/umar-haddad/Pokedex_challengge",
      deploy: "https://pokemon-dek.netlify.app/",
    },
    {
      name: "POS Laravel",
      image: img5,
      description: [
        "web aplikasi untuk sistem point of sale dengan menggunakan laravel",
        "menggunakan laravel, php, bootstrap, dan javascript",
        "jadi hanya bisa di jalankan di localhost, database menggunakan mysql dan konfigurasi pembayaran menggunakan midtrans sandbox",
      ],
      github: "https://github.com/umar-haddad/Pra_Ujikom-Batch2",
    },
    {
      name: "ToDo List",
      image: img6,
      description: [
        "web aplikasi untuk mencatat daftar tugas",
        "menggunakan react, css, dan bootstrap",
      ],
      github: "https://github.com/umar-haddad/ToDoList",
      deploy: "https://todolist-basic01.netlify.app/",
    },
    {
      name: "WeHealth",
      image: img7,
      description: [
        "web aplikasi untuk sistem kesehatan dengan menggunakan react, dan database menggunakan firebase dan mongoDB",
        "menggunakan react, css, bootstrap, mongoDB, dan firebase",
        "mengajarkan bagaimana cara membuat aplikasi dengan kerja sama tim yang baik",
        "menggunakan figma untuk desain UI/UX",
      ],
      github: "https://github.com/umar-haddad/fe-wehealth",
      deploy: "https://app-wehealth.netlify.app/",
    },
  ];

  const [flipped, setFlipped] = useState(Array(projects.length).fill(false));

  const toggleFlip = (index) => {
    const newFlip = [...flipped];
    newFlip[index] = !newFlip[index];
    setFlipped(newFlip);
  };

  // Class conditional
  const bgColor = isDark ? "bg-gray-900" : "bg-white";
  const textColor = isDark ? "text-white" : "text-gray-800";
  const cardBg = isDark ? "bg-gray-800" : "bg-white";
  const buttonBg = isDark
    ? "bg-gray-700 hover:bg-gray-600"
    : "bg-gray-900 hover:bg-gray-800";
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
        MY PORTOFOLIO
      </div>

      <div className="w-full overflow-x-auto">
        <div className="flex gap-6 px-4 py-4 w-max snap-x snap-mandatory overflow-x-auto scroll-smooth">
          {projects.map((project, index) => (
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
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="p-4">
                    <h2 className="text-sm font-bold tracking-wide drop-shadow-lg transition-transform duration-300 hover:scale-105">
                      {project.name}
                    </h2>
                  </div>
                  <div className="flex justify-center gap-4 mt-auto mb-4 px-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-transform duration-300 ease-in-out text-white ${buttonBg} hover:scale-105 hover:shadow-lg`}
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      Repo
                    </a>
                    {project.deploy && (
                      <a
                        href={project.deploy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-transform duration-300 ease-in-out text-white ${buttonBg} hover:scale-105 hover:shadow-lg`}
                      >
                        <FontAwesomeIcon icon={faGlobe} />
                        Web
                      </a>
                    )}
                  </div>
                </div>

                {/* Back Side */}
                <div
                  className={`absolute w-full h-full backface-hidden rotate-y-180 rounded-xl p-4 flex flex-col justify-between ${cardBg} ${textColor} ${shadowBack}`}
                >
                  <div>
                    <h2 className="text-lg font-semibold mb-2">
                      {project.name}
                    </h2>
                    <ol className="list-disc pl-4 space-y-1 text-sm">
                      {Array.isArray(project.description) ? (
                        project.description.map((desc, i) => (
                          <li
                            key={i}
                            className="text-gray-600 dark:text-gray-400"
                          >
                            {desc}
                          </li>
                        ))
                      ) : (
                        <li className="text-gray-600 dark:text-gray-400">
                          {project.description}
                        </li>
                      )}
                    </ol>
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

export default Project;
