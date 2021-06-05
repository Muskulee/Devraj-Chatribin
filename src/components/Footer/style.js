export default function style(theme) {
  return {
    footerBackground: {
      backgroundColor: "#090B11",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    footerBackground__main: {
      margin: "2rem 0rem 3rem 0rem",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      [theme.breakpoints.down("sm")]: {
        margin: "2rem 0rem 0rem 0rem",
      },
    },
    secondaryTitle: {
      fontSize: "5.6rem",
      fontFamily: "philosopher",
      fontWeight: "bold",
      textAlign: "center",
      margin: "0rem",
      letterSpacing: "5px",
      "-webkit-text-fill-color":
        "transparent" /*Will override color (regardless of order) */,
      " -webkit-text-stroke": " 1px #63718A",
      [theme.breakpoints.down("sm")]: {
        fontSize:  "3.5rem",
      },
    },
    footer_desc: {
      display: "flex",
      padding: "2rem 0rem ",
      justifyContent: "center",
      textAlign: "center",
      fontWeight: "400",
      width: "45%",
      [theme.breakpoints.down("md")]: {
        width: "60%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "80%",
      },
      color: theme.palette.text.tertiary,
    },
    footer_author: {
      display: "flex",
      padding: "2rem 0rem ",
      justifyContent: "center",
      textAlign: "center",
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        display: "block"
      },
    }
  };
}
