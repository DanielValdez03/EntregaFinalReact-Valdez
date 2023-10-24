import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function CarritoItem() {
    const {carrito} = useContext(CartContext)
  return (
    carrito.map((producto)=> (<div className='carrito-container' key={producto.id}>
        <div className='card-carrito'><img src={producto.imagen} alt={producto.titulo} />
        <div className='card-description'>
        <h3>{producto.titulo}</h3>
        <p>Cantidad: {producto.cantidad}</p>
        <p>Precio Unitario: ${producto.precio}</p>
        <p>Precio Total: ${producto.precio * producto.cantidad}</p>
        </div>
        </div>
                </div>))
  )
}
