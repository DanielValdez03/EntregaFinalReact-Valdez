import React, { useState } from 'react'
import AddItemButton from './AddItemButton'
export default function ItemDetail({item}) {
  const [cantidad, setCantidad] = useState(1)
  
  
const handleSumar = () => {
if(item.stock > cantidad){
  setCantidad(cantidad + 1)
}
}
const handleRestar = () => {
if(cantidad>1){
  setCantidad(cantidad - 1)
}
}

  return (
    <div className="card-detail mt-5 text-center" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={item.imagen} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{item.titulo}</h5>
        <h6 className='text-danger'>{item.categoria}</h6>
        <p className="card-text">{item.descripcion}</p>
        <p className="card-text"><small className="text-body-secondary">{item.precio}</small></p>
      </div>
    <div className='card-agregar d-flex flex-column align-items-center justify-content-center m-3'>
    <div className='card-agregar d-flex  align-items-center justify-content-center m-3'>
      <button className='button-cantidad' onClick={handleRestar}>-</button>
<p className='numero-cantidad'>{cantidad}</p>
<button className='button-cantidad' onClick={handleSumar}>+</button>
      </div>
      <AddItemButton item={item} cantidad={cantidad}/>
    
    </div>
    </div>
  </div>
</div>
  )
}
