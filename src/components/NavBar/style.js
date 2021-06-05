export default function style(theme) {
  return {
    appBar: {
      boxShadow: "none",
      zIndex: "10",
      transition: "0.7s",
      backdropFilter:'blur(5px)',
      background:'rgba(0, 0, 0, 0.4) !important'
    },
    navBar: {
      padding: "15px 0",
    },
    brandingLogo: {
      width: 50,
    },
    profilePicHolder:{
      display:"flex",
      justifyContent: "center",
    },
    profilePic:{
      borderRadius: "100%",
      border: "1px solid #5D5FEF",
      margin: "2rem auto"
    },
    navLinks: {
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: 80,
    },
    navLink: {
      textDecoration: "none",
      color: theme.palette.text.primary,
      fontWeight: 500,
    },
    navLinkHighlighted: {
      ...theme.palette.text.gradient,
      color: theme.palette.text.primary,
      textDecoration: "none",
      fontWeight: 600
    },
    joinDiscordBtn: {
      margin: "auto 0 auto auto",
    },
    menuBtn: {
      color: theme.palette.primary.gradient1,
    },
    mobileDrawer:{
      width: "80%",
    },
    mobileNav: {
      background: theme.palette.primary.main,
      height: "100%",
    },
    brandingTitle: {
      color: theme.palette.text.primary,
      ...theme.palette.text.gradient
    },
    brandingDesc: {
      margin: "0.2rem 0rem 0.5rem",
      color: theme.palette.text.tertiary,
    },
    listItem: {
      padding: "12px 16px",
      color: theme.palette.text.primary,
      cursor: "default",
      "& *": {
        color: theme.palette.text.primary,
      },
      background: "transparent",
      borderLeft: `2px solid transparent`,
    },
    listItemHighlighted: {
      padding: "12px 16px",
      color: theme.palette.text.primary,
      cursor: "default",
      "& *": {
        color: theme.palette.text.primary,
      },
      background: `${theme.palette.secondary.darkGrey} !important`,
      borderLeft: `2px solid ${theme.palette.primary.gradient1}`,
    },
    mobileJoinDiscordBtn: {
      width: "100%",
    },
    divider: {
      // background: theme.palette.primary.mainGradient,
      height: 10,
    },
    listItemIcon: {
      display: "flex",
      marginRight: 10,
    },
  };
}
