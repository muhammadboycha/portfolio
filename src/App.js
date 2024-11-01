import React, { useRef } from "react";
import { motion } from "framer-motion";

function App() {
  // Create refs for each section
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  // Scroll to a specific section
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Navigation Buttons */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          backgroundColor: "#fff",
          width: "100%",
        }}
      >
        <button onClick={() => scrollToSection(section1Ref)}>
          Go to Section 1
        </button>
        <button onClick={() => scrollToSection(section2Ref)}>
          Go to Section 2
        </button>
        <button onClick={() => scrollToSection(section3Ref)}>
          Go to Section 3
        </button>
      </nav>

      {/* Sections with Framer Motion Animation */}
      <motion.div
        ref={section1Ref}
        style={{
          height: "100vh",
          backgroundColor: "#f4a261",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Section 1</h2>
      </motion.div>

      <motion.div
        ref={section2Ref}
        style={{
          height: "100vh",
          backgroundColor: "#2a9d8f",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Section 2</h2>
      </motion.div>

      <motion.div
        ref={section3Ref}
        style={{
          height: "100vh",
          backgroundColor: "#264653",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Section 3</h2>
      </motion.div>
    </div>
  );
}

export default App;
