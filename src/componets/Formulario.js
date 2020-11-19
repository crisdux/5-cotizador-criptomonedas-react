import React from 'react'
import styled from '@emotion/styled';
//custom hooks
import useMoneda from '../hooks/useMoneda';


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

    const [moneda, SelectMonedas, actualizarState] = useMoneda();

    return (
        <form>
            <SelectMonedas />
            <Button type="submit" value="Calcular"></Button>
        </form>
    )
}

export default Formulario
