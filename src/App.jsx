
 
import "./App.css";
import  ItemListContainer  from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
 import ItemList from "./Components/ItemList/ItemList"; 



const App = () => {
  return ( 
    <>
      <NavBar  />
      <ItemListContainer saludo="Bienvenidos a mi tienda"/>
       <ItemList/> 
    </>
  );
};

export default App;
