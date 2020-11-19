import React,{useState, useEffect} from 'react'
import './App.css';
import styled from '@emotion/styled';
import imagen from './cryptomonedas.png';
import Formulario from './componets/Formulario'
import Spinner from './componets/Spinner';
import Cotizacion from './componets/Cotizacion'
import axios from 'axios';
const Contenedor = styled.div`
  max-width:900px;
  margin: 0 auto;
  @media (min-width:922px){
    display:grid;
    grid-template-columns:repeat(2,1fr);
    column-gap:2rem;
  }
`;

const Imagen = styled.img`
  max-width:100%;
  margin-top:5rem;
`;

const Heading = styled.h1`
  font-family:'Bebas Neue', cursive;
  color: #fff;
  text-align:left;
  font-weight:700;
  font-size: 45px;
  margin-bottom: 50px;
  margin-top:80px;

  /* crea la linea decoratica abajo del titulo */
  &::after { 
    content:'';
    width:100px;
    height:6px;
    background-color: #66a2fe;
    display:block;
  }
`;



function App() {

  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState('');
  const [resultado, guardarResultado] = useState({});
  const [cargando, guardarCargando] = useState(false);

  useEffect(() => {
    const cotizarCriptomoneda = async() => {
      //evitamos la ejecucion la primera vez
    if(moneda === '') return;
    //consultar a la api para la cotizacion
    let url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    let resultado = await axios.get(url);

    //mostramos spinner
    guardarCargando(true);
    //ocultar el spiiner y mostrar el resultado
    setTimeout(()=>{
      guardarCargando(false);
      guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
    },3000)
    
    }
    cotizarCriptomoneda();
  }, [moneda,criptomoneda]);

  //mostrar spiiner o resultado
  let componente;
  if(cargando){
    componente = <Spinner />;
  }else{
    componente = <Cotizacion resultado={resultado}/>;
  }
  
  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="Imagen cripto"/>
      </div>
      <div>
        <Heading>Cotizador de criptomonedas al instante</Heading>
        
        <Formulario 
          guardarMoneda={guardarMoneda}
          guardarCriptomoneda={guardarCriptomoneda}
        />
        {componente}
      </div>
    </Contenedor>
  );
}

export default App;
