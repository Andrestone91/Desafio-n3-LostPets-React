import React from "react";
import { Outlet } from "react-router-dom";
import css from "./index.css";

const Andres: User = {
  name: "Andres",
};

function Layout(props) {
  return (
    <div className={css.root}>
      <header>header. data:</header>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}
export { Layout };
