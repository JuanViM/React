import { retornaArreglo } from "../../base/07-deses-arr";


describe('first', () => { 
    test('should first', () => { 
        
        
        
     })
 })

describe('Pruebas en 07-deses-arr', () => { 

    test('retornaArreglo debe de retornar un string y un numero', () => { 

        const array = ['ABC', 123];

        const [letras,numeros] = retornaArreglo();

        //con esto probamos que en letras tenga un string y en numeros contenga un number
        //sin importar el numero que sea o la letra que sea
      
        expect(typeof letras).toBe("string");
        expect(typeof numeros).toBe("number");
        
     })
 })