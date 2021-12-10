import { createContext, useEffect, useState } from "react";
import Data from "../data";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const producto = Data.items;
    if (producto) {
      setProducts(producto);
    } else {
      setProducts([]);
    }
  }, []);

  const value = {
    products: [products],
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
