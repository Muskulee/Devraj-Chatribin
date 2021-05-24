export default function style(theme) {
    return {
        root: {
            display: "grid",
            gridTemplateColumns: "300px 1fr",
            color: theme.palette.text.tertiary
          },
          tabWrapper: {
            alignItems: "flex-start",
            // borderLeft: `2px solid ${theme.palette.text.secondary}`,
          },
          tab:{
            maxWidth: "100%",
            padding: "6px 16px",
            fontSize: "1rem",
            fontWeight: '200',
            textAlign:'left',
            textTransform: "unset !important",
            margin: "6px 0",
            "&.MuiTab-textColorInherit": {
              opacity: 1
            },
            "&.Mui-selected": {
              color:theme.palette.text.primary,
              background:"#7983961A",
              borderLeft:'2px solid #5D5FEF'
            },
          },
          tabIndicator: {
            width: "100%",
            background: '#798396',
            borderLeft: `2px solid #798396`,
            right: 'unset',
            left: 0,
            zIndex: -9,
          },
          inactiveBorder:{
            position: 'absolute',
            height: "100%",
            width: 2,
            left: 0,
            backgroundColor: "#798396",
            zIndex: -10,
          },
          tabpanel: {
            padding: "0 16px",
            "& h5": {
              color: theme.palette.text.primary,
            },
            "& h6": {
              color: theme.palette.text.tertiary,
            }
          },
          main:{
            textAlign:'start',
            color:'white',
            display:'flex',
            background:'#23272a',
            borderRadius:'10px 10px 0px 0px',
          },
          subject:{
            color: theme.palette.text.secondary,
            padding: 16
          }

    };
  }
  