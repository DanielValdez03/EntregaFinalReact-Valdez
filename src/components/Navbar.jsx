import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="/">GoldenBoy Camisetas</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link text-white" aria-current="page" to="/">Productos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/productos/remeras">Remeras</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/productos/buzos">Buzos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/productos/pantalones">Pantalones</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/productos/medias">Medias</Link>
        </li>
      </ul>
    </div>
    <CartWidget />
  </div>
</nav>
  )
}
