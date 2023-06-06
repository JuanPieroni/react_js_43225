import { useState, useEffect } from "react";
import "./ItemListContainer.scss";
import { pedirDatos } from "../../funciones/pedirDatos";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ( props ) => {
 
    
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <h1 className="titulo">  {props.greetings }</h1>
            <ItemList items={productos} />
        </>
    );
};

export default ItemListContainer;
