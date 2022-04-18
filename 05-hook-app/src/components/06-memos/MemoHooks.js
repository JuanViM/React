import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hook/useCounter';
import "../02-useEffect/effects.css";







export const MemoHook = () => {


    //vamos a extraer del useCounter el contador y la funcion increment
    const { counter, increment } = useCounter(50);


    const [show, setShow] = useState(true);

    

    //su uso es para que si algo esta igual que estaba no lo renderice de nuevo ya que apenas cambio nada
        //con esto le decimos que si el counter cambia necesitamos una nueva memorizacion [counter] pero si el counter no cambia que 
        //lo deje todo tal y como esta
       const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])
    return (
        <div>
            <h1>MemoHook</h1>
            <h3>counter: <small>{counter}</small> </h3>
            <hr />
        <p>{memoProcesoPesado }</p>
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

                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
