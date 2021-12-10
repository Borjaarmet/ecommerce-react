import React from "react";
import { Link } from "react-router-dom";
import Cover from "../../images/inicio.jpeg";

export const Inicio = () => {
  return (
    <div className="inicio">
      <Link to="/">
        <h1>Inicio</h1>
      </Link>
      <Link to="/products">
        <h1>Productos</h1>
      </Link>
      <img src={Cover} alt="inicio" />
    </div>
  );
};
