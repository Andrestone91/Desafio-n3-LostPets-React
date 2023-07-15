import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation, useUser } from "hooks";

function Pruebas() {
  const navigate = useNavigate();
  const [a, setA] = useLocation();
  const [userApi, setUserApi] = useUser();

  function handlerClik() {
    setA({ lng: "1", lat: "1" });
  }
  function back() {
    navigate("/");
  }
  useEffect(() => {
    if (a) {
      console.log(a);
    }
  }, [a]);

  async function apiData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/");
    const data = await res.json();
    console.log(data);
    const data1 = data[1];
    const user1 = {
      username: data1.username,
      website: data1.website,
    };
    setUserApi(user1);
  }

  return (
    <div>
      <h1>test: {a.lat}</h1>
      <button onClick={handlerClik}>add 1</button>
      <button onClick={back}>back</button>
      <button onClick={apiData}>api data</button>
      <div>
        <h1>username: {userApi.username}</h1>
        <h1>website: {userApi.website}</h1>
      </div>
    </div>
  );
}

export { Pruebas };
