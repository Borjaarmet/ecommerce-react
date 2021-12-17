import React, { useContext } from "react";
import { DataContext } from "../../context/dataProvider";
import { ProductItem } from "./ProductItem";

export const ProductsList = () => {
  const value = useContext(DataContext);
  const [products] = value.products;

  return (
    <>
      <h1 className="title">Products</h1>
      <div className="products">
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              category={product.category}
              cantidad={product.cantidad}
            />
          );
        })}
      </div>
    </>
  );
};
