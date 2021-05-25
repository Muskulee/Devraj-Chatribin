import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container, Tabs, Tab, Typography, Box} from '@material-ui/core';
import style from './style';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
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
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
} 

const useStyles = makeStyles(style)


export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container disableGutters className={classes.root}>
      <Container disableGutters className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="full width tabs example"
          TabIndicatorProps={{className: classes.tabIndicator}}
          className={classes.tabs}
        >
          <Tab className={classes.tab} label="Company Name" {...a11yProps(0)} />
          <Tab className={classes.tab} label="Company Name" {...a11yProps(1)} />
          <Tab className={classes.tab} label="Company Name" {...a11yProps(2)} />
          <Tab className={classes.tab} label="Company Name" {...a11yProps(3)} />
          <Tab className={classes.tab} label="Company Name" {...a11yProps(4)} />
          <Tab className={classes.tab} label="Company Name" {...a11yProps(5)} />
        </Tabs>
        <div className={classes.inactiveBorder}></div>
      </Container>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction} className={classes.tabpanel}>
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


        <TabPanel value={value} index={1} dir={theme.direction} className={classes.tabpanel}>
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


        <TabPanel value={value} index={2} dir={theme.direction} className={classes.tabpanel}>
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


        <TabPanel value={value} index={3} dir={theme.direction} className={classes.tabpanel}>
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


        <TabPanel value={value} index={4} dir={theme.direction} className={classes.tabpanel}>
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


        <TabPanel value={value} index={5} dir={theme.direction} className={classes.tabpanel}>
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


      </SwipeableViews>
    </Container>
  );
}