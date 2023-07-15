import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "components/layout";
import { Home } from "pages/home";
import { Pruebas } from "pages/testing";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/test",
        element: <Pruebas />,
      },
    ],
  },
]);

export { AppRoutes };
