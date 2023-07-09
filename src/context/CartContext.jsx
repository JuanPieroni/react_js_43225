import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)
    
    
    
    const agregarAlCarrito = (item) => {
        setCart([...cart, item])
    }
    const eliminarDelCarrito = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const totalCompra = () => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.counter, 0)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    const totalCantidad = () => {
        return cart.reduce((acc, prod) => acc + prod.counter, 0)
    }
    return (
        <CartContext.Provider
            value={{
                cart,
                agregarAlCarrito,
                eliminarDelCarrito,
                isInCart,
                vaciarCarrito,
                totalCompra,
                totalCantidad
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
