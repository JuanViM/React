import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";


describe('Prueba del hooks useFetchGifs', () => { 
    
    test('debe de retornar el estado inicial', async() => { 
        //con esto creamos un componente virtual para crear nuestro custom hook
        const {result,waitForNextUpdate} = renderHook( () =>useFetchGifs("vegeta"));
        const { data,loading } = result.current;
        // const {data, loading} = useFetchGifs(category);
        await waitForNextUpdate();
      
        expect (data).toEqual([]);
        expect( loading ).toBe(true);
     });

     test('Debe de retornar un array de img y el loading en false', async() => { 
        const {result, waitForNextUpdate} = renderHook( () =>useFetchGifs("vegeta"));

        await waitForNextUpdate();
        const { data,loading } = result.current;
        // const {data, loading} = useFetchGifs(category);
        console.log(data.length);
        expect(data.length).toBe(50);
        expect( loading ).toBe(false);
      })
 })