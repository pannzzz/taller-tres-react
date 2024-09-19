import React, { Component } from "react";
import  './ContadorSimple.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  componentDidMount() {
    console.log("El componente se ha montado");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("El componente se actualizo");
    console.log("Antes de", prevState.contador);
    console.log("Ahora es", this.state.contador);
  }

  componentWillUnmount() {
    console.log("El componente se va a desmontar");
  }

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
    <div>
        <h1 className="titulo">Contador de Majo</h1>
      <div className="contador-container">
        <h1 className="contador-texto">
          Contador: {this.state.contador}
        </h1>
        <button className="boton-incrementar" onClick={this.incrementar}>Incrementar</button>
        <button className="boton-incrementar" onClick={() => this.setState({ contador: this.state.contador - 1 })}>Decrementar</button>
      </div>
      </div>
    )
  }
}
export default App;