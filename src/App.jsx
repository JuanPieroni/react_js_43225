import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import {ItemDetailContainer} from "./Components/ItemDetailContainer/ItemDetailContainer";
 


const App = () => {
    return (

        <BrowserRouter>
            <NavBar />
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
                <Route path="/detail/:itemId" element={<ItemDetailContainer/>} />
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
           </BrowserRouter>
        

    );
};

export default App;

{/* <Route path="/item/:id" element={<ItemDetailContainer />} /> */ }
{/*  <Route path="/productos"  element={ <ItemListContainer /> }/> */ }
{/*   <Route path="/nosotros" element={<Nosotros />}  /> */ }