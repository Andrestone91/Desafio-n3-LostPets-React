import React from "react";
import css from "./index.css";
function TextTitle({ children }) {
  return (
    <div>
      <h1 className={css.title}>{children}</h1>
    </div>
  );
}

function Text(props) {
  return (
    <div>
      <p className={css.text}>{props.children}</p>
    </div>
  );
}
export { TextTitle, Text };
