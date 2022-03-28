const persona = {
    name:"tonny",
    surname: "burcher",
    age:45,
    direccion:{
        ciudad:"new york",
        zip:1456464564434768,
        lat:14.565762,
        long:45.876765,

    }
};

//podemos querer clonar persona uno en otra de la siguiente manera

const persona2 = persona;

//pero esto realmente lo que hace es compartir ambos el mismo espacio en memoria 
//de hecho si cambiamos persona2 cambiariamos persona

persona2.name="manolo";
console.log(persona);

//de esta manera vemos el objeto en modo de una tabla para mas facil visualizacion
console.table(persona2);

//para crear un objeto nuevo y que apunte a otro espacio en memoria seria con 3 puntos de la siguiente manera

const persona3 = {...persona};

persona3.name="carajaula";

console.log(persona);
console.log(persona2);
console.log(persona3);