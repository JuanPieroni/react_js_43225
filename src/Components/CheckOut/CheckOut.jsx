import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { collection, addDoc }  from "firebase/firestore"
import { db } from "../../firebase/config"
import { Link } from "react-router-dom"
export const CheckOut = ( ) => {
    
    const [orderId, setOrderId] = useState(null)
    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)
    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })
     const handleInputChange = (e) => { 
       setValues( {
        ...values,
         [e.target.name]: e.target.value
       }) 
    
     }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(values.nombre.length === 0 || values.direccion.length === 0 || values.email.length === 0)
         return alert("Complete todos los campos")
        alert("Compra realizada con exito")
      
        const orden = {
            cliente: values,
            items: cart,
            total: totalCompra() ,
            fecha: new Date()
        
        }
         const ordersRef = collection(db, "orders")

        addDoc(ordersRef, orden)
             .then((doc) => {
                 setOrderId(doc.id)
                 vaciarCarrito()
             
             })
             .catch((err) => { console.log(err); })

    }
    
   if(orderId) {
    return (
        <div>
            <h2>Tu compra fue realizada con exito</h2>
            <hr />
            <p>Tu numero de orden es : {orderId}</p>
            <Link to="/" className="btn-primario">Volver al inicio</Link>
        </div>
    )
   }
 
    return (
        <div>
            CheckOut
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    value={values.nombre}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="enter your name"
                    className=""
                    name="nombre"
                />
                <input
                    value={values.direccion}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="enter your direction"
                    className=" "
                    name="direccion"
                />
                <input
                    value={values.email}
                    onChange={handleInputChange}
                    type="email"
                    placeholder="enter your email"
                    className=" "
                    name="email"
                />
                <button className="btn-primario" type="submit">Enviar</button>
            </form>
        </div>
    )
}
