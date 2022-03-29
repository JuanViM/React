import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Probamos 09-promesas', () => { 
    //cuando hacemos test unitarios siempre debemos de poner entre parentesis done para que nos ejecute las tareas asyncronas 

    test('getHeroeByIdAsync debe de retornar un heroe async', (done) => { 
        
        
        const id = 1;

        getHeroeByIdAsync(id)
        .then(heroe => {
            expect(heroe).toBe(heroes[0]);
            done();
        });


     });

     test('getHeroeByIdAsync debe mostrar el mensaje de error', (done) => { 
         const id = 15;
         getHeroeByIdAsync(id)
         .catch((error)=> {
             expect(error).toBe("No se pudo encontrar el héroe");
             done();
         });
         
      });
 })