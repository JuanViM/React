import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en 08-imp-exp', () => { 

    test('getHeroeById deberia retornar un heroe dependiendo de el id insertado', () => { 

        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find((h)=>heroe.id === id);
        expect(heroe).toEqual(heroeData);
     })

     test('getHeroeById deberia retornar undefined si heroe no existe', () => { 

        const id = 10;
        const heroe = getHeroeById(id);
        
        expect(heroe).toBe(undefined);
     })

     test('getHeroesByOwner deberia devolver un array con los heroes de DC', () => { 

        const owner = "DC";

        const heroe = getHeroesByOwner(owner);

        const heroeData = heroes.filter((h)=> h.owner === owner);

        expect(heroe).toEqual(heroeData);


      })

      test('getHeroesByOwner deberia devolver un array con los heroes de Marvel', () => { 

        const owner = "Marvel";

        const heroe = getHeroesByOwner(owner);

        expect(heroe.length).toBe(2);


      })
 })