import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/dataProvider";

export const ProductItem = ({ id, title, price, image, category }) => {
  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;

  return (
    <div className="product">
      <a href="/">
        <div className="product-img">
          <img src={image.default} alt={title}></img>
        </div>
      </a>
      <div className="product__footer">
        <h1>{title}</h1>
        <p>{category}</p>
        <p className="price">${price}</p>
      </div>
      <div className="buttons">
        <button className="btn" onClick={() => addCarrito(id)}>
          Añadir al carrito
        </button>
        <div>
          <a href="/" className="btn">
            Vista
          </a>
        </div>
      </div>
    </div>
  );
};
