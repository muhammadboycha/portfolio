import React from 'react';
import { motion } from "framer-motion";
import profile from "../Assets/logo/profile.png";
import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container';
import collegProfile from "../Assets/logo/collegProfile.png";

export const AboutSection = ()=>{
    return <Container maxWidth="xl">

            <Grid container spacing={2}>
              <Grid item size={12}>
                <br/>
                <h2 class="pageTitle activeText">
                    About me
                </h2>
              </Grid>
               <Grid item size={{ xs: 5, md: 5, sm: 12, xs: 12}} className="aboutUsSectionLeft">
                   
              <img className="collegProfile" src={collegProfile} />
                </Grid>
                <Grid item size={{ xs: 7, md: 7, sm: 12, xs:12}} className="aboutUsSectionRight">
                  <div>
                    <h2 class="iamtext">
                    Hi - 
                  </h2>
                  <h2>
                    I'm a <span className="activeText"> Fullstack Web Application Developer</span>
                  </h2>
                  <p className="paragraphText">
                    I have completed 2 Months of Fullstack web application development and having 2 Months of experience in React.js, Redux, HTML,
CSS, and JavaScript ES6, I’m excited to leverage my skills in building interactive and
efficient web applications. My knowledge extends to Node.js, REST APIs, and backend
development, along with programming in C, C++, and Python. I’m driven and ready to
apply my expertise while continuously learning and contributing to innovative
projects.
                  </p>
                 <br/>
                   <a href='https://www.linkedin.com/in/muhammad-boycha-b541812b6' target="_blank" className="contactNowButton">
                    <h3>LinkedIn Profile</h3>
                  </a>
                  </div>                </Grid>
               

            </Grid>
          </Container>
}