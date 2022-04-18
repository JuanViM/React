import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';

import "../02-useEffect/effects.css";

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);


    //cuando hacemos uso del callback llamos a la funcion que queremos usar
    //como ene ste caso seria la de aumentar el valor pero solo a esta y no a la funcion entera del hijo
    const  increment =  useCallback( (num)=>{
        setValor(valor => valor + num);
    },[setValor])

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ increment }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
