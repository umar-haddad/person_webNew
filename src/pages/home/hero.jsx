import React, { useState } from "react";
import image1 from "../../../public/3x4.png";
import image2 from "../../../public/Profile.jpg";
import cvPdf from "../../../public/cv/CV terbaru.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function hero({ isDark }) {
  const [isFront, setIsFront] = useState(true);

  const textColor = isDark ? "text-white" : "text-gray-900";
  return (
    <>
      <div className=" flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16 px-4 md:px-20 py-10">
        {/* === HERO TEXT === */}
        <div className="max-w-xl pt-10 md:pt-0">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-0.5 bg-light-4" />
            <span className="text-xs tracking-[7.5px] text-left-light font-medium font-inter">
              MY NAME IS
            </span>
          </div>

          <h1
            className={`text-left md:text-[44px] font-bold font-plus-jakarta leading-snug ${textColor} tracking-tight`}
          >
            Sayyid Umar <br />
            <span className="text-[#7e74f1]">Web Programming</span>
          </h1>

          <p className="mt-4 text-base leading-8 text-left font-inter">
            Hi! I’m a passionate Web Programmer with a love for building
            responsive, scalable web apps and always eager to learn new
            technologies
            <ol className="list-disc pl-10 my-2 text text-[#383370]">
              <li>Frontend: React.js, Tailwind CSS, Figma (UI/UX design)</li>
              <li>Backend: Laravel, Express.js, Node.js</li>
              <li>Native : CSS, Javascript, PHP</li>
            </ol>
          </p>

          <div className="py-5" align="left">
            <a
              className="hover:text-3xl text-2xl px-3"
              href="https://www.instagram.com/sayyid_umar_haddad"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              className="hover:text-3xl text-2xl "
              href="https://www.linkedin.com/in/sayyid-umar/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              className="hover:text-3xl text-2xl px-3"
              href="https://www.tiktok.com/@self_str0ng"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
            <a href={cvPdf} target="_blank" rel="noopener noreferrer">
              <button className="mt-6 px-4 py-2 bg-[#7e74f1] text-white rounded-md hover:bg-[#5a4bbf] transition duration-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faDownload} />
                Download CV
              </button>
            </a>
            <a href="/contact">
              <button className="mt-6 px-4 py-2 bg-[#7e74f1] text-white rounded-md hover:bg-[#5a4bbf] transition duration-300">
                <FontAwesomeIcon icon={faEnvelope} className="pr-1" />
                Contact Me
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
            className={`absolute inset-0 w-full h-full object-cover -translate-x-2 -rotate-z-2 rounded-2xl shadow-xl transition-transform duration-700 ease-in-out ${
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
