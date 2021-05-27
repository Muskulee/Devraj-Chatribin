import React from "react";

import style from "./style";

//Importing components
import { ContainedButton } from "../Buttons";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Divider, Hidden, Typography } from "@material-ui/core";
import { OutlinedButton } from "../../components/Buttons";
//Importing assets



import GithubLogo from '../../assets/social-icons/github.svg'
import LinkedInLogo from '../../assets/social-icons/linkedin.svg'
import InstagramLogo from '../../assets/social-icons/instagram.svg'

const useStyles = makeStyles(style);
function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footerBackground}>
      <div className={classes.footerBackground__main}>
        <Typography variant="h2" gutterBottom className={classes.secondaryTitle}>LET’S CONNECT</Typography>
        <Typography variant="h6" gutterBottom className={classes.footer_desc}>My inbox is always open, Whether you have a question or just want to say hi. I’ll try my best to get back to you!</Typography>
        <OutlinedButton size="large">
          Get In Touch
        </OutlinedButton>
      </div>
      <div className="social___icons___footer">
          <img src={GithubLogo} style={{objectFit:'contain'}} />
          <img src={LinkedInLogo} style={{objectFit:'contain'}} />
          <img src={InstagramLogo} style={{objectFit:'contain'}} />
      </div>
      <hr width="80%" color="#798396" style={{opacity:'0.4'}}></hr>
      <Typography variant="subtitle2" className={classes.footer_desc}>Designed and Developed by<span style={{color:'#b6cfff',marginLeft:'5px'}}> Devraj Chatribin.</span></Typography>
    </div>
  );
}

export default Footer;
