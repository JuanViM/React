import React from 'react';
import { useCounter } from '../../../hook/useCounter';


export const CounterWithCustomHook = () => {

    //vamos a desestructurar lo que me devuelve el useCounter
    // state:counter aqui lo que estamos haciendo es cambiandole el nombre a la contante state a counter
   const  {state:counter,increment,decrement,reset} = useCounter(100);

  return (
    <>
      <h1>Counter with hook: { counter }</h1> 
      <hr /> 
      {/* aqui hacemos referencia a las funciones al clicar en los botoenes */}
      <button onClick={() => increment(2)} className='btn'>+1</button>
      <button onClick={() => decrement(2)} className='btn'>-1</button>
      <button onClick={reset} className='btn'>reset</button>
    </>
  )
}
