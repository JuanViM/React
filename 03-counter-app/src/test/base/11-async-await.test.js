import { getImagen } from "../../base/11-async-await"

describe('11-async pruebas', () => { 

    test('getImagen debe de retornar una url', async() => { 
        
        const url = await getImagen();
        console.log(url);
        expect( url.includes("https")).toBe(true);
     });
 });