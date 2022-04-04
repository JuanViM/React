import React, { useEffect } from 'react';
import { useForm } from '../../../hook/useForm';
import "./effects.css";


export const FormWithCustomHooks = () => {

    

   //creamos un formulario con los objetos nombre y email
   const [FormValues, handleInputChange] = useForm({

    name:"",
    email:"",
    password:"",
  });

  //desestructuramos el nombre y el email
  const {name,email,password} = FormValues;

  //vamos a crear un efect
  //este efecto va a estar escuchando cuando esta cambiando el email ya que lo ponemos aqui  [email])
  useEffect(() => {
  console.log("email cambio")
    
  }, [email])
  
  const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(FormValues);
  }

  return (
    <form onSubmit={handleSubmit}>
    <h1>FormWithCustomHooks</h1>
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
   
    <div className='form-group'>
      <input 
      type="password"
      name='password'
      className='form-control'
      placeholder='Introduce tu password'
      value={password}
      //se llama cada vez que se produce un cambio 
      onChange={ handleInputChange }
      />

    </div>

    <button type='submit' className='btn btn-primary'>
      Guardar  
    </button>
    </form>
  )
  }
