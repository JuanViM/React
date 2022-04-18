import React, { useEffect, useReducer } from 'react';
import { useForm } from '../../hook/useForm';
import "./styles.css";
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';


//la funcion init va a devolver el objeto que estaba en initialState, ahora no tenemos el initialState asi que 
//en  const [todo,dispatch] debemos mandarlo como un arreglo vacio. "const [todo,dispatch] = useReducer(todoReducer, [],init);"
const init = ()=>{

//vamos a retornar el localStorage de la siguiente manera, si no es null retorna eso, si es null retorna un array vacio
    return JSON.parse(localStorage.getItem("todo")) || [];

    // return [{
    //     id:new Date().getTime(),
    //     desc:"aprender React",
    //     done:false,
    // }];

}

export const TodoApp = () => {

    //el dispatch es una funcion la cual le manda una accion y va a saber a que reducer hay que mandarle la informacion y va a redibujarlo
   //le mandamos al final una funcion llamada init que evitara que se ejecute siempre que hay cambios
    const [todo,dispatch] = useReducer(todoReducer,[],init);


    //vamos a realizar un useEffect para que cada vezx que los todos cambien se guarden en el localStorage
    useEffect(() => {
      //vamos a guardar en el localStorage pero este no guardo objetos solo string por lo tanto debemos pasarlo a JSON.stringlify
      localStorage.setItem("todo",JSON.stringify(todo));
    }, [todo]);

    const handleDelete = (todoId)=>{

        const borrarTarea = {
            type:"delete",
            payload:todoId,
        }
        dispatch(borrarTarea);
       
    }
    
    const handleToggle = (todoId) => {
        
        //vamos a hacerlo sinc rear const mandandole el objeto del tiron
        dispatch({
            type:"realizado",
            payload:todoId
        });
    }

    const handleAddTodo = (newTodo) =>{
         
        //le mandamos a dispatch la accion de añadir tarea
        dispatch({
            type:"add",
            payload:newTodo,
        });
    }
    
    
   
  return (
    <div>
        <h1>TodoApp <small>({todo.length})</small></h1>
        <hr />

    <div className='row'>
        <div className='col-7'>
        <TodoList 
        todo={todo}
        handleDelete={handleDelete}
        handleToggle={handleToggle}        
        />
        </div>

        <div className='col-5'>
            
        Todo
        <TodoAdd 
        handleAddTodo={handleAddTodo}/>
        </div>

    </div>

    </div>
  )
}
