export default function styles(theme) {
  return {
    homePage:{
      background:'#0D0F19'
    },
    section: {
      alignItems: "center",
      justifyContent: "center",
    },
    section: {
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      display: "block",
      width: "100%",
      textAlign: "left",
      fontWeight:'600',
      color:'#5D5FEF',
    },
    stitle: {
      display: "block",
      width: "100%",
      textAlign: "left",
      fontWeight:'600',
      color:'#B6CFFF',
    },
    subtitle: {
      display: "block",
      width: "100%",
      textAlign: "center",
      ...theme.palette.text.gradient,
    },
    description: {
      margin: "auto",
      display: "block",
      width: "100%",
      padding:'0px 25% 0px 0px',
      textAlign: "left",

      color: '#63718A',
    },
    secondaryDesc: {
      color: theme.palette.text.secondary,
      width: "100%",
    },
    textAlignLeft: {
      margin: 0,
      marginBottom: 24,
      textAlign: "left",
      // [theme.breakpoints.down("sm")]: {
      //   textAlign: "center",
      // },
    },
    secondaryTitle:{
      fontWeight:'600',
      "-webkit-text-fill-color":"transparent", /*Will override color (regardless of order) */
      "-webkit-text-stroke-width":"1px",
      "-webkit-text-stroke-color":"#B6CFFF", 
    },
    heroSection: {
      height: "120vh",
      backgroundSize: "contain",
    },
    ExpSection: {
      height: "100vh",
      backgroundSize: "contain",
    },
    ProjectsSection: {
      height: "fit-content",
      backgroundSize: "contain",
    },
    ServicesSection: {
      margin:'15vh 0vh',
      backgroundSize: "contain",
    },
    heroSectionContent: {
      width: "100%",
    },
    heroBtns: {
      display: "flex",
      width: "100%",
      justifyContent: "start",
      gap: 40,
      marginTop: 54,
      [theme.breakpoints.down("sm")]: {
         gap: 18,
      },
    },
    categoriesSection: {
      // [theme.breakpoints.down("sm")]: {
      //   display: "flex",
      // },
    },
    categoriesIllustration: {
      marginLeft: "auto",
      width: "100%",
    },
    video: {
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        height: 300,
        // display: "flex",
      },
    },
    videoDesc: {
      marginTop: 40,
    },
  };
}
