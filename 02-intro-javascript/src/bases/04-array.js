//arreglos en js

//aunque se puede crear asi hay una manera mas comun
const arreglo = new Array();

//la manera de crear un array mas normal seria

const array = [1,2,3,4];

let array2=[...array,5];

//de esta manera creamos un nuevo array mediante la norma de la funcion que le hemos dicho
const array3=array2.map( function(numero) {
    return numero * 2;
});

console.log(arreglo);
console.log(array);
console.log(array2);
console.log(array3);