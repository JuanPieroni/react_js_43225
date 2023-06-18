import { useState, useEffect } from "react";
import "./ItemListContainer.scss";
import { pedirDatos } from "../../funciones/pedirDatos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
 

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([]);

    const { id } = useParams();

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
            <h1 className="titulo text-center  font-extrabold">
                {" "}
                {props.greetings}
            </h1>
            <ItemList items={productos} />
        </>
    );
};

export default ItemListContainer;
