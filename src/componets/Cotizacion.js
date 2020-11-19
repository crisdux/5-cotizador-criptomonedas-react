import React,{Fragment} from 'react'

function Cotizacion({resultado}) {

    if(Object.keys(resultado).length === 0 ) return null;
    return (
        <React.Fragment>
            <p>El precio es: <span>{resultado.PRICE}</span></p>
            <p>Precio mas alto del dia: <span>{resultado.HIGHDAY}</span></p>
            <p>Precio mas bajo del dia: <span>{resultado.LOWDAY}</span></p>
            <p>Variacón ultimas 24 horas<span>{resultado.CHANGEPCT24HOUR}</span></p>
            <p>Ultima actualizacion<span>{resultado.LASTUPDATE}</span></p>
        </React.Fragment>
    )
}

export default Cotizacion
