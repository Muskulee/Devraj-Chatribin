import React from "react";

import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//Importing Components

import style from "./style";

import GithubEx from '../../assets/social-icons/githubEx.png'
import ExLink from '../../assets/social-icons/external-link.png'

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
            <a href={githubLink}><img src={GithubEx} style={{margin:'1rem 0.5rem'}} /></a>
            <a href={liveLink}><img src={ExLink} style={{margin:'1rem 0.5rem'}} /></a>
          </div>
        </Grid>
        
    </Grid>
  );
}

export default Projects;
