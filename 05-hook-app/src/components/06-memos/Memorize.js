import React, { useState } from 'react';
import { useCounter } from '../../hook/useCounter';
import "../02-useEffect/effects.css";
import { Small } from './Small';






export const Memorize = () => {


//vamos a extraer del useCounter el contador y la funcion increment
  const {counter,increment} = useCounter(10);
 
  
  const [show,setShow] = useState(true);
  return (
    <div>
        <h1>counter: <Small value={counter} /> </h1>

        <button
        className='btn btn-primary'
        onClick={increment}
        >incrementar</button>

        <button
        className='btn btn-outline-primary ml-3'
        onClick={() => {
            setShow(!show);
        }}>

{/* con { JSON.stringify(show) } lo que estamis 
haciendo es convirtiendo un json en string */}

            Show/Hide { JSON.stringify(show) }  
        </button>
        </div>
  )
}
