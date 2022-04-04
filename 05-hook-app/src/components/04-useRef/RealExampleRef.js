import React, { useState } from 'react';
import "../02-useEffect/effects.css";
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExampleRef = () => {
    
    //vamos a crear un estado para mostrar y ocultar el MultipleCustomHooks
    //este show tendra un valor boleano de modo que si show esta en true mostrar el componente
    //pero si esta en false no lo hara
    const [show, setShow] = useState(false);
    
    return (
    <div>
        <h1>RealExampleRef</h1>
        <hr />
        
        {/* ahora vamos a llamar al componente que necesitamos */}
        
        {/* estas dos funciones son iguales son maneras diferentes de diferenciar un if */}
        {/* { show && <MultipleCustomHooks />} */}
        { show ?<MultipleCustomHooks /> : null }
        <button 
        className='btn btn-primary mt-5'
        //creao una funcion en la que le digo que al pulsar el boton pasara show a true
        onClick={ () => {
            setShow( !show );
        }}
        >
            Mostrar/ocultar
        </button>

    </div>
  )
}
