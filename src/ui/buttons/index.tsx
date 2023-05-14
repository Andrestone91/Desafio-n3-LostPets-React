import React from "react";
import css from "./index.css";

function handlerbutton() {
  navigator.geolocation.getCurrentPosition((e) => {
    const lng = e.coords.longitude as any;
    const lat = e.coords.latitude as any;
    console.log(lng, lat);
  });
}
function ButtonLocation(props) {
  return (
    <button onClick={handlerbutton} className={css.root}>
      {props.children}
    </button>
  );
}
export { ButtonLocation };
