import React from "react";
import styles from "./button.module.css";


export default function Button(props) {
 
  const [colorState, setColorState] = React.useState("purple");

  let styleButton = {
    padding: props.padding,
    backgroundColor: colorState,
  };

  function handleClick(evt) {
    console.log("Evento click");
   
    setColorState("red");
  }

  return (
    <button onClick={handleClick} style={styleButton} className={styles.btn}>
      {props.children}
    </button>
  );
}