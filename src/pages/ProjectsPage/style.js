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
      [theme.breakpoints.down("sm")]: {
        padding: "0px 10% 0px 0px",
      },
    },
  };
}
