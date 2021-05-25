import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

// Importing Material UI Stuff
import { Container } from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { darkTheme, createMuiTheme } from "./theme";

//Importing Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


//Importing Routes
import Routes from "./routes";

import style from "./style";

import GithubLogo from '../src/assets/social-icons/github.png'
import LinkedInLogo from '../src/assets/social-icons/linkedin.png'
import InstagramLogo from '../src/assets/social-icons/instagram.png'

const useStyles = makeStyles(style);

function Content() {
  const classes = useStyles();
  const [theme, setTheme] = useState(createMuiTheme(darkTheme));

  return (
    <Router >

      <div style={{width:'100%',padding:'0rem 0rem'}}>
        
        <div className="mobile___hidden" style={{position:'fixed',bottom:'1%',left:'2%',display:'flex',flexDirection:'column',alignItems:'center'}}>
          <img src={GithubLogo} style={{objectFit:'contain'}} />
          <img src={LinkedInLogo} style={{objectFit:'contain'}} />
          <img src={InstagramLogo} style={{objectFit:'contain'}} />
          <div style={{width:'0.1rem',height:'8rem',background:'#63718A'}}></div>
        </div>
        
        <Container style={{maxWidth:'1150px'}}>
          <NavBar />
          <Routes />
        </Container>
        <Footer/>

        <div className="mobile___hidden" style={{position:'fixed',bottom:'1%',right:'2%',display:'flex',flexDirection:'column',alignItems:'center'}}>
          <div style={{writingMode: 'vertical-rl',textOrientation:'mixed',color:'#63718A',marginBottom:'1rem'}}>devrajchatribin9978@gmail.com</div>
          <div style={{width:'0.125rem',height:'8rem',background:'#63718A'}}></div>
        </div>
      </div>
     

    </Router>
  );
}

function App() {
  const [theme, setTheme] = useState(createMuiTheme(darkTheme));

  return (
    <ThemeProvider theme={theme}>
      <Content />
    </ThemeProvider>
  );
}

export default App;
