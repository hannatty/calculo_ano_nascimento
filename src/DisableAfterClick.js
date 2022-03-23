import React, { useState } from 'react';

  export default function App(){
    const [idade, setIdade] = React.useState(0);
    const [dtNascimento, setdtNascimento] = React.useState(0);
    const handleIdadeChange = (evento) => {
      setIdade(evento.target.value);
    }
      const handleBtCalcularClick = () =>{
        setdtNascimento(2022 - idade);
      } 

      const [disable, setDisable] = React.useState(false);
      return(
        <div>
          <h1> Cálculo do Ano de Nascimento </h1>
          <label for="suaIdade">Digite sua idade: </label>
          <input type="number" value={idade} onChange={handleIdadeChange} name="suaIdade"/> 

          <input type="number" readonly value={dtNascimento}/> 
          <button disabled={disable} onClick={(handleBtCalcularClick) => setDisable(true)}> Calcular ano de nascimento </button>
        </div>
      );
    }
