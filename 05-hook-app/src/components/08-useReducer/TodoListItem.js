import React from 'react'

export const TodoListItem = ({todo, index, handleToggle, handleDelete}) => {
    return (
        <>
            <li
                key={todo.id}
                className="list-group-item">
                {/* Esto quiere decir que si todo.done es true entonces && retorna la clase complete 
                  sino no haga nada */}
                <p className={`${todo.done ? 'complete' : null}`}
                    onClick={() => handleToggle(todo.id)}> {index + 1}.  {todo.desc}</p>
                <button
                    className='btn btn-danger'
                    onClick={() => handleDelete(todo.id)}>
                    borrar

                </button>
            </li>
            </>
    )
}
