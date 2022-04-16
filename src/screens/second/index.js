import React from 'react';
import { useParams } from 'react-router-dom'

function Parametro(){

    const { parametro } = useParams() 
     
    return(
        <h1>
            {parametro}
        </h1>
    )
}

export default Parametro;