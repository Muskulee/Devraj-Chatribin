import React from "react";

import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//Importing Components

import style from "./style";


const useStyles = makeStyles(style);

function Cards({ image, title, text }) {
  const classes = useStyles();
  
  return (
        <Grid container xs={12} sm={4} alignItems="flex-start" style={{paddingLeft:'1rem',paddingBottom:'3rem'}} >
          <img
            src={image}
            className={classes.categoriesIllustration}
            alt="Categories Illustration"
          />
           <Typography variant="h6" className={`${classes.description} ${classes.card__title} ${classes.textAlignLeft}`}>
               {title}
            </Typography>
            <Typography variant="subtitle1" className={`${classes.description} ${classes.secondaryDesc} ${classes.textAlignLeft}`}>
                {text}
            </Typography>
        </Grid>
  );
}

export default Cards;
