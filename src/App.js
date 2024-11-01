import React, { useEffect, useRef } from "react";
import { NavigationBar } from "./Components/NavigationBar";
import "./App.css"
import { PageSection } from "./Components/PageSection";
import { ProfileIntroSection } from "./Components/ProfileIntroSection";
import { AboutSection } from "./Components/AboutSection";
import { QualificationSection } from "./Components/QualificationSection";
import { SkillsSection } from "./Components/SkillsSection";
import { ProjectSection } from "./Components/ProjectSection";
import { ContactSection } from "./Components/ContactSection";


function App() {
  // Create refs for each section
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);

  // Scroll to a specific section
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(()=>{

      window.scrollTo({ top: 0, behavior: 'smooth' });
  },[])

  return (
    <div>
      {/* Navigation Buttons */}
    
      <NavigationBar scrollToSection={scrollToSection}  homeSection ={section1Ref} aboutUsSection={section2Ref} qualificationSection={section3Ref} contactSection={section6Ref} skillsSection={section4Ref} projectSection={section5Ref} />
      <div className="pageSectionWrapper" >
        <PageSection sectionRererence={section1Ref} backgroundColor="#ffffff" minHeight="50vh" >
          <ProfileIntroSection/>
        </PageSection>

        <PageSection sectionRererence={section2Ref} backgroundColor="#3f51b50f" minHeight="80vh" >
          <AboutSection/>
        </PageSection>
        <PageSection sectionRererence={section3Ref} backgroundColor="#ffffff" minHeight="80vh" >
          <QualificationSection/>
        </PageSection>
         <PageSection sectionRererence={section4Ref} backgroundColor="#3f51b50f" minHeight="80vh" >
          <SkillsSection/>
        </PageSection>
           <PageSection sectionRererence={section5Ref} backgroundColor="#ffffff" minHeight="100vh" >
          <ProjectSection/>
        </PageSection>
         <PageSection sectionRererence={section6Ref} backgroundColor="#3f51b50f" minHeight="80vh" >
          <ContactSection/>
        </PageSection>
             
           

          </div>

          
    </div>
  );
}

export default App;
