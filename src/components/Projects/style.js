
export default function styles(theme) {
  return {
    section: {
      alignItems: "center",
      justifyContent: "center",
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
      textAlign: "center",
      color:theme.palette.text.primary
    },
    description: {
      margin: "auto",
      display: "block",
      width: "80%",
      textAlign: "center",
      color: theme.palette.text.tertiary
    },
    secondaryDesc: {
      color: theme.palette.text.tertiary,
      width: "100%",
    },
    textAlignLeft: {
      margin: 0,
      marginBottom: 24,
      textAlign: "right",
       [theme.breakpoints.down("md")]: {
         textAlign: "left",
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
