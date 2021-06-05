import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import style from "./style";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import { MenuRounded } from "@material-ui/icons";
import {
  AppBar,
  Container,
  Grid,
  Hidden,
  IconButton,
  Drawer,
  List,
  ListItem,

  Divider,
  useScrollTrigger,
  Typography
} from "@material-ui/core";

//Import Nav Routes Data
import routesData from "../../routes/routesData";

//Importing assets
import brandingLogo from "../../assets/branding-logos/dc logo.png";
import profilePic from "../../assets/branding-logos/profile pic.png";

//Importing Components
import { ContainedButton, OutlinedButton } from "../Buttons";

import {darkTheme, createMuiTheme} from "../../theme";

const useStyles = makeStyles(style);
function NavBar(props) {
  const classes = useStyles();
  const history = useHistory();
  const { children, window } = props;
  const [pathname, setPathname] = useState(history.location.pathname),
    [drawerOpen, setDrawerOpen] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  useEffect(() => {
    setPathname(history.location.pathname);
    history.listen(() => {
      setPathname(history.location.pathname);
    });
  }, []);

  return (
    <>
      <AppBar 
        position="sticky" 
        className={classes.appBar} 
      >
        <Container className={classes.navBarBackground}>
          <Grid container className={classes.navBar}>
            <Grid container xs={1}>
              <img
                className={classes.brandingLogo}
                src={brandingLogo}
                alt="branding-logo"
              />
            </Grid>
            <Grid container xs={9}>
              <Hidden mdDown>
                <div className={classes.navLinks}>
                  {routesData.map((data, index) => (
                    <div key={`link-index-${index}`}>
                      {data.showOnHeader && (
                        <Link
                          to={data.pageURL}
                        >
                          <Typography
                            className={
                              data.pageURL !== pathname
                                ? classes.navLink
                                : classes.navLinkHighlighted
                            } 
                            variant="subtitle1"
                          >{data.pageName}</Typography>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </Hidden>
            </Grid>

            <Grid container xs={2}>
              <div className={classes.joinDiscordBtn}>
                <Hidden smDown>
                  
                  <OutlinedButton>
                      Resume
                  </OutlinedButton>
                </Hidden>
                <Hidden smUp>
                  <IconButton
                    className={classes.menuBtn}
                    onClick={() => setDrawerOpen(!drawerOpen)}
                  >
                    <MenuRounded />
                  </IconButton>
                </Hidden>
              </div>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
      <Drawer
        anchor={"right"}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List className={classes.mobileNav}>
          <ListItem>
            <div className={classes.branding}>
              <div className={classes.profilePicHolder}>
                <img className={classes.profilePic} src={profilePic} alt="branding-logo" />
              </div>
              <div className={classes.brandingInfo}>
                <Typography variant="h4" className={classes.brandingTitle}>Devraj Chatribin</Typography>
                <Typography variant="subtitle1" className={classes.brandingDesc}>
                  Web Developer | UI/UX Designer
                </Typography>
              </div>
            </div>
          </ListItem>
          {routesData.map((data, index) => (
            <>
              {data.showOnHeader && (
                <>
                  <Link to={data.pageURL}>
                    <ListItem 
                      button 
                      focusVisible={false}
                      className={
                        data.pageURL !== pathname
                          ? classes.listItem
                          : classes.listItemHighlighted
                      } 
                      key={data.pageName}>
                      <Typography className={classes.listItemIcon}>{data.icon}</Typography>
                      <Typography variant="subtitle1">{data.pageName}</Typography>
                    </ListItem>
                  </Link>
                  <Divider className={classes.divider} />
                </>
              )}
            </>
          ))}
          <ListItem>
            <ContainedButton
              href="https://discord.gg/druweDMn3s"
              target="_blank"
              className={classes.mobileJoinDiscordBtn}
            >
              <Typography variant="h6">Resume</Typography>
            </ContainedButton>
            
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default NavBar;
