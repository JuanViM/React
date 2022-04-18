import React from 'react';
import { TodoListItem } from './TodoListItem';



export const TodoList = ({ todo, handleToggle, handleDelete }) => {
    return (
        <>
            <ul className='list-group list-group-flush'>


                {
                    //vamos a mapear los todo para retornar toda la lista de objetos que esta tenga ademas debemos de ponerle el key que seria el id
                    todo.map((todo, i) => (
                        <TodoListItem
                            key={todo.id} 
                            todo={todo}
                            index={i}
                            handleToggle={handleToggle}
                            handleDelete={handleDelete} />
                    ))
                }
            </ul>
        </>
    )
}
