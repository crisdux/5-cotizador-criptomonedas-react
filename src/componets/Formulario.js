import React from 'react'
import styled from '@emotion/styled';
//custom hooks
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';


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
    const MONEDAS =[
        {codigo: 'USD', nombre:'Dolar Amaricano'},  
        {codigo: 'MXN', nombre:'Peso Mexicano'},  
        {codigo: 'EUR', nombre:'Euro'},  
        {codigo: 'GBP', nombre:'Libra esterlina'},  
    ];

    const [moneda, SelectMonedas] = useMoneda('Elige tu moneda','',MONEDAS);

    const [criptomoneda,SelectCripto] = useCriptomoneda('Elige tu criptomoneda','')
   
    return (
        <form>
            <SelectMonedas />
            <SelectCripto/>
            <Button type="submit" value="Calcular"></Button>
        </form>
    )
}

export default Formulario
