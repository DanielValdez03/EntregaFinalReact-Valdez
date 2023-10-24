import { createContext, useEffect, useState, } from "react"

export const CartContext = createContext()

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState(carritoInicial);
    const agregarAlCarrito = (item, cantidad) => {
      const itemAgregadoAlCarrito = {...item, cantidad}
      const nuevoCarrito = [...carrito]
      const yaEstaEnElCarrito = nuevoCarrito.find((producto)=> producto.id === itemAgregadoAlCarrito.id)
      
      if(yaEstaEnElCarrito){
        yaEstaEnElCarrito < item.stock ?
          yaEstaEnElCarrito.cantidad += cantidad : alert("producto sin stock")
      }else{
       nuevoCarrito.push(itemAgregadoAlCarrito)
      }
      setCarrito(nuevoCarrito)
      
    };
    const agregarCantidadAlCarrito = () => carrito.reduce((acc, prod)=> acc + prod.cantidad, 0);
    const precioTotalEnCarrito = () => carrito.reduce((acc, prod)=> acc + prod.cantidad * prod.precio, 0)
    const vaciarCarrito = () => setCarrito([])
    useEffect(() => {
     localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])
    

      return (
        <CartContext.Provider value={{carrito,agregarAlCarrito, agregarCantidadAlCarrito, precioTotalEnCarrito, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
      )
}