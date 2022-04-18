
export const todoReducer = (state = [],action) => {

    switch (action.type) {
        case "add":
            //volvemos a usar el operador spread para rellenar el array con lo que tenia y le añadimos lo nuevo
            return [...state,action.payload];
            //vamos a borrar un todo, el filter va devolver todos los elementos de state que cumplan una condicion
            // la condicion seria que todo.id sea diferente al todo que yo quiera borrar
        case "delete":
            return state.filter( todo =>todo.id != action.payload);


        case "realizado":
            //vamos a utilizar un map para recorrer cada uno de los elementos y retornar un valor
            //comentamos esta linea para simplificar el codigo
            // return state.map( todo => {
          
            //     //si el todo.id introducido es igual al action.payload
            //     if(todo.id == action.payload){
            //         return {
            //             ...todo,
            //             done:!todo.done,
            //         }
            //         }else {
            //             return todo;
            //         }
            // });
            //lo simplificamos de la siguiente manera
            //con esto mapeamos igual que el anterior pero buscamos de la siguiente manera
            //si el todo introducido el id coincide con un id de dentro del state 
            //entonces retorname el array de todo y el todo con done en false
            //sino retorname el array,todo esto realizado mediante un operador ternario
            return state.map( todo =>
                (todo.id ==action.payload)?{...todo,done:!todo.done} : todo)
        default:
            return state;
    }
}