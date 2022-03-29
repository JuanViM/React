import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);
   
    

    useEffect(()=>{
        getGift();
    }, [])

    const getGift = async() => {

        const url = "https://api.giphy.com/v1/gifs/search?api_key=SgE0jUZXvAFlEH4zRDhMow5rEky23Kpy&q=Vegeta";

      const resp = await fetch(url);
      const {data} = await resp.json();

      const gifs = data.map( img => {
          return {
          id: img.id,
          title: img.title,
          url: img.images?.downsized_medium.url
      }

      })

      console.log(gifs);
      setImages( gifs);
    }
    
    //getGift();

  return (
    <>
    <h3>{category}</h3>
       {
           images.map( img  => (
             <GifGridItem 
             key={img.id}
             {...img}
             />
           ))
           
       }
    
    </>
  )
}
