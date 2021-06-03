import React, { useState, useEffect } from "react";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";

//Image Imports
import cardMeda from "../../assets/projects-page/Rectangle 172.png";

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
      <Grid style={{ marginBottom: 20 }}>
        <Box className={classes.cardSection}>
          <Box className={classes.cardWrapper}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={cardMeda}
                  title="Project 1"
                />
                <CardContent style={{ padding: "5px 0" }}>
                  <Typography gutterBottom variant="h5" component="h4">
                    Website Name
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Website
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Typography
              variant="h2"
              className={`${classes.cardNum} ${classes.title} ${classes.num}`}
            >
              01
            </Typography>
          </Box>
          <Box className={`${classes.cardWrapper} ${classes.alignedCard}`}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={cardMeda}
                  title="Project 1"
                />
                <CardContent style={{ padding: "5px 0" }}>
                  <Typography gutterBottom variant="h5" component="h4">
                    Website Name
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Website
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Typography
              variant="h2"
              className={`${classes.cardNum} ${classes.title} ${classes.num}`}
            >
              02
            </Typography>
          </Box>
        </Box>
        <Box className={classes.cardSection}>
          <Box className={classes.cardWrapper}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={cardMeda}
                  title="Project 1"
                />
                <CardContent style={{ padding: "5px 0" }}>
                  <Typography gutterBottom variant="h5" component="h4">
                    Website Name
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Website
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Typography
              variant="h2"
              className={`${classes.cardNum} ${classes.title} ${classes.num}`}
            >
              03
            </Typography>
          </Box>
          <Box className={`${classes.cardWrapper} ${classes.alignedCard}`}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={cardMeda}
                  title="Project 1"
                />
                <CardContent style={{ padding: "5px 0" }}>
                  <Typography gutterBottom variant="h5" component="h4">
                    Website Name
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Website
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Typography
              variant="h2"
              className={`${classes.cardNum} ${classes.title} ${classes.num}`}
            >
              04
            </Typography>
          </Box>
        </Box>
        <Box className={classes.cardSection}>
          <Box className={classes.cardWrapper}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={cardMeda}
                  title="Project 1"
                />
                <CardContent style={{ padding: "5px 0" }}>
                  <Typography gutterBottom variant="h5" component="h4">
                    Website Name
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Website
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Typography
              variant="h2"
              className={`${classes.cardNum} ${classes.title} ${classes.num}`}
            >
              05
            </Typography>
          </Box>
          <Box className={`${classes.cardWrapper} ${classes.alignedCard}`}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={cardMeda}
                  title="Project 1"
                />
                <CardContent style={{ padding: "5px 0" }}>
                  <Typography gutterBottom variant="h5" component="h4">
                    Website Name
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Website
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Typography
              variant="h2"
              className={`${classes.cardNum} ${classes.title} ${classes.num}`}
            >
              06
            </Typography>
          </Box>
        </Box>
        <Box className={classes.cardSection}>
          <Box className={classes.cardWrapper}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={cardMeda}
                  title="Project 1"
                />
                <CardContent style={{ padding: "5px 0" }}>
                  <Typography gutterBottom variant="h5" component="h4">
                    Website Name
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Website
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Typography
              variant="h2"
              className={`${classes.cardNum} ${classes.title} ${classes.num}`}
            >
              07
            </Typography>
          </Box>
          <Box className={`${classes.cardWrapper} ${classes.alignedCard}`}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={cardMeda}
                  title="Project 1"
                />
                <CardContent style={{ padding: "5px 0" }}>
                  <Typography gutterBottom variant="h5" component="h4">
                    Website Name
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Website
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Typography
              variant="h2"
              className={`${classes.cardNum} ${classes.title} ${classes.num}`}
            >
              08
            </Typography>
          </Box>
        </Box>
      </Grid>
    </div>
  );
};

export default ProjectsPage;
