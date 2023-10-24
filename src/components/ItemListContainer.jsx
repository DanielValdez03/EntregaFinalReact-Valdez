import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { dataBase } from "../firebase/data"


function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const [titulo, setTitulo] = useState("Productos")
    const categoria = useParams().categoria
    useEffect(() => {
      const referenciaProductos = collection(dataBase, "Productos")
      const filtrado = categoria ? query(referenciaProductos, where ("categoria", "==", categoria)) : referenciaProductos
      getDocs(filtrado)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => {return {...doc.data(), id: doc.id}})
        )
        setTitulo(categoria ? categoria : "Productos")
      })
    }, [categoria])
    
  return (
    <div>
        <ItemList productos={productos} titulo={titulo} />
    </div>
  )
}

export default ItemListContainer