import './App.css';
import { useState } from "react";


function App() {

  const [idade, setIdade] = useState();
  const handleIdadeChange = (e) => {
    setIdade(e.target.value);
  }

  const [checked, setChecked] = useState(false);
  const now = new Date();
  const anoAtual = now.getFullYear();
  const [block, setBlock] = useState(false);
  const [ano, setAno] = useState();
  
  const handleBtCalculaClick = () => {

    var calcularAno = checked ? (anoAtual - idade)  :  (anoAtual - idade) - 1
    setAno(calcularAno)
    handleBtBlock()
  
  }

  const handleBtBlock = () => {
    setBlock(!block)
  }

  const handleBtLimparClick = () => {
    setAno(0)
    setIdade(0)
    setChecked(!checked)
    handleBtBlock()
  }

  const handleBtChecked = () => {
    setChecked(!checked)
  }

  return (
    <div className="container">
      <h1>Cálculo do Ano de Nascimento</h1>
      <p>Informe sua idade:<br />
      <input value={idade} readOnly={block} type="number" onChange={handleIdadeChange} />
      </p>
      <p>Já fez aniversário esse ano? Se sim, marque abaixo: <br />
      <strong><a>SIM</a></strong>
        <input type="checkbox" onChange={handleBtChecked} value={checked} checked={checked} /> <br/>
      </p>

      <button className='button' onClick={handleBtCalculaClick}>Calcular</button>
      <button className='button' onClick={handleBtLimparClick}>Limpar</button>

      <p>Esse é seu ano de nascimento:<br />
        <input readOnly value={ano} />
      </p>

    </div>
  );
}

export default App;
