import React from 'react';
import Posta6a from './img/Posta6.png'
import Posta6b from './img/Posta6b.png'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Posta6a} className="App-logo" alt="logo" />
        <img src={Posta6b} className="App-logo" alt="logo" />

        <p>¿Que significan estas dos imagenes?</p>
        <p>La primera tiene 2 digitos como respuesta "XX", la segunda tiene otros dos digitos "XX".</p>

        <p>La respuesta tiene 4 digitos en total, por ejemplo: "hj77", "1678", "06be", etc.</p>
        
      </header>
    </div>
  );
}

export default App;
