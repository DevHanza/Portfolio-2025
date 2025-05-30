import "./App.css";

import Footer from "./sections/Footer/Footer";
import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Experience from "./sections/Experience/Experience";
import LogoCarousel from "./sections/LogoCarousel/LogoCarousel";
import Contact from "./sections/Contact/Contact";
import BackToTopButton from "./components/BackToTopButton";
import AnnouncementBar from "./components/AnnouncementBar";

export const NavItems = [
  { linkName: "Home", url: "/" },
  { linkName: "Projects", url: "#projects" },
  { linkName: "Skills", url: "#skills" },
  { linkName: "Experience", url: "#experience" },
  { linkName: "Contact", url: "#contact" },
];

function App() {
  return (
    <>
      <AnnouncementBar />

      <Header />

      <Hero />

      <Projects />

      {/* <Skills /> */}

      {/* <Experience /> */}

      {/* <LogoCarousel /> */}

      {/* <Contact /> */}

      <BackToTopButton />
      <Footer />
    </>
  );
}

export default App;
