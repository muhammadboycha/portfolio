import React from 'react';
import { motion } from "framer-motion";
import profile from "../Assets/logo/profile.png";
import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container';
import collegProfile from "../Assets/logo/collegProfile.png";

export const QualificationSection = ()=>{
    return <Container maxWidth="xl">

            <Grid container spacing={2}>
              <Grid item size={12}>
                 <p className="whatIknow">Here's my</p>
                <h2 class="pageTitle activeText">
                    My Qualification
                </h2>
              </Grid>
              <Grid item size={{ xs: 6, md: 6, sm: 12, xs: 12}} className="profileSectionRight">
                <h2>
                  <span className=""> Qualification</span>
                </h2>
                <div className="qualificationSection">
                  <p>
                    <ul className="qualificationList">
                      <li>
                       <span className="activeText">Bachelor of Computer Application(BCA)</span> 
                      </li>
                      <li>
                        Currently pursuing – Final Semester
(Expected completion: [June, 2025]) at JCRE Global College, Imphal Manipur.
                      </li>
                    </ul>
                  </p>
                </div>
                
                 
                </Grid>
                <Grid item size={{ xs: 6, md: 6, sm: 12, xs: 12}} className="profileSectionLeft">
                  <div>
                  <h2>
                    <span className=""> Experience</span>
                  </h2>
                    <div className="qualificationSection">
                  <p>
                    <ul className="qualificationList">
                      <li>
                        <span className="activeText">Fullstack Web Developer</span>
                      </li>
                      <li>
                        Completed 2 months internship
program as a Fullstack web developer.
                      </li>
                      <li>
                        Wayspire Ed-Tech Private Limited - (April 2024 to June 2024)
                      </li>
                    </ul>
                  </p>
                </div>
                  </div>
              </Grid>
               

            </Grid>
          </Container>
}