import { useState, useEffect } from "react";
import "./ItemListContainer.scss";

const MOCK = [
    {
        id: 1,
        nombre: "Acido Hialuronico",
        cantidad: 1,
        desc: "Ideal para las arrugas",
        precio: 2200,
        piel: "Seca",
        img: `./img/acid.jpg`,
    },

    {
        id: 3,
        nombre: "Aceite Cannabis",
        cantidad: 1,
        desc: "Analgesico Natural",
        precio: 1400,
        piel: "Seca",
        img: `./img/aceite.jpg`,
    },

    {
        id: 5,
        nombre: "Acondicionador",
        cantidad: 1,
        desc: "Sin aditivos!! ",
        precio: 1900,
        piel: "Seco",
        img: `./img/acond.png`,
    },

    {
        id: 7,
        nombre: "Combo + Jabonera",
        cantidad: 1,
        desc: "Aprovecha esta oferta!",
        precio: 1750,
        piel: "Seca",
        img: `/img/combo2.jpg`,
    },

    {
        id: 9,
        nombre: "Desodorante Natural",
        cantidad: 1,
        desc: "No deja manchas!",
        precio: 900,
        piel: "Seca",
        img: "deso.jpg",
    },

    {
        id: 11,
        nombre: "Mascarilla Facial",
        cantidad: 1,
        desc: "Para Pieles grasas",
        precio: 3000,
        piel: "Grasa",
        img: `./img/masca.jpg`,
    },

    {
        id: 13,
        nombre: "Crema Nicacinamida",
        cantidad: 1,
        desc: "Ultimos en stock!!",
        precio: 4100,
        piel: "Grasa",
        img: `./img/niaci.jpeg`,
    },

    {
        id: 15,
        nombre: "Shampoo Solido",
        cantidad: 1,
        desc: "Biodegradables",
        precio: 650,
        piel: "Seca",
        img: `./img/shampoo.jpeg`,
    },
    {
        id: 20,
        nombre: "Unguento Cannabis",
        cantidad: 1,
        desc: "Ideal Para Dolores",
        precio: 3500,
        piel: "Seca",
        img: "./img/unguentocr.jpg",
    },
];

const pedirDatos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(MOCK);
        }, 2000);
    });
};

const ItemListContainer = ({ saludo }) => {
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
        <div style={{ backgroundColor: "antiquewhite" }}>
            <h1 className="titulo">{saludo}</h1>
            <h2>Item List Container</h2>
            <hr />
            {productos.length === 0 ? (
                <p>Loading...</p>
            ) : (
                productos.map((prod) => (
                    <div key={prod.id}>
                        <h4>{prod.nombre}</h4>
                        <img src={prod.img} alt={prod.nombre} />
                        <p>{prod.desc}</p>
                        <p>Precio: ${prod.precio}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default ItemListContainer;
