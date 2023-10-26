import React, {  useState } from 'react'
import { dataBase } from '../firebase/data'
import { doc, getDoc } from 'firebase/firestore'

export default function Brief({pedidoId}) {
  const [productosFactura, setProductosFacturas] = useState([])
  const [ totalFactura, setTotalFactura] = useState(0)
  
  

    const referenciaFactura = doc(dataBase, "Pedidos", pedidoId)
  getDoc(referenciaFactura)
  .then((resp)=> {
    const data = resp.data();
        const productos = data.productos || [];
        const total = data.total || 0;
        setProductosFacturas(productos)
        setTotalFactura(total)
  }
  )
  
  

  return (
    <div className='checkout-container'>
          <h1>Gracias Por Su Compra</h1>
          <p>Id de compra: {pedidoId}</p>
          <h2>Productos Comprados:</h2>
          <ul>
            {productosFactura && productosFactura.length > 0 && productosFactura.map((prod) => (
              <li key={prod.id}>
                <p>Nombre: {prod.titulo}</p>
                <p>Cantidad: {prod.cantidad}</p>
                <p>Precio unitario: ${prod.precio}</p>
                <p>Total: ${prod.precio * prod.cantidad}</p>
                
              </li>
            ))
            }
            
          </ul>
          <p>Precio Total: ${totalFactura}</p>
        </div>
  )
}
