import React,{useEffect,useState} from "react";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

//Importing Components
import { OutlinedButton } from "../../components/Buttons";

import scrollIcon from "../../assets/placeholders/Vector.png";
import VerticalTabs from "../../components/VerticalTabs";
import FullWidthTabs from "../../components/FullWidthTabs";
import Projects from "../../components/Projects";

import OnTrack from "../../assets/placeholders/OnTrack.png"
import IndiCov from "../../assets/placeholders/IndiCov.png"
import MicrosoftLogo from "../../assets/social-icons/microsoft 1.png"
import GoogleLogo from "../../assets/social-icons/google-2015 1.png"
import AppleLogo from "../../assets/social-icons/apple-11 1.png"

import style from "./style";

const useStyles = makeStyles(style);
function HomePage() {
  const classes = useStyles();
  const [IsDesktop, setIsDesktop] = useState(window.innerWidth > 900)
  console.log(window.innerWidth)
  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 900);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <div className={classes.homePage}>
      {/* Hero Section */}
      <Grid container className={`${classes.section} ${classes.heroSection}`}>
        <div className={classes.heroSectionContent}>
          <Typography variant="h6" gutterBottom className={classes.description}>Hi, my name is</Typography>
          <Typography variant="h2" className={classes.title}>Devraj Chatribin.</Typography>
          <Typography variant="h2" className={classes.stitle}>I build things for web.</Typography>
          <Typography variant="h6" gutterBottom className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          </Typography>
          <div className={classes.heroBtns}>
            <OutlinedButton size="large">
              Get In Touch
            </OutlinedButton>
          </div>
          
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
            <img src={scrollIcon}/>
          </div>
      </Grid>
      
      {/* Experience Section */}
      <Grid container className={`${classes.section} ${classes.ExpSection}`}>
          <Typography variant="h2"  className={classes.secondaryTitle}>EXPERIENCE</Typography>
          {IsDesktop? <VerticalTabs /> : <FullWidthTabs/>}
          <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',width:'60%'}}>
            <img src={MicrosoftLogo} style={{width:'10rem',objectFit:'contain'}}/>
            <img src={GoogleLogo} style={{width:'8rem',objectFit:'contain'}}/>
            <img src={AppleLogo} style={{width:'8rem',objectFit:'contain'}}/>
          </div>
      </Grid>

      {/* Projects Section */}
      <Grid container className={`${classes.section} ${classes.ProjectsSection}`}>
          <Typography variant="h2" gutterBottom style={{padding:'5rem 0rem'}}  className={classes.secondaryTitle}>PROJECTS</Typography>
          <Grid container className={classes.section}>
          <Projects image={OnTrack} title={"OnTrack - Opensource Hub of Notes"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"} stack={"JavaScript  React   MaterialUI"} />
          <Projects image={IndiCov} title={"IndiCov - A platform for all your covid needs."} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"} stack={"JavaScript  React   MaterialUI"} />
        

      </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
