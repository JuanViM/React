//funciones

const saludar = function (nombre) {
    return `hola ${nombre}`;    
}

const saludar2 = (nombre) => {
    return `hola ${nombre}`; 
}

const saludar3 = (nombre) => `hola ${nombre}`;

console.log(saludar3("Juan"));

//tarea
//1.tranformar a una funcion de flecha
//2. retornar un objeto implicito
//3. pruebas
const getUsuarioActivo = (nombre) => 
     ({
        id:789876,
        username:nombre,   
});

const usuarioActivo = getUsuarioActivo("vegeta");

console.log(usuarioActivo);