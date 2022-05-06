import { useState } from "react";
import React from 'react';
import './App.css';
import { fetchHelloWorld } from './services/HelloWorldService';

// //Crea el boton
// function App() {
//   //Asi es como se crea una variable en react
//   const [label, setLabel] = useState(""); //label es el nombre de la variable, y setLabel es para setear el valor

//   //Esta funcionn es handler del boton que espera el output del fetchHelloWorld y cuando lo recibe setea en label
//   const clickHandler = async () => {
//     const result = await fetchHelloWorld();
//     setLabel(result);
//   };

//   //Esto ya es HTML, se crea el boton en la ventana e imprime el label
//   return (
//     <div className="App">
//       <button onClick={() => clickHandler()}>Call API</button>
//       {label}
//     </div>
//   );
// }
// export default App;



export class App extends React.Component {
  constructor() {
    super();

    //Create atribute currentTime
    this.state = {
      currentTime: Date.now()
    }
    
    //Create atribute label
    this.state = {
      label: ""
    }

    //Update all the date in 1s
    setInterval(() => {
      this.setState({
        currentTime: Date.now()
      });
    }, 1000)
  }

  //Es aqui donde se vuelve asyncrono funciona hasta que se pueda ejecutar todo el codigo
  async clickHandler(){
    //Aqui el codigo si detiene
    const result = await fetchHelloWorld();
    this.setState({
      label:result
    });
  }

  render() {
    return (
      <div className="App">
        {new Date(this.state.currentTime).toLocaleString()}
        <button onClick={() => this.clickHandler()}>Call API</button>
        {this.state.label}
      </div>
    );
  }
}

export default App;
