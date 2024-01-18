import { useState } from "react";
import "./Miapp.css";

const app = () =>{

  const [Contador, setContador] = useState(0);

  return (
    <>
      <h1>Hola Mundo</h1>
      <p>Aguilar Gonzalez</p>
      <h3>Contador: { Contador } </h3>
      <button id="btm-Contador" className="btms" onClick={ () => 
        setContador (Contador+1) } >Contador</button>
      <button id="btm-Menos" className="btms" onClick={ () =>
        setContador (Contador-1) }>Menos</button>
      <button id="btm-Reinicia" className="btms" onClick={ () =>
      setContador (0)}>Reiniciar</button>
    </>
  )
}

export default app;