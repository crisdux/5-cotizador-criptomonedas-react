import React from 'react'
import styled from '@emotion/styled';

const MensajeError = styled.p`
    background-color: #b7322c;
    padding:1rem;
    color: #fff;
    font-size:15px;
    text-transform: uppercase;
    font-weight: bold;
    text-align:center;
    font-family: 'Bebas Neue' cursive;
    letter-spacing: 1px;
`

function Error({mensaje}) {
    return (
        <div>
            <MensajeError>{mensaje}</MensajeError>
        </div>
    )
}

export default Error
