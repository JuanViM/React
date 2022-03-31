import React, { useState } from 'react';
import arcaxofa from "prop-types";

export const AddCategory = ( {setCategories} ) => {

    
    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e)=>{   
        setinputValue(e.target.value);
        console.log("hadleImputChange llamado");
    }

    const handleSubmit = (e) =>{

        e.preventDefault();

        console.log("hadlesubmit",inputValue);
        if( inputValue.trim().length > 2) {
            
            setCategories( cate => [inputValue,...cate] );
            setinputValue("");
        }
        
    }



  return (
      
      <form onSubmit={handleSubmit}>
          <p>{inputValue}</p>
      <input
        type="text"
        value={ inputValue}
     onChange={handleInputChange}
    />

      </form>
  )
}

AddCategory.propTypes={
    setCategories: arcaxofa.func.isRequired       
    }




