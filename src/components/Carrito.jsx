import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CarritoItem from './CarritoItem'
import { Link } from 'react-router-dom'


function Carrito() {
  const {carrito, precioTotalEnCarrito, vaciarCarrito} = useContext(CartContext)
  const handleVaciar = () => vaciarCarrito()
  return (
    <div>
      {
        carrito.length > 0 ? <>
        <CarritoItem/>
        <h2 className='titulo-carrito'>Precio Total a Pagar: ${precioTotalEnCarrito()}</h2>
        <br />
        <button onClick={handleVaciar} className='button-vaciar'>Vaciar Carrito</button>
        <br />
        <Link to="/checkout" className='button-vaciar text-decoration-none text-black'>Ir al pago</Link>
        </>
         : 
        <h2 className='titulo-carrito'>El Carrito esta Vacio</h2>
      }
    </div>
  )
}

export default Carrito