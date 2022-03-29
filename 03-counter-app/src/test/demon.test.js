 
 test('deben de ser iguales los string', () => { 
     // 1. Inicializacion
     const mensaje = "Hola mundo";
     // 2. estimulo
     const mensaje2 = `Hola mundo`;

     //3.observamos el comportamiento

     expect(mensaje).toBe(mensaje2);
 })