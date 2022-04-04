import React, { useEffect, useState } from 'react'

export const Message = () => {

  //vamos a extraer las coordenadas
    const [coords, setCoords] = useState({x:0,y:0});
    const {x,y} = coords;

    useEffect(() => {
    
      const mouseMove = (e)=>{
         const coords = {x: e.x, y: e.y}
        
        setCoords(coords);
      }
    window.addEventListener("mousemove",mouseMove);
    //este return es la fase de limpieza del efecto, lo que hace es que lo elimina
      return () => {
        window.removeEventListener("mousemove",mouseMove)
      }
    }, [])
    
  return (
    <div>
        <h3>Eres genial</h3>
        <p>
          x:{x},y:{y}
        </p>

    </div>
  )
}
