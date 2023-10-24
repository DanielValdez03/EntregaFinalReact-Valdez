import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection } from 'firebase/firestore'
import { dataBase } from '../firebase/data'
import FormulariosCompra from './FormulariosCompra'
import Brief from './Brief'

export default function Checkout() {
  const {carrito, precioTotalEnCarrito, vaciarCarrito} = useContext(CartContext)
  const [pedidoId, setPedidoId] = useState("")
  const referenciaPedidos = collection(dataBase, "Pedidos")
  const comprar = (data) => {
    const pedido = {
      usuario: data,
      productos: carrito,
      total: precioTotalEnCarrito()
    }
    addDoc(referenciaPedidos, pedido)
    .then((doc)=> { 
      setPedidoId(doc.id)
      vaciarCarrito()
    })
    
  }
  return ( 
  <div>{
    pedidoId ? 
    <Brief precioTotalEnCarrito={precioTotalEnCarrito} carrito={carrito} pedidoId={pedidoId}/> 
    :
    <FormulariosCompra comprar={comprar}/> 

  }
  </div>
  )
}
