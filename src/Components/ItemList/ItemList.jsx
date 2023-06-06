import { Item } from "../Item/Item";

const ItemList = ({ items }) => {
    return (
        <div style={{ backgroundColor: "antiquewhite" }}>
            <h2>Productos</h2>

            <hr />
            {items.length === 0 ? (
                <p>Loading...</p>
            ) : (
                //1ra opcion pasar el objeto entero
                /* items.map((prod) => <Item prod={prod} key={prod.id}/> */
                
                // segunda opcion, hacer un spread del objeto ( desparramarlo (?))
                // en lugar de pasar id={prod.id} , nombre={prod.nombre} , precio={prod.precio} etc.. lo paso como {...prod}
                items.map((prod) => <Item key={prod.id} {...prod} />)
            )}
        </div>
    );
};

export default ItemList;
