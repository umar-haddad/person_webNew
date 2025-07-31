import React, { useState } from "react";
import image1 from "../../../public/img/hero.jpg";
import image2 from "../../../public/img/image_about.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function hero() {
  const [isFront, setIsFront] = useState(true);

  return (
    <>
      <div className=" flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16 px-4 md:px-20 py-10">
        {/* === HERO TEXT === */}
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-0.5 bg-light-4" />
            <span className="text-xs tracking-[7.5px] text-left-light font-medium font-inter">
              MY NAME IS
            </span>
          </div>

          <h1 className="text-left md:text-[44px] font-bold font-plus-jakarta text-[#232e35] leading-snug">
            Dedeh Rodiah <span className="text-[#7e74f1]">ilkom</span>
          </h1>

          <p className="mt-4 text-base leading-8 text-left font-inter">
            Creative front-end developer with more than +5 years of experience
            in enterprise companies and startups. Proficient in JavaScript,
            Angular, and React. Passionate about UI/UX
          </p>

          <div className="py-5" align="left">
            <a className="hover:text-3xl text-2xl px-3" href="">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="hover:text-3xl text-2xl " href="">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="hover:text-3xl text-2xl px-3" href="">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="hover:text-3xl text-2xl " href="">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <a href="">
              <button className="mt-6 px-6 py-2 bg-[#7e74f1] text-white rounded-md hover:bg-[#5a4bbf] transition duration-300">
                Download CV
              </button>
            </a>
            <a href="">
              <button className="mt-6 px-6 py-2 bg-[#7e74f1] text-white rounded-md hover:bg-[#5a4bbf] transition duration-300">
                Download CV
              </button>
            </a>
          </div>
        </div>

        {/* === HERO IMAGE === */}
        <div
          className="relative w-[70%] xs:w-[60%] sm:w-[180px] md:w-[100px] lg:w-[250px] aspect-[3/4] cursor-pointer perspective-[1000px] mx-auto"
          onClick={() => setIsFront(!isFront)}
        >
          {/* Gambar 1 */}
          <img
            src={image1}
            alt="Gambar 1"
            className={`absolute inset-0 w-full h-full object-cover rounded-2xl translate-x-7 translate-y-5 rotate-z-5  shadow-xl transition-transform duration-700 ease-in-out ${
              isFront
                ? "z-20 translate-x-0 scale-100"
                : "z-10 translate-x-2 scale-95"
            }`}
          />

          {/* Gambar 2 */}
          <img
            src={image2}
            alt="Gambar 2"
            className={`absolute inset-0 w-full h-full object-cover -translate-x-4 -translate-y-5 -rotate-z-5 rounded-2xl shadow-xl transition-transform duration-700 ease-in-out ${
              isFront
                ? "z-10 -translate-x-2 scale-95"
                : "z-20 translate-x-0 scale-100"
            }`}
          />
        </div>
      </div>
    </>
  );
}

export default hero;
