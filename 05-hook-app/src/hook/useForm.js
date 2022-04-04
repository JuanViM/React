import React, { useState } from 'react'

export const useForm = (initialState = {}) => {

  const [values, setValues] = useState(initialState)

  const handleInputChange = ({ target }) => {
    //vamos a hacer
    setValues({
      //llamamos a todo el formulario por si hay propiedades que no cambian
      ...values,
      //setFormState aqui tenemos lo que se escriba en el objeto input
      [target.name]: target.value

    });

  };

  return [values, handleInputChange];
}
