import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import WhatsAppButton from "./components/WhatsAppButton";
import ResumeViewer from "./components/ResumeViewer";

function App() {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <Navbar
        onResumeClick={() => setShowResume(true)}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Pricing />
        <Contact />
      </main>

      <Footer />

      <WhatsAppButton />

      {/* Resume Viewer */}
      {showResume && (
        <ResumeViewer
          onClose={() => setShowResume(false)}
        />
      )}
    </>
  );
}

export default App;