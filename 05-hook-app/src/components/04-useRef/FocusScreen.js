import React, { useRef } from 'react';
import "../02-useEffect/effects.css";

export const FocusScreen = () => {
    
    /*el uso que le podemos dar al hook useRef es para mantener una referencia mutable
    vamos a crearlo ahora y vemos el ejemplo*/

    const inputRef = useRef();
    /*vamos a crear una funcion que cuando hagamos click en algo la 
    llamemos y pongamos el focus en lo especificado 
    que en este caso seria en el texto
    */
    const handleClick = () => {
        //pone el focus en el selector del input
        //document.querySelector("input").focus();
        //podemos usar tbm el select para asi seleccionar tbm lo que hay dentro
        inputRef.current.select();
    }
    
    return (
        <div>
            <h1>FocusScreem</h1>
            <hr />
            <input 
                ref={inputRef}
                className='form-control'
                placeholder='Su nombre'
            />
            <button
                className='btn btn-outline-primary mt-5'
                onClick={handleClick}
            >FOCUS</button>
        </div>
    )
}
