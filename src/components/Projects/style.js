
export default function styles(theme) {
  return {
    section: {
      marginBottom: 120,
    },
    title: {
      display: "block",
      width: "100%",
      textAlign: "center",

      ...theme.palette.text.gradient
    },
    subtitle: {
      display: "block",
      width: "100%",
      color:theme.palette.text.primary
    },
    description: {
      margin: "auto",
      display: "block",
      width: "80%",
      textAlign: "center",
      fontSize: "1rem",
      color: theme.palette.text.tertiary
    },
    secondaryDesc: {
      color: theme.palette.text.tertiary,
      width: "100%",
    },
    textAlignLeft: {
      margin: 0,
      marginBottom: 20,
      textAlign: "left",
       [theme.breakpoints.down("xs")]: {
         textAlign: "left",
      },
    },
    content:{
      background: '#090B11',
      padding:'1rem 1rem 0.2rem 1rem',
      width:'120%',
      [theme.breakpoints.down("xs")]: {
        marginLeft:'0%',
        width:'100%',
        padding:'0rem 0rem',
        background:'transparent'
     },
    },
    heroSection: {
      height: "65vh",
      backgroundSize: "contain",
    },
    heroSectionContent: {
      width: "100%",
    },
    heroBtns: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      gap: 40,
      marginTop: 54,
      [theme.breakpoints.down("sm")]: {
         gap: 18,
      },
    },
    categoriesIllustration: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    categoriesSection:{
      zIndex: "1",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    imageContainer: {
      display: "flex",
      justifyContent: "flex-end",
      position: "relative",
      zIndex: "0",
      
      [theme.breakpoints.down("sm")]: {
        marginBottom:'2rem',
      }
    },
    imageOverlay:{
      position: "absolute",
      height: "100%",
      width: "100%",
      opacity: 0.2,
      transition: ".5s ease",
      backgroundColor: "rgba(255, 0, 0, 0.45)",
      backgroundColor: "#5D5FEF",
      "&:hover":{
        cursor: "pointer",
        opacity: 0,
      },
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
