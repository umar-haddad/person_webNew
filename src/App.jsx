import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react"; // ← Tambah useState
import "./App.css";
import Navbar from "./pages/navbar/navbar";
import Hero from "./pages/home/hero";
import Project from "./pages/project/project";
import Certificate from "./pages/certificate/certificate";
import Skills from "./pages/skills/skills";
import Contact from "./pages/contact/contact";
import Footer from "./pages/navbar/footer";

function ScrollToHash({ sections }) {
  const location = useLocation();

  useEffect(() => {
    const hash = location.pathname.replace("/", "");
    if (sections[hash]) {
      sections[hash].current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname]);

  return null;
}

function MainPage({ isDark, setIsDark }) {
  const homeRef = useRef();
  const projectRef = useRef();
  const certificateRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();

  const sections = {
    "": homeRef,
    home: homeRef,
    project: projectRef,
    certificate: certificateRef,
    skills: skillsRef,
    contact: contactRef,
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="sticky top-0 z-50">
        {/* 🌓 Tombol Toggle */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-500
      ${isDark ? "bg-gray-600" : " bg-yellow-400"}`}
          >
            <span
              className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white shadow-md transform transition-transform duration-300
        ${isDark ? "translate-x-8" : "translate-x-0"}`}
            >
              <span className="flex justify-center items-center h-full w-full text-sm">
                {isDark ? "🌙" : "☀️"}
              </span>
            </span>
          </button>
        </div>
      </div>

      <Navbar isDark={isDark} />
      <ScrollToHash sections={sections} />
      <section ref={homeRef} id="home">
        <Hero isDark={isDark} />
      </section>
      <section ref={projectRef} id="project">
        <Project isDark={isDark} />
      </section>
      <section ref={certificateRef} id="certificate">
        <Certificate isDark={isDark} />
      </section>
      <section ref={skillsRef} id="skills">
        <Skills isDark={isDark} />
      </section>
      <section ref={contactRef} id="contact">
        <Contact isDark={isDark} />
      </section>
      <Footer isDark={isDark} />
      <a
        href="https://wa.me/6285772169466" // Ganti dengan nomor kamu
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50"
      >
        <div
          className={`p-3 rounded-full shadow-lg transition-all duration-300 ${
            isDark
              ? "bg-green-600 hover:bg-green-700"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M20.52 3.48a11.8 11.8 0 0 0-16.7 0 11.8 11.8 0 0 0-3.45 8.36 11.79 11.79 0 0 0 1.59 5.93L.26 23.74l6.61-1.72a11.86 11.86 0 0 0 5.65 1.44h.01a11.8 11.8 0 0 0 8.36-3.45 11.8 11.8 0 0 0 0-16.7zm-8.36 18.07h-.01a9.93 9.93 0 0 1-5.05-1.37l-.36-.21-3.92 1.02 1.04-3.83-.23-.39a9.93 9.93 0 0 1 1.52-12.34 9.94 9.94 0 0 1 14.06 0 9.93 9.93 0 0 1 0 14.06 9.93 9.93 0 0 1-6.04 2.06zm5.65-7.68c-.31-.16-1.83-.9-2.11-1.01s-.49-.16-.7.16-.81 1.01-.99 1.22-.36.24-.67.08a8.17 8.17 0 0 1-2.4-1.48 9.03 9.03 0 0 1-1.66-2.06c-.17-.29-.02-.45.13-.6.14-.14.31-.36.46-.54.15-.18.2-.31.3-.52.1-.21.05-.39-.02-.54s-.7-1.69-.95-2.31c-.25-.6-.5-.52-.7-.53l-.6-.01c-.2 0-.52.08-.79.39s-1.04 1.02-1.04 2.5 1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.11 4.53.71.31 1.27.49 1.71.62.72.23 1.37.2 1.88.12.57-.09 1.83-.75 2.09-1.47.26-.73.26-1.35.18-1.48s-.28-.2-.6-.35z" />
          </svg>
        </div>
      </a>
    </div>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <Router>
      <MainPage isDark={isDark} setIsDark={setIsDark} />
    </Router>
  );
}
