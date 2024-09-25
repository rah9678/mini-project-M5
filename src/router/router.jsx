
import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import Pesquisar from "../pages/pesquisar/pesquisar";
import Reference from '../pages/reference/reference';
import Register from '../pages/register/register';


const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Página Não Encontrada</h1>
      <p>A rota que você está tentando acessar não existe.</p>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pesquisar",
    element: <Pesquisar />,
  },
  {
  path: "/reference",
  element: <Reference />,
},

  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },


]);

export default router;

