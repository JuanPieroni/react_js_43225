
 
import "./App.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
 



const App = () => {
  return ( 
    <>
      <NavBar  />
      <ItemListContainer saludo="Bienvenidos a mi tienda"/>
    </>
  );
};

export default App;
