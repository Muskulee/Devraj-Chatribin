export default function style(theme) {
  return {
    footerBackground: {
      backgroundColor: "#121520",
      width:'100%',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
    },
    secondaryTitle:{
      paddingTop:'2rem',
      fontWeight:'600',
      "-webkit-text-fill-color":"transparent", /*Will override color (regardless of order) */
      "-webkit-text-stroke-width":"1px",
      "-webkit-text-stroke-color":"#B6CFFF", 
    },
    footer_desc: {
      display:'flex',
      padding:'2rem 0rem ',
      justifyContent:'center',
      textAlign:'center',
      width:'45%',
      [theme.breakpoints.down("md")]: {
        width:'60%',
      },
      [theme.breakpoints.down("sm")]: {
        width:'80%',
      },
      color: theme.palette.text.tertiary
    }
  }
}
