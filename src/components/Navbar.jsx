import React from 'react'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark ">
  <div className="container-fluid">
    <NavLink className="navbar-brand text-white" to="/">GoldenBoy Camisetas</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav d-flex align-items-center justify-content-center">
        <li className="nav-item dropdown">
          <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><Link className="dropdown-item" to="/productos">Ver Todos</Link></li>
            <li><Link className="dropdown-item" to="/productos/remeras">Remeras</Link></li>
            <li><Link className="dropdown-item" to="/productos/pantalones">Pantalones</Link></li>
            <li><Link className="dropdown-item" to="/productos/buzos">Buzos</Link></li>
            <li><Link className="dropdown-item" to="/productos/medias">Medias</Link></li>
          </ul>
        </li>
        <li className="nav-item"><Link className="nav-link text-light" to="/nosotros">Nosotros</Link></li>
        <li className="nav-item"><Link className="nav-link text-light" to="/contacto">Contacto</Link></li>
        <li className="nav-item"><CartWidget /></li>
        
      </ul>
    </div>
    
  </div>
</nav>
  )
}
