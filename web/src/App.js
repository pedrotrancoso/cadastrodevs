import React from 'react';
import Header from './Header';
//import logo from './logo.svg';
//import './App.css';

// Compenente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Prioridade: Informações que um componente PAI passa para um componente FILHO
// Estado: 


function App() {
  const counter = 0;
  
  function incrementCounter(){
    alert('Hello')
  }
  
  return (

    <>
    <h1>Contador: {counter}}</h1>
    <button onClick={incrementCounter}>Incrementar</button>
    </>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
  );
}

export default App;
