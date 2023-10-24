import React from 'react'
import { useForm } from 'react-hook-form'

export default function FormulariosCompra({comprar}) {
    const {register, handleSubmit} = useForm()
  return (
    <div className='checkout-container'>
      <h1>Finalizar Compra :)</h1>
      <form className='d-flex flex-column align-items-center' onSubmit={handleSubmit(comprar)}>
    <input type="text"className='m-2 formulario-checkout'  placeholder="Ingrese su Nombre" {...register("nombre")}/>
    <input type="email" className='m-2 formulario-checkout' placeholder="Ingrese su Email" {...register("email")}/>
    <input type="number" className='m-2 formulario-checkout' placeholder="Ingrese su Numero de Telefono" {...register("numero")}/>
    <button type="submit" className='m-2 button-pagar'>Pagar</button>
  </form>
  </div>
  )
}
