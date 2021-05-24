import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {Container, Tabs, Tab, Typography, Box} from "@material-ui/core";
import style from './style'
const useStyles = makeStyles(style);

function TabPanel(props) {
    const classes = useStyles();
    const { children, value, index, ...other } = props;
    return (
      <div className={classes.tabpanel} role="tabpanel" id={`vertical-tabpanel-${index}`}>
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
  };

  export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Container disableGutters>
      <div className={classes.root}>
        <div>
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            color="primary"
            TabIndicatorProps={{className: classes.tabIndicator}}
          >
            <Tab label="Company Name" classes={{root: classes.tab, wrapper: classes.tabWrapper}} />
            <Tab label="Company Name" classes={{root: classes.tab, wrapper: classes.tabWrapper}} />
            <Tab label="Company Name" classes={{root: classes.tab, wrapper: classes.tabWrapper}} />
            <Tab label="Company Name" classes={{root: classes.tab, wrapper: classes.tabWrapper}} />
            <Tab label="Company Name" classes={{root: classes.tab, wrapper: classes.tabWrapper}} />
            <Tab label="Company Name" classes={{root: classes.tab, wrapper: classes.tabWrapper}} />
            <div className={classes.inactiveBorder}></div>
            
          </Tabs>
        </div>
        
        <div>
          
          <TabPanel value={value} index={0} className={classes.tabpanel}>
            <Typography variant="h5" gutterBottom style={{display:'flex'}}>
              Position @<Typography variant="h5" gutterBottom style={{color:'#5D5FFF'}}>Company Name 1</Typography>
            </Typography>
            <Typography variant="h6" gutterBottom>
            May 2020 - Present
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            </Typography>
            <br></br>
            <Typography variant="subtitle1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            </Typography>
          </TabPanel>


          <TabPanel value={value} index={1} className={classes.tabpanel}>
          <Typography variant="h5" gutterBottom style={{display:'flex'}}>
              Position @<Typography variant="h5" gutterBottom style={{color:'#5D5FFF'}}>Company Name 2</Typography>
            </Typography>
            <Typography variant="h6" gutterBottom>
            May 2020 - Present
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            </Typography>
            <br></br>
            <Typography variant="subtitle1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            </Typography>
          </TabPanel>


          <TabPanel value={value} index={2} className={classes.tabpanel}>
            <Typography variant="h5" gutterBottom style={{display:'flex'}}>
              Position @<Typography variant="h5" gutterBottom style={{color:'#5D5FFF'}}>Company Name 3</Typography>
            </Typography>
            <Typography variant="h6" gutterBottom>
            May 2020 - Present
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            </Typography>
            <br></br>
            <Typography variant="subtitle1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            </Typography>
          </TabPanel>


          <TabPanel value={value} index={3} className={classes.tabpanel}>
            <Typography variant="h5" gutterBottom style={{display:'flex'}}>
              Position @<Typography variant="h5" gutterBottom style={{color:'#5D5FFF'}}>Company Name 4</Typography>
            </Typography>
            <Typography variant="h6" gutterBottom>
            May 2020 - Present
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            </Typography>
            <br></br>
            <Typography variant="subtitle1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            </Typography>
          </TabPanel>


          <TabPanel value={value} index={4} className={classes.tabpanel}>
          <Typography variant="h5" gutterBottom style={{display:'flex'}}>
              Position @<Typography variant="h5" gutterBottom style={{color:'#5D5FFF'}}>Company Name 5</Typography>
            </Typography>
            <Typography variant="h6" gutterBottom>
            May 2020 - Present
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            </Typography>
            <br></br>
            <Typography variant="subtitle1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            </Typography>
          </TabPanel>


          <TabPanel value={value} index={5} className={classes.tabpanel}>
            <Typography variant="h5" gutterBottom style={{display:'flex'}}>
                Position @<Typography variant="h5" gutterBottom style={{color:'#5D5FFF'}}>Company Name 6</Typography>
              </Typography>
              <Typography variant="h6" gutterBottom>
              May 2020 - Present
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              </Typography>
              <br></br>
              <Typography variant="subtitle1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              </Typography>
        </TabPanel>

        </div>
      </div>
      </Container>
    );
  }