import { useState } from "react";
import "./App.css";
import Button1 from "./Button1";
 

const App = () =>  {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Yaru Cosmetica</h1>
       <Button1 />
    </>
  
  );
  }
  
  export default App;