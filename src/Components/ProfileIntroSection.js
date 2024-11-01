import React from 'react';
import { motion } from "framer-motion";
import profile from "../Assets/logo/profile.png";
import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container';

export const ProfileIntroSection = ()=>{
    return <Container maxWidth="xl">
            <Grid container spacing={2}>
                <Grid item size={{ xs: 6, md: 6, sm: 6, xs: 12}} className="profileSectionLeft">
                  <br/><br/><br/>
                  <div>
                    <h2 class="iamtext">
                    I'm Muhammad Boycha
                  </h2>
                  <h2>
                    I'm a <span className="activeText"> Software Developer</span>
                  </h2>
                  <p className="paragraphText">
                    MERN Stack Web Developer With 2 Months of experience in React.js, Redux, HTML,
CSS, and JavaScript ES6, I’m excited to leverage my skills in building interactive and
efficient web applications.
                  </p>
                  <button className="contactNowButton">
                    <h3>Contact Now</h3>
                  </button>
                  </div>                </Grid>
                <Grid item size={{ xs: 6, md: 6, sm: 6, xs:12}} className="profileSectionRight" sx={{
          paddingBottom: '0px'
        }}>
                  <br/><br/><br/>
                  <motion.div
                          initial={{ width: "50vw", x: "0vw" }}
                          animate={{ width: "100vw", x: 100 }}
                          transition={{ duration: 1 }}
                        >
                      <img className="userProfile" src={profile} />
                        </motion.div>
                  
                 
                </Grid>

            </Grid>
          </Container>
}