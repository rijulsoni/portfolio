import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ThemeContext from "./context/theme/ThemeContext";
import { useState } from "react";

function App() {
  const [isDarkMode, setDarkMode] = useState(true);
  const contextValue = {
    isDarkMode: isDarkMode,
    setDarkMode: setDarkMode
  };
  return (
    <ThemeContext.Provider value={contextValue}>
      <Navbar />
      <About />
      <Footer/>
    </ThemeContext.Provider>
  );
}

export default App;
