import React from 'react';
import { motion } from "framer-motion";
import profile from "../Assets/logo/profile.png";
import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container';
import collegProfile from "../Assets/logo/collegProfile.png";

export const SkillsSection = ()=>{
    return <Container maxWidth="xl">

            <Grid container spacing={2}>
              <Grid item size={12}>
                  <br/>  <br/><br/><br/><br/>
                <p className="whatIknow">What I know</p>
                <h2 class="pageTitle activeText">
                    My Skills
                </h2>
              </Grid>
              <Grid item size={{ xs: 6, md: 6, sm: 12, xs: 12}} className="profileSectionRight">
                
                <div>
                  <h2>
                  <span className="">Frontend</span>
                </h2>
                  <p className="paragraphText">Proficient in building responsive and interactive web applications using
ReactJS, HTML, CSS, and JavaScript ES6, with a focus on clean, maintainable
code and modern design practices.
                  </p>
                </div>
                <div className="skillsSection">
                    <span className="skillsPills">React Js</span> 
                    <span className="skillsPills">
                    Redux
                    </span>
                    <span className="skillsPills">
                    HTML
                    </span>
                    <span className="skillsPills">CSS</span>
                    <span className="skillsPills">Javascript ES6</span>
                    <span className="skillsPills">C & C++</span>
                    <span className="skillsPills">Python</span>
                </div>
                
                 
                </Grid>
                <Grid item size={{ xs: 6, md: 6, sm: 12, xs: 12}} className="profileSectionLeft">
                  <div>
                 
                  <div>
                     <h2>
                    <span className="">Backend</span>
                  </h2>
                    <p className="paragraphText">Experienced in developing scalable server-side applications with NodeJS and
integrating REST APIs for seamless communication between frontend and
backend services.
                    </p>
                  </div>
                    <div className="skillsSection">
                    <span className="skillsPills">NodeJS</span>
                    <span className='skillsPills'>Express Js</span>
                    <span className="skillsPills">Rest API</span>
                    <span className='skillsPills'>MongoDb</span>
                    <span className="skillsPills">MYSQL</span>
                    
                </div>
                  </div>
              </Grid>

 <Grid item size={{ xs: 12, md: 12, sm: 12, xs: 12}} className="profileSectionRight">
                <h2>
                  <span className="">Others</span>
                </h2>
                <div className="othersWrapper">
<span className="skillsPills">Bootstrap</span> 
                    <span className="skillsPills">
                    Material UI
                    </span>
                     <span className="skillsPills">Docker</span>
                    <span className='skillsPills'>Version control and collaboration using Git (Github)</span>
                    
                </div>
                
                
                 
                </Grid>
               
              
               

            </Grid>
          </Container>
}