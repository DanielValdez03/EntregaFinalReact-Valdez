import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function AddItemButton({item, cantidad}) {
    const {agregarAlCarrito} = useContext(CartContext)
  return (
    <div>
<button className='button-cantidad' onClick={() => agregarAlCarrito(item, cantidad)}>Agregar</button>
      </div>
  )
}
