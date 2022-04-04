import React, { useEffect, useState } from 'react';
import "./effects.css";
import { Message } from './Message';

export const SimpleForm = () => {


   //creamos un formulario con los objetos nombre y email
   const [formState, setFormState] = useState({

    name:"",
    email:"",
  });

  //desestructuramos el nombre y el email
  const {name,email} = formState;

  const handleInputChange = ({target}) =>{
    //vamos a hacer
    setFormState({
      //llamamos a todo el formulario por si hay propiedades que no cambian
      ...formState,
      //setFormState aqui tenemos lo que se escriba en el objeto input
      [target.name]: target.value
       
    });
  };

//cada vez que escribimos en el formulario llama a esta funcion
//al mandarle como segundo armgumento [] lo que hace es que solos e ejecuta una vez al inicio o cando se envia
  useEffect(()=>{   
    console.log("prueba");
  },[]);

//podemos poner otro para otro efecto de modo que cualquier cambio que suceda en [formState] va a disparar este efecto
//de modo que cada vez que escriba algo en el formulario llamara a este useEffect
  useEffect(()=>{   
    // console.log("cambio form");
  },[formState]);

//este efecto se ejecutaria solo cuando el email cambia
  useEffect(()=>{   
    // console.log("cambio email");
  },[email]);
  return (
    <>
    <h1>useEffect</h1>
    <hr />
    <div className='form-group'>
      <input 
      type="text"
      name='name'
      className='form-control'
      placeholder='Introduce tu nombre'
      autoComplete='off'
      value={name}
      //se llama cada vez que se produce un cambio 
      onChange={ handleInputChange }
      />

    </div>


    <div className='form-group'>
      <input 
      type="text"
      name='email'
      className='form-control'
      placeholder='Introduce tu email'
      autoComplete='off'
      value={email}
      //se llama cada vez que se produce un cambio 
      onChange={ handleInputChange }
      />

    </div>
    { name == "123" && <Message /> }
    </>
  )
}
