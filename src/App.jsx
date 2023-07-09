 
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import "./App.css"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import NavBar from "./Components/NavBar/NavBar"
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer"
import { ClaseEventos } from "./Tests/ClaseEventos"
import { SearchBar } from "./Tests/SearchBar"
import { CartProvider } from "./context/CartContext"
import { Cart } from "./Components/Cart/Cart"
import { CheckOut } from "./Components/CheckOut/CheckOut"
 
const App = () => {
   
      
    return (
        <>
             <CartProvider>
                <BrowserRouter>
                    <NavBar />
                    <SearchBar />
                    <ClaseEventos />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <ItemListContainer greetings="Yaru Cosmetica Natural" />
                            }
                        />
                        <Route
                            path="/productos/:categoryId"
                            element={<ItemListContainer />}
                        />
                        <Route path="/cart" element={<Cart />}   />
                        <Route
                            path="/detail/:itemId"
                            element={<ItemDetailContainer />}
                        />
                        <Route path="/checkout" element={<CheckOut />}  />
                        <Route path="*" element={<Navigate to={"/"} />} />
                    </Routes>
                </BrowserRouter>
          </CartProvider>
        </>
    )
}

export default App

{
    /* <Route path="/item/:id" element={<ItemDetailContainer />} /> */
}
{
    /*  <Route path="/productos"  element={ <ItemListContainer /> }/> */
}
{
    /*   <Route path="/nosotros" element={<Nosotros />}  /> */
}
