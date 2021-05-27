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
    footerBackground__main:{
      margin:'2rem 0rem 3rem 0rem',
      width:'100%', 
      display:'flex',
      justifyContent:'center', 
      alignItems:'center',
      flexDirection:'column',
      [theme.breakpoints.down("sm")]: {
        margin:'2rem 0rem 0rem 0rem',
      },
    },
    secondaryTitle:{
      paddingTop:'1rem',
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
