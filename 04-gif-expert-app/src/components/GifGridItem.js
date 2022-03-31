import React from 'react';
import Arca from "prop-types";
export const GifGridItem = ( {title,url} ) => {

    
  return (
    <div className="card animate__animated animate__fadeIn">
    <img src={ url } alt = {title} />
    <p>{title}</p>
    </div>
  )
}


GifGridItem.protTypes={
title:Arca.string.isRequired,
url:Arca.string.isRequired
}



