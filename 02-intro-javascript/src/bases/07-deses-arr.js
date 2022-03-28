//desestructuracion de arreglos

const personajes = ["Goku","Vegeta","Trunk"];

const [pj1] = personajes;

console.log(pj1);

const retornaArray = () => {
    return ["ABC",123];
}

const [letras,numeros] = retornaArray();
console.log(letras);
console.log(numeros);

//Tarea
const useState = ( valor ) => {
    return [ valor, () =>{ console.log('Hola mundo') } ];
}

const arr = useState('Goku');
//Tarea

const [nombre , setNombre] = useState("vegeta");
console.log(arr);
console.log(nombre);
setNombre();