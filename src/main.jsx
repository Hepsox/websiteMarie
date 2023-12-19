import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./app.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home.jsx";
import Projet from "./component/Projet.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projet/:slug",
        element: <Projet />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
