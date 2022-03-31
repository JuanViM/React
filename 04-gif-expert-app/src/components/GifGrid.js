import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGift } from '../helpers/getGifts';
import { GifGridItem } from './GifGridItem';
import Arca from 'prop-types';


export const GifGrid = ({category}) => {

  const {data:images, loading} = useFetchGifs(category);

    // const [images, setImages] = useState([]);

  return (
    <>
    <h3 className='animate__animated animate__fadeIn'>{category}</h3>

    {loading && <p className='animate__animated animate__flash'>Cargando</p>}
    <div className='card-grid'>
    
       {
           images.map( img  => (
             <GifGridItem 
             key={img.id}
             {...img}
             />
           ))
           
       }
    
    </div>
    </>
  )
}

GifGrid.propTypes = {
  category: Arca.string.isRequired,
}