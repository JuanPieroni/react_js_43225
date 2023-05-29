
 
import "./App.css";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";
 



const App = () => {
  return ( 
    <>
      <NavBar  />
      <ItemListContainer greetings="Bienvenidos a mi tienda"/>
    </>
  );
};

export default App;
