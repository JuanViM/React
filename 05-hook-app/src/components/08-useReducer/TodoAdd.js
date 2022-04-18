import React from 'react'
import { useForm } from '../../hook/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    
    
    //esto es el estado del formulario
   const [{description},handleInputChange,reset] = useForm({
    description:""
});

    const handleSubmit = (e) =>{
        e.preventDefault();

        if( description.trim().length <=1){
            return;
        }
        
        const nuevaTarea = {
            id: new Date().getTime(),
            desc: description,
            done:false
        } 

        
        //le mandamos a dispatch la accion de añadir tarea
        handleAddTodo(nuevaTarea);
        reset();
    } 

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='description'
                    className='form-control'
                    placeholder='Aprender....'
                    autoComplete='off'
                    //vamos a darle la descripcion que introducimos en el formulario al input mediante el value
                    value={description}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className='btn btn-outline-primary mt-1 btn-block'>
                    Agregar
                </button>

            </form>
        </>
    )
}
