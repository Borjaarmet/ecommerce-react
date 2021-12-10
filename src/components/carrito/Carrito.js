import React from "react";

export const Carrito = () => {
  return (
    <div className="carritos">
      <div className="carrito">
        <div className="carrito-close">
          <box-icon name="x"></box-icon>
        </div>
        <h2>Su carrito</h2>
        <div className="carrito-center">
          <div className="carrito-item">
            <img></img>
          </div>
        </div>
      </div>
    </div>
  );
};
