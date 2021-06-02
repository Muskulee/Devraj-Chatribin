import React, { useState, useEffect } from "react";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import style from "./style";
const useStyles = makeStyles(style);

const ProjectsPage = () => {
  const classes = useStyles();
  const [IsDesktop, setIsDesktop] = useState(window.innerWidth > 900);
  console.log(window.innerWidth);
  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 900);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <div>
      <Grid container className={`${classes.section}`}>
        <Typography variant="h2" className={classes.title}>
          Projects
        </Typography>
        <Typography variant="h6" gutterBottom className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor
        </Typography>
      </Grid>
    </div>
  );
};

export default ProjectsPage;
