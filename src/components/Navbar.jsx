import React from 'react'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand text-white" to="/">GoldenBoy Camisetas</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link text-white" aria-current="page" to="/productos">Productos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/productos/remeras">Remeras</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/productos/buzos">Buzos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/productos/pantalones">Pantalones</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/productos/medias">Medias</NavLink>
        </li>
      </ul>
    </div>
    <CartWidget />
  </div>
</nav>
  )
}
