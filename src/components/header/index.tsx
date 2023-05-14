import React from "react";
import css from "components/header/index.css";

function Header({ children }) {
  return <header className={css.contenedor}>{children}</header>;
}
export { Header };
