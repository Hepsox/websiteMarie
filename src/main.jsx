import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import axios from "axios";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home.jsx";
import Projet from "./component/Projet.jsx";
import Admin from "./component/Admin.jsx";
import ProjetList from "./pages/admin/ProjetList.jsx";
import ProjetForm from "./pages/admin/ProjetForm.jsx";

import config from "../config";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const response = await axios.get(`${config.backend_url}/projet`);
          return response.data;
        },
      },
      {
        path: "/projet/:slug",
        element: <Projet />,
        loader: async ({ params }) => {
          const response = await axios.get(
            `${config.backend_url}/projet/${params.slug}`
          );
          return response.data;
        },
      },
    ],
  },
  // {
  //   path: "/admin",
  //   element: <Admin />,
  //   children: [
  //     {
  //       path: "projets",
  //       element: <ProjetList />,
  //       loader: async () => {
  //         const response = await axios.get(`${config.backend_url}/projet`);
  //         return response.data;
  //       },
  //     },
  //     {
  //       path: "projets/ajouter",
  //       element: <ProjetForm />,
  //     },

  //     {
  //       path: "projets/:id/modifier",
  //       element: <ProjetForm />,
  //       loader: async ({ params }) => {
  //         const response = await axios.get(
  //           `${config.backend_url}/projet/id/${params.id}`
  //         );
  //         console.log(response.data);
  //         return response.data;
  //       },
  //     },
  //   ],
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
