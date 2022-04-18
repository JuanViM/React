
//aqui tendriamos las tareas que tenemos por hacer
const tareas = [{
    id:1,
    todo:"comprar pan",
    done:false,
}];
//a esta funcion le vamos a mandar el state o tarea y una funcion llamda accion que sera lo que modificara el state
//que por sera igual a las tareas
const todoReducer = (state = tareas,action) => {
 //con la ? le decimos que si tiene algun valor lea el tipo y que sino no haga nada
    if (action?.type == "agregar" ) {
        //para agregarlo usaremos el operador spreat para esparcir todos los elementos que tenemos en el array "...state" y luego añadirle los nuevos "action.payload" 
        return [...state,action.payload]
    }
    return state;
};

let listaTareas = todoReducer();

//para añadir una nueva tarea lo haremos d ela siguiente manera

const tarea2 = {
    id:2,
    todo:"comprar leche",
    done:false,
}

// las acciones son objetos,debemos darle el nombre de payload como recomendacion y el type seria lo que va a hacer, en este caso agregar
const AgregarTareas = {
    type: "agregar",
    payload:tarea2,
}

listaTareas = todoReducer( tareas, AgregarTareas);

console.log(listaTareas);