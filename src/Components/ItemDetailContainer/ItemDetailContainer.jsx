import { useState, useEffect } from "react";

import { pedirDatos } from "../../funciones/pedirDatos";

import { useParams } from "react-router-dom";

import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [cargando, setCargando] = useState(true);

    const { itemId } = useParams();
    
    

    useEffect(() => {
        setCargando(true);
 
        pedirDatos()
            .then((res) => {
                setItem(res.find((prod) => prod.id === Number(itemId)));
            })
            .catch((err) => console.log(err))
            .finally(() => setCargando(false));
    }, [itemId]);
    return (
        <>
            {cargando ? (
                <p className="text-center">Cargando producto...</p>
            ) : (
                <ItemDetail {...item} />
            )}
        </>
    );
};
