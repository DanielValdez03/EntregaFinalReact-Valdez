import {useForm} from "react-hook-form"

export default function Contacto() {
  const {register, handleSubmit} = useForm()
  const enviar = (data) => console.log(data)
  return (
    <div className="d-flex flex-column gap-3 d-flex justify-content-center align-items-center m-4">
      <h1>CONTACTANOS</h1>
      <form className='d-flex flex-column' onSubmit={handleSubmit(enviar)}>
        <input type="text"className='m-2 formulario-checkout'  placeholder="Ingrese su Nombre" {...register("nombre")}/>
        <input type="email" className='m-2 formulario-checkout' placeholder="Ingrese su Email" {...register("email")}/>
        <input type="number" className='m-2 formulario-checkout' placeholder="Ingrese su Numero de Telefono" {...register("numero")}/>
        <button type="submit" className='m-2 formulario-checkout'>Enviar</button>
      </form>
    </div>
  )
}
