import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextTitle } from "ui/Texts";
import { Text } from "ui/Texts";
import { MainButton } from "ui/buttons";
import css from "./index.css";
import { useLocation, useUser } from "hooks";
import { Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [location, setLocation] = useLocation();
  //const [user, setUser] = useUser();

  const handlerClick = async () => {
    navigator.geolocation.getCurrentPosition((e) => {
      const lng = e.coords.longitude as any;
      const lat = e.coords.latitude as any;
      setLocation({ lng, lat });
      navigate("/test");
    });
  };

  useEffect(() => {
    if (location) {
      console.log(location);
    }
  }, [location]);

  return (
    <div className={css.contenedor}>
      <TextTitle children="Mascotas perdidas cerca tuyo"></TextTitle>
      <Text>
        Para ver las mascotas reportadas cerca tuyo necesitamos permiso para
        conocer tu ubicación.
      </Text>

      <MainButton click={handlerClick} children="Dar mi Ubicacion"></MainButton>
      <div>{location.lat}</div>
    </div>
  );
}
export { Home };
