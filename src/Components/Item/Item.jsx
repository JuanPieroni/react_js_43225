import "./Item.scss";

/* export const Item = ({ prod }) => { */
export const Item = ({ id, nombre, stock, desc, precio, img }) => {
    return (
        <>
            {
                <div style={{ backgroundColor: " " }} className=" mt-3   ">
                    <div className=" rounded-xl shadow-2xl  mt-10 p-6  ">
                        <h4>{nombre}</h4>
                        <img
                            className="rounded-md overflow-hidden shadow-xl  sm:h-48   "
                            src={img}
                            alt={nombre}
                        />
                        <div className="m-4  ">
                            <span className="   ">Precio: ${precio}</span>
                            <span className="    ">
                                Stock Disponible : {stock}
                            </span>
                        </div>

                        <button className="btn-primario">Detalles</button>
                    </div>
                </div>
            }
        </>
    );
};
