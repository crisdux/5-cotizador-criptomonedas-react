import React,{useState} from 'react';

const useMoneda = (label,stateInicial,opciones) => {

    const [state, actualizarState] = useState(stateInicial);

    const Seleccionar = () => (
        <>
            <label>{label}}</label>
            <select>
                <option value="">--Seleccione una moneda--</option>
                {opciones.map(opcion => (
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))}
            </select>
        </>
    );

    //retorna los elemntos del custom hook (el orden importa mucho)
    return [state,Seleccionar,actualizarState];
}

export default useMoneda;