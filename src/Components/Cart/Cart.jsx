import React from "react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom"



 export const Cart = () => {
    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito  } = useContext(CartContext)
 
    return (
        <>
            <div>
                CART
                <hr />
                {cart.map((prod) => (
                    <div key={prod.id}>
                        <h4>{prod.nombre}</h4>

                        <img src={prod.img} alt="" />
                        <p>Precio: ${prod.precio}</p>
                        <p>Cantidad: {prod.counter}</p>
                        <button
                            onClick={() => eliminarDelCarrito(prod.id)}
                            ><FaTrashAlt/> </button>
                        <hr />
                    </div>
                ))}
            </div>
            <div>
                <h5>Total: ${totalCompra()}</h5>
                <Link to="/checkout">Terminar compra</Link>
            </div>
            <hr />
            <button onClick={vaciarCarrito}>Vaciar carrito</button>
        </>
    )
}
