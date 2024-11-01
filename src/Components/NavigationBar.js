import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Typography, Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from "../Assets/logo/logo.png";

export const NavigationBar = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width:600px)'); // Check if screen width is 600px or larger
 const {homeSection,aboutUsSection,qualificationSection, contactSection , scrollToSection, skillsSection, projectSection} = props;
  
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'white',
          color: 'black',
          boxShadow: 'none',
          borderBottom: 'none',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Logo on the left */}
          <Typography variant="h6" sx={{ flexGrow: 1, display:'flex' }}>
             <img className="logo" src={logo} />
          </Typography>

          {/* Menu items and Hamburger icon on the right */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {isDesktop && (
              <Box sx={{ display: 'flex', gap: 2 }}>
                <div className="menuItemWrapper">
                  <button className="menuItem" onClick={()=>scrollToSection(homeSection)}>Home</button>
        <button className="menuItem" onClick={()=>scrollToSection(aboutUsSection)}>About</button>
           <button className="menuItem" onClick={()=>scrollToSection(qualificationSection)}>Qualification</button>
            <button className="menuItem" onClick={()=>scrollToSection(skillsSection)}>Skills</button>
                       <button className="menuItem" onClick={()=>scrollToSection(projectSection)}>Projects</button>
                       <button className="menuItem" onClick={()=>scrollToSection(contactSection)}>Contact</button>
     </div>
              </Box>
            )}
            {!isDesktop && (
              <IconButton
                color="inherit"
                edge="end"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile view */}
      <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          display: { xs: 'block', sm: 'none' } // Only display drawer on mobile
        }}
      >
        <button className="menuItem" onClick={()=>{setIsDrawerOpen(false) ;scrollToSection(homeSection)}}>Home</button>
        <button className="menuItem" onClick={()=>{setIsDrawerOpen(false) ;scrollToSection(aboutUsSection)}}>About</button>
           <button className="menuItem" onClick={()=>{setIsDrawerOpen(false) ;scrollToSection(qualificationSection)}}>Qualification</button>
            <button className="menuItem" onClick={()=>{setIsDrawerOpen(false) ;scrollToSection(skillsSection)}}>Skills</button>
                       <button className="menuItem" onClick={()=>{setIsDrawerOpen(false) ;scrollToSection(projectSection)}}>Projects</button>
                       <button className="menuItem" onClick={()=>{setIsDrawerOpen(false) ;scrollToSection(contactSection)}}>Contact</button>
     
      </Drawer>
    </Box>
  );
};
