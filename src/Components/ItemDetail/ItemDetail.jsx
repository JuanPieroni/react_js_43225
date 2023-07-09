import { Botonera } from "../Botonera"
import { useCounter } from "../../hooks/useCounter"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

export const ItemDetail = ({
    id,
    nombre,
    categoria,
    desc,
    precio,
    stock,
    img,
}) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)
    
    const { counter, masUno, menosUno, reset } = useCounter()

    const botoneraProps = {
        stock,
        counter,
        masUno,
        menosUno,
        reset,
    }

    const handleAgregar = () => {
        const item = {
            id,
            nombre,
            categoria,
            desc,
            precio,
            stock,
            img,
            counter,
        }

        agregarAlCarrito(item)
    }

    return (
        <div className="p-6  items-center">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={img} alt="item" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{nombre} </div>
                    <p className="text-gray-700 text-base">{desc}</p>
                </div>
                {isInCart(id) ? (
                    <Link to="/cart">Finalizar Compra </Link>
                ) : (
                    <Botonera
                        {...botoneraProps}
                        handleAgregar={handleAgregar}
                    />
                )}
            </div>
        </div>
    )
}
