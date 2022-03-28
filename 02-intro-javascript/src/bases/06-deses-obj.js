//desestructuracion

const persona = {
    nombre:"tonny",
    edad:45,
    clave:"ironman",
    
};

const {nombre} = persona;

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);
// console.log(nombre);

const UseContext = ({clave,edad,rango="capitan"}) => {
   // console.log(usuario)
//   console.log(clave,edad,rango);
return{
    nombreClave:clave,
    anios:edad,
    rank:rango,
    latlng:{
        lat:15.6756,
        lng:45.6545,
    }
}
};

const avenger = UseContext(persona);

const {nombreClave,anios,rank,latlng} = avenger;

//hay otra manera de desestructurar un objeto anidado la cual seria de la siguiente manera
//primero convertimos el objeto anidado en un objeto aparte y luego lo desestructuramos tbm
const {lat, lng} = latlng;

console.log(nombreClave,anios,rank);
console.log(lat,lng);