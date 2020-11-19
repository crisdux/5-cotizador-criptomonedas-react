import React,{useState} from 'react';

const useMoneda = () => {

    const [state, actualizarState] = useState('');

    const Seleccionar = () => (
        <>
            <label>Moneda</label>
            <select>
                <option value="MXN">Peso Mexicano</option>
            </select>
        </>
    );

    //retorna los elemntos del custom hook (el orden importa mucho)
    return [state,Seleccionar,actualizarState];
}

export default useMoneda;