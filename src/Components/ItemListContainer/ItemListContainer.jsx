import { useState, useEffect } from "react"
import "./ItemListContainer.scss"

import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([])

    const [cargando, setCargando] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => { 
        setCargando(true)

        //1 ARMAR UNA REFERENCIA (SYNC)
        const productosRef = collection(db, "productos")
        const q = categoryId
            ? query(productosRef, where("categoria", "==", categoryId) )
            : productosRef
        //2 PETICION DE ESA REFERENCIA (ASYNC)
        getDocs(q)
            .then((resp) => {
                const items = resp.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }))

                setProductos(items)
            })
            .catch((err) => console.log(err))
            .finally(() => setCargando(false))
    }, [categoryId])

    return (
        <>
            <h1 className="titulo text-center  font-extrabold">
                {props.greetings}
            </h1>
            {cargando ? (
                <p className="text-center">Cargando productos...</p>
            ) : (
                <ItemList items={productos} />
            )}
        </>
    )
}

export default ItemListContainer
