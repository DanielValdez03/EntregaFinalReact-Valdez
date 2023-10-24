import React from "react";
import Item from "./Item";
import {capitalizarPrimeraLetra} from "../helpers/capitalizaPrimeraLetra"

function ItemList({ productos, titulo }) {
  return (
    <div className="row gap-3 d-flex justify-content-center m-4">
      <h1>{capitalizarPrimeraLetra(titulo)}</h1>
      {productos &&
        productos.map((producto) => {
          return (
            <Item key={producto.id} producto={producto}/>
          );
        })}
    </div>
  );
}

export default ItemList;
