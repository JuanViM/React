import { getUser, getUsuarioActivo } from "../../base/05-funciones";
import "@testing-library/jest-dom";

describe('prueba de funciones 05', () => { 

    test('getUser de retornar un objeto', () => { 

        const objeto = {
            uid: 'ABC123',
        username: 'El_Papi1502'
        }
        const usuario = getUser();

        expect( usuario).toEqual(objeto);
        
     })

     test('getUsuarioActivo debe retornar un objeto', () => { 

        const nombre = "Juan";
        const objecto2={
            uid: 'ABC567',
            username: nombre
        };
        const usuario2 = getUsuarioActivo(nombre);
        console.log(usuario2);
        expect( usuario2).toEqual(objecto2);
        

      })
 })