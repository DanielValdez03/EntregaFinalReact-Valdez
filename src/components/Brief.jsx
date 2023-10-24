import React from 'react'

export default function Brief({pedidoId, carrito, precioTotalEnCarrito}) {
  return (
    <div className='checkout-container'>
          <h1>Gracias Por Su Compra</h1>
          <p>Id de compra: {pedidoId}</p>
          <h2>Productos Comprados:</h2>
          <ul>
            {carrito.map((prod) => (
              <li key={prod.id}>
                <p>Nombre: {prod.titulo}</p>
                <p>Cantidad: {prod.cantidad}</p>
                <p>Precio unitario: ${prod.precio}</p>
                <p>Total: ${prod.cantidad * prod.precio}</p>
              </li>
            ))}
          </ul>
          <p>Precio Total: ${precioTotalEnCarrito()}</p>
        </div>
  )
}
