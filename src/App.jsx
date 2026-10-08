import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CreativeWork from "./components/CreativeWork";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <CreativeWork />
        <Experience />
        <Achievements />
        <Contact />
      </main>

      <Footer />

    </div>
  );
}

export default App;