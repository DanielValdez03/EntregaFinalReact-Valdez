import React from 'react'
import { Link } from 'react-router-dom'

function Item({producto}) {
  return (
    <div className="card">
              <img src={producto.imagen} className="card-img-top" alt={producto.titulo} />
              <div className="card-body">
                <h5 className="card-title">{producto.titulo}</h5>
                <p className="card-text">
                  {producto.descripcion}
                </p>
                <p className="card-text">
                  {producto.precio}
                </p>
                <p className="card-text">
                  {producto.categoria}
                </p>
                <Link to={`/item/${producto.id}`} className="btn btn-primary">
                  Detalles
                </Link>
              </div>
            </div>
  )
}

export default Item