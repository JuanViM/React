import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-string";



describe('pruebas en 02-templates', () => { 

    test('getSaludo debe de retornar hola juan', () => { 

        const nombre = "Juan";

        const saludo = getSaludo(nombre);

        expect( saludo ).toBe("Hola "+nombre);

        
     })

     test('getSaludo debe retornar hola carlos sino tiene valores', () => { 
         
         const saludo = getSaludo();

         expect(saludo).toBe("Hola carlos");

      })
 })