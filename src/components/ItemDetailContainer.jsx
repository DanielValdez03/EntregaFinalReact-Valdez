import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { dataBase } from '../firebase/data'

function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    const id = useParams().id
    useEffect(() => {
      const referenciaItem = doc(dataBase, "Productos", id)
      getDoc(referenciaItem)
      .then((resp)=> {setItem({...resp.data(), id: resp.id}) })
     }, [id])
    
  return (
    <div className='d-flex align-items-center justify-content-center'>
        {
            item &&
            <ItemDetail item={item}/>
            }
    </div>
  )
}

export default ItemDetailContainer