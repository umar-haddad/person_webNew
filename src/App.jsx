import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./pages/navbar/navbar";
import Hero from "./pages/home/hero";
import Project from "./pages/project/project";
import Skills from "./pages/skills/skills";
import Contact from "./pages/contact/contact";
import Footer from "./pages/navbar/footer";
// import Contact from "./pages/contact/contact";

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

function MainPage() {
  const homeRef = useRef();
  const projectRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();

  const sections = {
    "": homeRef,
    home: homeRef,
    project: projectRef,
    skills: skillsRef,
    contact: contactRef,
  };

  return (
    <>
      <Navbar />
      <ScrollToHash sections={sections} />
      <div>
        <section ref={homeRef} id="home">
          <Hero />
        </section>
        <section ref={projectRef} id="project">
          <Project />
        </section>
        <section ref={skillsRef} id="skills">
          <Skills />
        </section>
        <section ref={contactRef} id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <MainPage />
    </Router>
  );
}
