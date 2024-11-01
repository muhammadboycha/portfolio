import React from 'react';
import { motion } from "framer-motion";
import profile from "../Assets/logo/profile.png";
import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container';
import createaccount from "../Assets/appscreens/createaccount.jpeg";
import loginaccount from "../Assets/appscreens/login.jpeg";
import createtask from "../Assets/appscreens/createtask.jpeg";
import taskcomplete from "../Assets/appscreens/appcompleted.jpeg";
import dashboard from "../Assets/appscreens/appdashboard.jpeg";
import todolist from "../Assets/appscreens/todolist.jpeg";

export const ProjectSection = ()=>{
    return <Container maxWidth="xl">

            <Grid container spacing={2}>
              <Grid item size={12}>
                  <br/>  <br/><br/><br/><br/>
                 <p className="whatIknow">What I have done</p>
                <h2 class="pageTitle activeText">
                    Project
                </h2>
              </Grid>
              <Grid item size={{ xl: 12, md: 12, sm: 12, xs: 12}} className="profileSectionRight">
                <h2>
               Daily Task Mannagement System - <span className="projectDescription">Web Application - April 2024 to June 2024</span>
                </h2>

                <div className="qualificationSection">
                   <p className="paragraphText">
                      Todo App is the application where we can plan our task and manage our task
easily. Anyone can use this app to mange their task. Anyone can create their account using
Name, mobile and email.
                   </p>
                </div>

                

                </Grid>
                 <Grid item size={{ xl: 6, md: 6, sm: 12, xs: 12}} className="">
               
                  <h2>It has some feature as follow.</h2>
                  <ul className="projectInfoList">
                      <li>
                        <span className="activeText">Create user</span>
                      </li>
                      <li>
                        <span className="activeText">Login user</span>
                      </li>
                      <li>
                        <span className="activeText">Create task</span>
                      </li>
                      <li>
                        <span className="activeText">Update task details</span>
                      </li>
                      <li>
                        <span className="activeText">Delete task</span>
                      </li>
                      <li>
                        <span className="activeText">Start task by selecting the due date.</span>
                      </li>
                       <li>
                        <span className="activeText">View task details</span>
                      </li>
                       <li>
                        <span className="activeText">Update the task status like (Todo, In progress, Completed, Deleted) and it will
                  show the overdue status if the task is not complete before the due date.</span>
                      </li>
                      
                    </ul>
                

                </Grid>
                  <Grid item size={{ xl: 6, md: 6, sm: 12, xs: 12}} className="">
                <h2>Technologies used in the project: </h2>
                <p className="paragraphText">
                  React JS(Frontend), NodeJs(Backend), MongoDb(Database), Github(Version control),
Figma(Prototype), Netlify(Frontend hosting free site), AWS(EC2- API hosting)
                </p>
              </Grid>
<br/>
               <Grid item size={12}>
                 <p className="whatIknow">User interface of the application</p>
                <h2 class="pageTitle activeText">
                    Application screens
                </h2>
                <br/>  <br/>
              </Grid>
              <Grid item size={{ xl: 3, md: 3, sm: 6, xs: 12}} >
                <div className="screensWrapper">
                  <h3 className="activeText">Create account</h3>
                  <img  className="screens"  src={createaccount} />
                </div>
              </Grid>
               <Grid item size={{ xl: 3, md: 3, sm: 6, xs: 12}} >
                  <div className="screensWrapper">
                  <h3 className="activeText">Login account</h3>
                  <img  className="screens"  src={loginaccount} />
                </div>
              </Grid>
               <Grid item size={{ xl: 3, md: 3, sm: 6, xs: 12}} >
 <div className="screensWrapper">
                  <h3 className="activeText">Dashboard</h3>
                  <img  className="screens"  src={dashboard} />
                </div>
               </Grid>
                <Grid item size={{ xl: 3, md: 3, sm: 6, xs: 12}} >
                <div className="screensWrapper">
                  <h3 className="activeText">Create new task</h3>
                  <img  className="screens"  src={createtask} />
                </div>
              </Grid>
               
               


            </Grid>
            <br/><br/>
          </Container>
}