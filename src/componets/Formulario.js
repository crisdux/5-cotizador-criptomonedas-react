import React,{useState,useEffect}from 'react'
import styled from '@emotion/styled';
//custom hooks
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';

import axios from 'axios';
const Button = styled.input`
    margin-top:20px;
    font-weight:bold;
    font-size:20px;
    padding:10px;
    background-color:#66a2fe;
    border:none;
    width:100%;
    border-radius:10px;
    color:#fff;
    transition: background-color .3s ease;

    &:hover{
        background-color:#326ac0;
        cursor:pointer;
    }

`;
function Formulario() {

    const [listaCripto, guardarCriptomonedas] = useState([]);
    const [error, guardarError] = useState(false);

    const MONEDAS =[
        {codigo: 'USD', nombre:'Dolar Amaricano'},  
        {codigo: 'MXN', nombre:'Peso Mexicano'},  
        {codigo: 'EUR', nombre:'Euro'},  
        {codigo: 'GBP', nombre:'Libra esterlina'},  
    ];

    const [moneda, SelectMonedas] = useMoneda('Elige tu moneda','',MONEDAS);

    const [criptomoneda,SelectCripto] = useCriptomoneda('Elige tu criptomoneda','',listaCripto);

    //llamada a la api
    useEffect(() => {
        const consultarAPI = async() => {
            let url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
            let resultado = await axios.get(url);
            guardarCriptomonedas(resultado.data.Data);
        }
        consultarAPI();
    }, []);
   
    const cotizarMoneda = e => {
        e.preventDefault();
        //validar
        if(moneda.trim() === '' || criptomoneda.trim() === ''){
            guardarError(true);
            return;
        }
        //pasar lo datos al comonente principal
        guardarError(false);
    }

    return (
        <form onSubmit={cotizarMoneda}>
            {error && 'Campos requeridos'}
            <SelectMonedas />
            <SelectCripto/>
            <Button type="submit" value="Calcular"></Button>
        </form>
    )
}

export default Formulario
