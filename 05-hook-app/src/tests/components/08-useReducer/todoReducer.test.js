import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos";


describe('Pruebas del todoReduce', () => { 
    
    test('Debe de retornar el estado por defecto ', () => { 
        
        const state = todoReducer(demoTodos,{});

        expect(state).toEqual(demoTodos);
     })

     test('Debe de agregar un todo ', () => { 
        
        const newTodo={
            id:3,
            desc:"aprender Spreat",
            done:false
        };

        const action = {
            type:"add",
            payload:newTodo
        }
        const state = todoReducer(demoTodos,action);

        expect(state.length).toBe(3);
        
     })

     test('Debe de borrar un todo', () => { 

        const action = {
            type:"delete",
            payload:1
        }

        const state = todoReducer(demoTodos,action);
        expect(state.length).toBe(1);
        expect(state.length).toEqual(demoTodos[1]);
      })

      test('debe de cambiar el valor del todo', () => { 
        const action = {
            type:"realizado",
            payload:1
        }

        const state = todoReducer(demoTodos,action);
        expect(state[0].done).toBe(true);
        

       })
 })