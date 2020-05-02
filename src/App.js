import React, { useState } from 'react';
import Posta6a from './img/Posta6.png'
import Posta6b from './img/Posta6b.png'
import styled from 'styled-components'

import './App.css';

const Form = styled.form`
  padding: 16px;
  margin: 5%;
`

const Input = styled.input`
  border:1px solid #4682b4 ;
  border-radius: 3px;
  width: 100%;
  padding: 8px 4px;
  display: block;
`

const Button = styled.button`
  background: #4682b4 ;
  color: white;
  border-radius: 3px;
  height: 32px;
  display: block;
  width: 100%;
  margin-top:5px;
  text-align: center;
`

let result = false;

function handleSubmit(event) {
  if(result){
    alert("Correcto! '87', al dar vuelta la imagen y leer los aparcamientos bien, y 'LA' se encuentra repetido en la segunda imagen")
    window.location.href = "https://posta7.now.sh/"
  } else {
    alert("Respuesta incorrecta!")
  }
  event.preventDefault();
}

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue)
  const onChange = e => setValue(e.target.value)
  
  if(value.toUpperCase() === '87LA'){
    result = true
  }else{
    result = false
  }
  return { value, onChange }
}


function App() {
  
  const respuesta = useInputValue('')

  return (
    <div className="App">
        <h1>Posta 6</h1>
      <header className="App-header">

        <div className="img-container">
          <img src={Posta6a} className="img" alt="Posta 6A" />
          <img src={Posta6b} className="img" alt="Posta 6B" />
        </div>

        <p>¿Que significan estas dos imagenes? <br></br> La primera tiene 2 digitos como respuesta "XX", la segunda tiene otros dos digitos "XX".</p>
        <p>La respuesta tiene 4 digitos en total, por ejemplo: "hj77", "1678", "06be", etc.</p>

        <Form onSubmit={handleSubmit}>
          <Input placeholder='Tu Respuesta' {...respuesta} />
          <Button>Enviar respuesta</Button>
        </Form>
      </header>
      <p> Por consultas o dudas pueden contactar a cualquier diri n.n</p>
    </div>
  );
}

export default App;
