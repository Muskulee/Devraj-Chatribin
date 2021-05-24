import React,{useState, useEffect} from "react";

import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//Importing Components
import categoriesIllustration from "../../assets/illustrations/categoriesIllustration.svg";
import style from "./style";

const useStyles = makeStyles(style);

function Member({ image, title, text, stack}) {
  const classes = useStyles();
  
  return (
    <Grid container className={classes.section}>
        <Grid container xs={12} sm={6}>
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
          <div style={{background: '#121520',padding:'1rem 1rem',width:'125%',marginLeft:'-25%'}}>
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
        </Grid>
        
    </Grid>
  );
}

export default Member;
