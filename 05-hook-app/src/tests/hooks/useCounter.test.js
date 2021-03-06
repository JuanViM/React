import { renderHook,act } from "@testing-library/react-hooks"
import { useCounter } from "../../hook/useCounter";

describe('Pruebas en useCounter', () => { 
    test('debe de retornar valores por defecto', () => { 
         //desestructuramos el resultado
        const {result} = renderHook (()=> useCounter());
        console.log(result.current);

        
        expect( result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe("function");
        expect(typeof result.current.decrement).toBe("function");
        expect(typeof result.current.reset).toBe("function");
     })

     test('debe de tener el counter en 100', () => { 
        //desestructuramos el resultado
       const {result} = renderHook (()=> useCounter(100));
       console.log(result.current);

       
       expect( result.current.counter ).toBe(100);
       
    })

    test('debe de incrementar el counter en 1', () => { 
        //desestructuramos el resultado
       const {result} = renderHook (()=> useCounter(100));

       const {increment} = result.current;
       
       act(()=> {

         increment();
       })

       const {counter} = result.current;
       expect (counter).toBe(101);

       
    })

    test('debe de resetar el counter en 100', () => { 
      //desestructuramos el resultado
     const {result} = renderHook (()=> useCounter(100));

     const {reset} = result.current;
     
     act(()=> {

       reset();
     })

     const {counter} = result.current;
     expect(counter).toBe(100);

     
  })

  test('debe de incrementar el counter en 1', () => { 
   //desestructuramos el resultado
  const {result} = renderHook (()=> useCounter(100));

  const {decrement} = result.current;
  
  act(()=> {

    decrement();
  })

  const {counter} = result.current;
  expect(counter).toBe(99);

  
})


 })