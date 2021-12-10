import React from "react";
import { Routes, Route } from "react-router-dom";
import { Inicio } from "./inicio/index";
import { ProductsList } from "./products/Index";

export const Paginas = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/products" element={<ProductsList />} />
      </Routes>
    </section>
  );
};
