import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"
import { CartContext } from "../../context/CartContext.jsx"
import { useContext } from "react"

const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)
    return (
        <Link to="/cart">
            <FaShoppingCart className="inline-block" />
            <span>{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget
