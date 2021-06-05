
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
      width:'125%',
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
    categoriesSection: {
      // [theme.breakpoints.down("sm")]: {
      //   display: "flex",
      // },
    },
    categoriesIllustration: {
      width: "80%",
      [theme.breakpoints.down("sm")]: {
        width:'100%',
        marginBottom:'10%',
        marginLeft: 0
      }
    },
    imageContainer: {
      display: "flex",
      justifyContent: "flex-end",
      backgroudColor: "red"
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
