import React,{useState} from "react";

import style from "./style";

//Importing Material UI Stuff
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(style);

function ContainedButton(props) {
  const classes = useStyles();
  const { size } = props;

  return (
    <Button
      {...props}
      style={{ padding: size === "large" ? "12px 50px" : "8px 22px" }}
      className={`${classes.containedBtn} ${props.className}`}
      variant="contained"
    >
      {props.children}
    </Button>
  );
}

function OutlinedButton(props) {
  const classes = useStyles();
  const { size } = props;
  
  const [background, setBackground] = useState("#5D5FEF")
  const [color, setColor] = useState("black")

  return (
    <Button
      
      style={{ padding: size === "large" ? "9px 50px" : "5px 22px" ,color: background, background: color}}
      className={classes.outlinedBtn}
      onMouseEnter={()=>{setBackground("#B6CFFF");setColor("#5D5FEF")}}
      onMouseLeave={()=>{setBackground("#5D5FEF");setColor("black")}}
      variant="outlined"
    >
      {props.children}
    </Button>
  );
}

export { ContainedButton, OutlinedButton };
