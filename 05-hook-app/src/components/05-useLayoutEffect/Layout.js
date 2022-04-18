import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hook/useCounter';
import { useFetch } from '../../hook/useFetch';
import "./layout.css";

export const Layout = () => {


    /*  vamos a hacer uso de un contador para ir pasando de una frase a otra mediante el 
      indicador del id
      mediante el useCounter.
      vamos a desestructurar lo que retorna el useCounter con lo que nos interesa lo que seria en este caso
      el counter y el increment
    */
    const { counter, increment } = useCounter(1);
    //vamos a llamar a nuestro hooks useFetch el cual nos regresa state y lo guardamos en la const state
    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    //extraemos el loading del state
    const { loading } = state;

    //ahora vamos a extraer la data que debemos hacerlo de la siguiente manera debido a que inicialmente data es null

    const { quote } = !!state.data && state.data[0];//esto quiere decir que si hay data "!!state.data" entonces "&&"" extrae de state.data[0] author,quote
    // el operador !! lo que hace es darle valor a null por ejemplo !null 

    const pTag = useRef();

    const [boxSize, setBoxSize] = useState()

    //aqui le vamos a decir que si el quote cambia renderice de nuevo el hooks
    useLayoutEffect(() => {

        setBoxSize(pTag.current.getBoundingClientRect() );
        
    }, [quote])

    //console.log(quote);
    return (
        <div>
            <h1>Layout effect</h1>
            <hr />

            <blockquote className='blockquote text-right'>
                <p
                    ref={pTag}
                    className='mb-0'>{quote}</p>
                <p></p>


            </blockquote>


            <pre>
        {JSON.stringify(boxSize,null,3)}
            </pre>
            {/*vamos a crear un boton para pasar a la siguiente frase */}

            <button className='btn btn-primary' onClick={increment}>Siguiente quote</button>

        </div>
    )
}
