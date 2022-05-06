import { useState } from "react";
import "./App.css";
import { fetchHelloWorld } from "./services/HelloWorldService";

//Crea el boton
function App() {
  //Asi es como se crea una variable en react
  const [label, setLabel] = useState(""); //label es el nombre de la variable, y setLabel es para setear el valor

  //Esta funcionn es handler del boton que espera el output del fetchHelloWorld y cuando lo recibe setea en label
  const clickHandler = async () => {
    const result = await fetchHelloWorld();
    setLabel(result);
  };

  //Esto ya es HTML, se crea el boton en la ventana e imprime el label
  return (
    <div className="App">
      <button onClick={() => clickHandler()}>Call API</button>
      {label}
    </div>
  );
}
export default App;
