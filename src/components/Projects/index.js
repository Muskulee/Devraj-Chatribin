import React from "react";

import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//Importing Components

import style from "./style";

import GithubEx from '../../assets/social-icons/githubEx.svg'
import ExLink from '../../assets/social-icons/external-link.svg'

const useStyles = makeStyles(style);

function Projects({ image, title, text, stack, githubLink, liveLink}) {
  const classes = useStyles();
  
  return (
    <Grid container className={classes.section} alignItems="flex-start">
        <Grid container xs={12} sm={6} alignItems="flex-start" >
          <img
            src={image}
            className={classes.categoriesIllustration}
            alt="Categories Illustration"
          />
        </Grid>
        <Grid xs={12} sm={6} className={classes.categoriesSection}>
          <Typography variant="h4" className={`${classes.subtitle} ${classes.textAlignLeft}`}>
            {title}
          </Typography>
          <div className={classes.content}>
            <Typography 
                variant="h6"
                className={`${classes.description} ${classes.secondaryDesc} ${classes.textAlignLeft}`}
            >
                {text}
            </Typography>
            <Typography 
                variant="h6"
                className={`${classes.description} ${classes.secondaryDesc} ${classes.textAlignLeft}`}
            >
                {stack}
            </Typography>
          </div>
          <div className={classes.textAlignLeft}>
          <a href="https://indicov.co">
            <svg className="svg-links" width="33" height="32" viewBox="0 0 33 32" fill="none" style={{margin:'1rem 0.5rem'}} xmlns="http://www.w3.org/2000/svg">
              <path d="M21.3689 30.3336V25.1736C21.4189 24.5378 21.3331 23.8986 21.1171 23.2986C20.9012 22.6986 20.5602 22.1515 20.1166 21.6936C24.2998 21.2269 28.6962 19.6402 28.6962 12.3602C28.6958 10.4987 27.9803 8.70851 26.6978 7.36024C27.3051 5.73158 27.2622 3.93137 26.5779 2.33358C26.5779 2.33358 25.0059 1.86691 21.3689 4.30691C18.3155 3.47867 15.0968 3.47867 12.0433 4.30691C8.40637 1.86691 6.83435 2.33358 6.83435 2.33358C6.15008 3.93137 6.10714 5.73158 6.71445 7.36024C5.42236 8.71851 4.70615 10.5249 4.71611 12.4002C4.71611 19.6269 9.11245 21.2136 13.2956 21.7336C12.8573 22.1869 12.5193 22.7275 12.3035 23.3201C12.0878 23.9128 11.9991 24.5443 12.0433 25.1736V30.3336M12.0433 26.3336C5.38222 28.3336 5.38222 23.0002 2.71777 22.3336L12.0433 26.3336Z" stroke="#B6CFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a href="https://indicov.co">
          <svg className="svg-links" width="32" height="32" style={{margin:'1rem 0.5rem'}} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.0063 17.3333V25.3333C24.0063 26.0406 23.7256 26.7189 23.2259 27.219C22.7262 27.719 22.0485 28 21.3419 28H6.6874C5.98074 28 5.30303 27.719 4.80335 27.219C4.30367 26.7189 4.02295 26.0406 4.02295 25.3333V10.6667C4.02295 9.95942 4.30367 9.28115 4.80335 8.78105C5.30303 8.28095 5.98074 8 6.6874 8H14.6807" stroke="#B6CFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.0098 4H28.0031V12" stroke="#B6CFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.3486 18.6667L28.0031 4" stroke="#B6CFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </a>
          </div>
        </Grid>
        
    </Grid>
  );
}

export default Projects;
