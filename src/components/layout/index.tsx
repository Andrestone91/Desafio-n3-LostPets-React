import React from "react";
import { Outlet } from "react-router-dom";
import css from "./index.css";
import { Header } from "components/header";

function Layout(props) {
  return (
    <div className={css.root}>
      <Header>header. data:</Header>
      <Outlet />
    </div>
  );
}
export { Layout };
