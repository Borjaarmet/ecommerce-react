import React, { useContext } from "react";
import { DataContext } from "../../context/dataProvider";

export const Carrito = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito, setCarrito] = value.carrito;
  const [total] = value.total;

  const toggleFalse = () => {
    setMenu(false);
  };

  const show1 = menu ? "carritos show" : "carritos";
  const show2 = menu ? "carrito show" : "carrito";

  const removeProducto = (id) => {
    if (window.confirm("Quieres eliminar el producto?")) {
      carrito.forEach((item, index) => {
        if (item.id === id) {
          item.cantidad = 1;
          carrito.splice(index, 1);
        }
        setCarrito([...carrito]);
      });
    }
  };

  const resta = (id) => {
    carrito.forEach((item) => {
      if (item.id === id) {
        item.cantidad === 1 ? (item.cantidad = 1) : (item.cantidad -= 1);
      }
      setCarrito([...carrito]);
    });
  };

  const suma = (id) => {
    carrito.forEach((item) => {
      if (item.id === id) {
        item.cantidad += 1;
      }
      setCarrito([...carrito]);
    });
  };

  return (
    <div className={show1}>
      <div className={show2}>
        <div className="carrito-close" onClick={toggleFalse}>
          <box-icon name="x"></box-icon>
        </div>
        <h2>Su carrito</h2>

        <div className="carrito-center">
          {carrito.length === 0 ? (
            <h2> Su carrito esta vacío</h2>
          ) : (
            <>
              {carrito.map((producto) => {
                return (
                  <div className="carrito-item" key={producto.id}>
                    <img src={producto.image.default} alt="card" />
                    <div>
                      <h3>{producto.title}</h3>
                      <p className="price">{producto.price}</p>
                    </div>
                    <div>
                      <box-icon
                        name="up-arrow"
                        type="solid"
                        onClick={() => suma(producto.id)}
                      ></box-icon>
                      <p className="cantidad">{producto.cantidad}</p>
                      <box-icon
                        name="down-arrow"
                        type="solid"
                        onClick={() => resta(producto.id)}
                      ></box-icon>
                    </div>
                    <div className="remove-item">
                      <box-icon
                        name="trash"
                        onClick={() => removeProducto(producto.id)}
                      ></box-icon>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>

        <div className="carrito-footer">
          <h3>Total:${total}</h3>
          <button className="btn">Pagar</button>
        </div>
      </div>
    </div>
  );
};
