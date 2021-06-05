import React,{useEffect,useState} from "react";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";

//Importing Components
import { OutlinedButton } from "../../components/Buttons";

import scrollIcon from "../../assets/placeholders/Vector.png";
import VerticalTabs from "../../components/VerticalTabs";
import FullWidthTabs from "../../components/FullWidthTabs";
import Projects from "../../components/Projects";
import Cards from "../../components/Cards";

import Monitor from "../../assets/placeholders/monitor.png"
import UXDesign from "../../assets/placeholders/uxdesign.png"
import GraphicD from "../../assets/placeholders/graphic design.png"
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
        <div>
          <Typography variant="h6" gutterBottom className={classes.description}>Hi, my name is</Typography>
          <Typography variant="h2" className={classes.title}>Devraj Chatribin.</Typography>
          <Typography variant="h2" gutterBottom className={classes.stitle}>I build things for web.</Typography>
          <Typography variant="h6" gutterBottom className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <div className={classes.heroBtns}>
            <Button className={classes.aboutBtn} variant="contained" size="large">
              About Me
            </Button>
            <Button className={classes.projectBtn} size="large">
              My Projects
            </Button>
          </div>
          
        </div>
          
      </Grid>
      
      {/* Experience Section */}
      <Grid container className={`${classes.section} ${classes.ExpSection}`}>
          <Typography variant="h2" gutterBottom className={classes.secondaryTitle}>EXPERIENCE</Typography>
          {IsDesktop? <VerticalTabs /> : <FullWidthTabs/>}
          <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',width:'60%',margin:'2rem 0rem'}}>
            <img src={MicrosoftLogo} style={{width:'40%',objectFit:'contain',margin:'0rem 1rem'}}/>
            <img src={GoogleLogo} style={{width:'40%',objectFit:'contain',margin:'0rem 1rem'}}/>
            <img src={AppleLogo} style={{width:'40%',objectFit:'contain',margin:'0rem 1rem'}}/>
          </div>
      </Grid>

      {/* Projects Section */}
      <Grid container className={`${classes.section} ${classes.ProjectsSection}`}>
          <Typography variant="h2" gutterBottom className={classes.secondaryTitle}>PROJECTS</Typography>
          <Grid container className={classes.section}>
          <Projects image={OnTrack} title={"OnTrack - Opensource Hub of Notes"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"} stack={"JavaScript • React • MaterialUI"} />
          <Projects image={IndiCov} title={"IndiCov - A platform for all your covid needs."} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"} stack={"JavaScript • React • MaterialUI"} />
          <div style={{display:'flex',justifyContent:'center'}}>
            <OutlinedButton size="large">
              View All My Work
            </OutlinedButton>
          </div>
          </Grid>
      </Grid>

       {/* Services Section */}
       <Grid container className={`${classes.section} ${classes.ServicesSection}`}>
          <Typography variant="h2" gutterBottom className={classes.secondaryTitle}>SERVICES</Typography>
         
            <Grid container  >
                <Cards image={Monitor} title={"Web Development"} text={"Building responsive websites. Providing the users an enriching experience that responds to any device and screen size."}/>
                <Cards image={UXDesign} title={"UI/UX Designing"} text={"Designing user-centric, modern interfaces that shapes how the audience interacts with the product."} />
                <Cards image={GraphicD} title={"Graphic Designing"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."} />
            </Grid>
      </Grid>
      
    </div>
  );
}

export default HomePage;
