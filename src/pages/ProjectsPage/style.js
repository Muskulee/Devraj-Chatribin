export default function styles(theme) {
  return {
    title: {
      fontFamily: "philosopher",
      fontWeight: "900",
      textTransform: "uppercase",
      letterSpacing: "5px",
      "-webkit-text-fill-color":
        "transparent" /*Will override color (regardless of order) */,
      " -webkit-text-stroke": " .1px #B6CFFF",
    },
    num: {
      fontSize: "4rem",
    },
    section: {
      alignItems: "center",
      justifyContent: "center",
    },
    description: {
      margin: "10px auto",
      display: "block",
      width: "100%",
      fontSize: "1rem",
      textAlign: "center",
      color: "#63718A",
      marginBottom: "10%",
      [theme.breakpoints.down("sm")]: {
        padding: "0px 10% 0px 0px",
      },
    },
    cardSection: {
      maxWidth: "100vw",
      height: "80vh",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      [theme.breakpoints.down("sm")]: {
        height: "100vh",
        alignContent: "center",
      },
    },
    card: {
      position: "relative",
      maxWidth: 461,
      height: "max-content",
      backgroundColor: "transparent",
    },
    media: {
      maxWidth: 461,
      height: 250,
      background:
        "linear-gradient(115.68deg, rgba(0, 0, 0, 0.3) 0%, rgba(93, 95, 239, 0.3) 100%)",
    },
    cardNum: {
      position: "absolute",
      top: -40,
      left: 10,
      [theme.breakpoints.down("sm")]: {
        top: -38,
        left: 8,
      },
    },
    cardWrapper: {
      height: "max-content",
      width: 461,
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        marginTop: "40px",
      },
    },
    alignedCard: {
      alignSelf: "center",
    },
  };
}
