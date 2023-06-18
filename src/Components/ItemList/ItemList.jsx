import { Item } from "../Item/Item";
import "./ItemList.scss";

const ItemList = ({ items }) => {


    
    return (
        <>
            <h2 className="text-center text-yaru">Productos</h2>
            <div
                style={{ backgroundColor: "lightyellow" }}
                className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10  gap-4 m-2   "
            >
                {items.length === 0 ? (
                    <p>Cargando Productos...</p>
                ) : (
                    items.map((prod) => <Item key={prod.id} {...prod} />)
                )}
            </div>
        </>
    );
};

export default ItemList;

//1ra opcion pasar el objeto entero
// items.map((prod) => <Item prod={prod} key={prod.id}/>

// segunda opcion, hacer un spread del objeto ( desparramarlo (?))
// en lugar de pasar id={prod.id} , nombre={prod.nombre} , precio={prod.precio} etc.. lo paso como {...prod}
