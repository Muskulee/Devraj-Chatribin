export default function styles(theme) {
  return {
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
      fontWeight: "600",
      color: "#5D5FEF",
      fontFamily: "philosopher",
    },
    stitle: {
      display: "block",
      width: "100%",
      textAlign: "left",
      fontWeight: "600",
      color: "#B6CFFF",
      fontFamily: "philosopher",
    },
    subtitle: {
      display: "block",
      width: "100%",
      textAlign: "center",
      ...theme.palette.text.gradient,
    },
    description: {
      margin: "0rem",
      display: "block",
      width: "60%",
      fontSize: "1rem",
      textAlign: "left",
      color: "#63718A",
      [theme.breakpoints.down("sm")]: {
        width: "100%"
      },
    },
    secondaryDesc: {
      color: theme.palette.text.secondary,
      width: "100%",
    },
    textAlignLeft: {
      margin: 0,
      marginBottom: 24,
      textAlign: "left",
    },
    secondaryTitle: {
      fontSize: "5.6rem",
      fontFamily: "philosopher",
      fontWeight: "bold",
      letterSpacing: "5px",
      "-webkit-text-fill-color":
        "transparent" /*Will override color (regardless of order) */,
      " -webkit-text-stroke": " 1px #63718A",
      [theme.breakpoints.down("sm")]: {
        fontSize:  "3.5rem",
      },
    },
    heroSection: {
      height: "80vh",
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
      margin: "10vh 0vh",
      backgroundSize: "contain",
    },
    heroSectionContent: {
      width: "100%",
    },
    heroBtns: {
      display: "flex",
      width: "100%",
      justifyContent: "start",
      gap: 20,
      marginTop: 40,
      [theme.breakpoints.down("sm")]: {
        gap: 18,
      },
    },
    aboutBtn: {
      backgroundColor: "#5D5FEF",
      color: "#B6CFFF",
      width: 180,
      height: 50,
      borderRadius: 4,
      "&:hover": {
        backgroundColor: "transparent",
        border: "2px solid #5D5FEF",
        color: "#5D5FEF"
      }
    },
    projectBtn: {
      backgroundColor: "transparent",
      border: "2px solid #5D5FEF",
      color: "#5D5FEF",
      width: 180,
      height: 50,
      borderRadius: 4,
      "&:hover": {
        backgroundColor: "#5D5FEF",
        color: "#B6CFFF"
      }
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
