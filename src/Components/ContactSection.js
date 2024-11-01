import React from 'react';
import { motion } from "framer-motion";
import profile from "../Assets/logo/profile.png";
import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container';
import collegProfile from "../Assets/logo/collegProfile.png";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailIcon from '@mui/icons-material/Mail';
import PlaceIcon from '@mui/icons-material/Place';

export const ContactSection = ()=>{
    return <Container maxWidth="xl">

            <Grid container spacing={2}>
              <Grid item size={12}>
                  <br/>  <br/><br/><br/><br/>
                <p className="whatIknow">My contact details</p>
                <h2 class="pageTitle activeText">
                    Contact me
                </h2>
                <br/> <br/>
              </Grid>
               <Grid item size={{ xs: 12, md: 12, sm: 12, xs: 12}} className="contactWrapper" >
                <img className="collegProfile" src={collegProfile} />
                <h3 className="activeText">Muhammad Boycha</h3>
                <p className="contactDetailsText"> <PhoneAndroidIcon fontSize="small"/>6009564129</p>
                <p  className="contactDetailsText"><MailIcon fontSize="small"/>muhammadboycha@gmail.com</p>
                <p  className="contactDetailsText"> <PlaceIcon fontSize="small"/> KSRP Road, Prabhavathi Paradise,
Apartment T3, Bangalore</p>
<br/>
   <a href='https://www.linkedin.com/in/muhammad-boycha-b541812b6' target="_blank" className="contactNowButton">
                    <h3>LinkedIn Profile</h3>
                  </a>
                  <br/><br/><br/>
            </Grid>
               

            </Grid>
          </Container>
}