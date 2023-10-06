import React from 'react'

export default function ItemDetail({item}) {
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
    </div>
  </div>
</div>
  )
}
