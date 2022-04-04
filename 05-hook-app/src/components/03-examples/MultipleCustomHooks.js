import React from 'react';
import { useCounter } from '../../hook/useCounter';
import { useFetch } from '../../hook/useFetch';
import "../02-useEffect/effects.css";

export const MultipleCustomHooks = () => {


/*  vamos a hacer uso de un contador para ir pasando de una frase a otra mediante el 
  indicador del id
  mediante el useCounter.
  vamos a desestructurar lo que retorna el useCounter con lo que nos interesa lo que seria en este caso
  el counter y el increment
*/
const {counter,increment} = useCounter(1);
  //vamos a llamar a nuestro hooks useFetch el cual nos regresa state y lo guardamos en la const state
 const state = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}` );
 
 //extraemos el loading del state
 const {loading} = state;

 //ahora vamos a extraer la data que debemos hacerlo de la siguiente manera debido a que inicialmente data es null

 const {author,quote} = !!state.data && state.data[0];//esto quiere decir que si hay data "!!state.data" entonces "&&"" extrae de state.data[0] author,quote
 // el operador !! lo que hace es darle valor a null por ejemplo !null 


 //console.log(quote);
  return (
    <div>
        <h1>Breaking Bad Quotes</h1>
        <hr />

        {/* vamos a usar un ternario en el cual definimos que si loading es true cargue 1 el div loading
        y si es false el blockquote*/}
        {
          loading ? (<div className='alert alert-info text-center'>
          loading.....
        </div>) 
        :
        (<blockquote className='blockquote text-right'>
        <p className='mb-0'>{quote}</p>
        <p></p>
        <footer className='blockquote-footer'>{author}</footer>

      </blockquote>)
        }
 
        {/*vamos a crear un boton para pasar a la siguiente frase */}

        <button className='btn btn-primary' onClick={increment}>Siguiente quote</button>
        
    </div>
  )
}
