import React from "react";
import { Header } from "./components/header/Header";
import "./index.css";
import "boxicons";
import { BrowserRouter } from "react-router-dom";
import { Paginas } from "./components/Paginas";
import { DataProvider } from "./context/dataProvider";
import { Carrito } from "./components/carrito/Carrito";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Carrito />
          <Paginas />
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
