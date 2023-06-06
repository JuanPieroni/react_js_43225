/* export const Item = ({ prod }) => { */

export const Item = ({id, nombre, cantidad, desc, precio, piel, img }) => {
    return (
        <div>
            <h4>{nombre}</h4>
            <img src={img} alt={nombre} />
            <p>{desc}</p>
            <p>Precio: ${ precio}</p>
            <button>Detalles</button>
        </div>
    );
};
