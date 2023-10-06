import { useEffect, useState } from "react"
import { pedirDatos } from "../helpers/pedirDatos"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const categoria = useParams().categoria
    useEffect(() => {
      pedirDatos()
      .then((resp)=> {
        if(categoria){
          setProductos(resp.filter((producto)=> producto.categoria === categoria))
        }else{
          setProductos(resp)
        }

      })
    }, [categoria])
    
  return (
    <div>
        <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer