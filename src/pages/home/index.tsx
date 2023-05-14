import React from "react";
import { TextTitle } from "ui/Texts";
import { Text } from "ui/Texts";
import { ButtonLocation } from "ui/buttons";
import css from "./index.css";

function Home() {
  return (
    <div className={css.contenedor}>
      <TextTitle children="Mascotas perdidas cerca tuyo"></TextTitle>
      <Text>
        Para ver las mascotas reportadas cerca tuyo necesitamos permiso para
        conocer tu ubicación.
      </Text>
      <ButtonLocation children="Dar mi Ubicacion"></ButtonLocation>
    </div>
  );
}
export { Home };
