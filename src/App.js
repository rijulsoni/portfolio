import "./App.css";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import ThemeContext from "./context/theme/ThemeContext";
import { useState } from "react";

function App() {
  const [isDarkMode, setDarkMode] = useState(true);
  const contextValue = {
    isDarkMode: isDarkMode,
    setDarkMode: setDarkMode,
  };
  return (
    <ThemeContext.Provider value={contextValue}>
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Education />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
