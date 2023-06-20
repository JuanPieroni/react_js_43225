import { useState, useEffect } from "react";
import "./ItemListContainer.scss";
import { pedirDatos } from "../../funciones/pedirDatos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setCargando(true)

        pedirDatos()
            .then((res) => {
                if (!categoryId) {
                    setProductos(res)
                } else {
                    setProductos(res.filter((item) => item.categoria === categoryId))
                }
            })
            .catch((err) => console.log(err))
            .finally(() => setCargando(false))
    }, [categoryId])
    return (
        <>
            <h1 className="titulo text-center  font-extrabold">
                {props.greetings}
            </h1>
            {cargando  ? (
                <p className="text-center">Cargando productos...</p>
            ) :
            <ItemList items={productos} /> }

        </>
    );
};

export default ItemListContainer;
