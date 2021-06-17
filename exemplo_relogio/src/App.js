import React from 'react';
import './App.css';

function DataFormatada(props) {
  return <h2>Horário Atual: {props.date.toLocaleTimeString()}</h2>
}

// Define a class Clock que será chamada na renderização dentro do App
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      // Define o estado date pegando a data hora atual
      date : new Date()
    };
  }

  // Ciclo de vida que ocorre quando Clock é  inserido na DOM
  componentDidMount(){
    this.timerID = setInterval(() => {
      this.thick()
    }, 1000);

    console.log("Eu Sou o Relógio " + this.timerID)
  }

  // Ciclo de vida que ocorre quando o componente é removido da DOM
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  thick(){
    this.setState({
      date : new Date()
    });
  }

  pausar()
  {
    clearInterval(this.thick)
    return console.log(`Horário ${this.timerID} pausado`)
  }

  retomar(){
    this.timerID = setInterval (() => {
      this.thick()
    }, 1000);
    console.log(`Relógio ${this.timerID} retomado`)
    console.log(`Agora eu sou o relógio ${this.timerID}`)
  }

  render()
  {
    return (
      <div>
        <h1>Relógio</h1>
        <DataFormatada date={this.state.date}/>

        <button style={{margin : "20px", backgroundColor : "red" }} onClick={() => this.pausar()}>Pausar</button>
        <button style={{backgroundColor : "green" }} onClick={() => this.retomar()}>Retomar</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
      </header>
    </div>
  );
}

export default App;
