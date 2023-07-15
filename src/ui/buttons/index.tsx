import React from "react";
import css from "./index.css";

export function MainButton(props) {
  return (
    <button onClick={props.click} className={css.root}>
      {props.children}
    </button>
  );
}
