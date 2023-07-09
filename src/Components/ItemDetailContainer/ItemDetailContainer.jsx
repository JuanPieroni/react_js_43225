import { useState, useEffect } from "react"

import { useParams } from "react-router-dom"

import { ItemDetail } from "../ItemDetail/ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
     
    const [cargando, setCargando] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setCargando(true)

        //1.- REFERENCIA

        const itemRef = doc(db, "productos", itemId)

        //2  SOlicitar esa referencia

        getDoc(itemRef)
        .then((doc) => {

            const itemDetail = { ...doc.data(), id: doc.id }
   
            setItem(itemDetail)
        })
        .catch((err) => console.log(err))
            .finally(() => setCargando(false))
    }, [itemId])
    return (
        <>
              {cargando ? (
                <p className="text-center">Cargando producto...</p>
            ) : (
                <ItemDetail {...item} />
            )}
        </>
    )
}
