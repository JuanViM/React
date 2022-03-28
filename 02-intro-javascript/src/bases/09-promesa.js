import { getHeroesById, getHeroesByOwner } from "./bases/08-impo-expor";


// const promesa = new Promise(( resolve,reject ) => {
//     setTimeout(() => {
//         const heroes = getHeroesById(2);
//         resolve(heroes);
//     },2000)
// });


// promesa.then((heroes) => {
//    let heroe = heroes;
//     return heroe;
// });

// console.log(heroe);

//esta funcion recoge un id y retorna una promesa
const getHeroesByIdAsyn = (id) => {
    return new Promise(( resolve,reject ) => {
        // espera 2 s para realizar la siguiente accion
        setTimeout(() => {
            //guardamos en heroes el heroe que retorna la funcion siguiente por el id
            const heroes = getHeroesById(id);
            //si heroes esta relleno devuelve el promise resuelto con el parametro heroes
            if (heroes) {
                resolve(heroes);
                //sino devuelve el catch del error de la promise
            }else{
                reject("error al encontrar el heroe");
            }
            
        },2000)
    });
};

//llamamos a la funcion y le pasamos el parametro id 
getHeroesByIdAsyn(1)
//llamamos al then por si la promise tiene exito que nos retorne el heroe 
.then((heroe) =>
    console.log("El heroe es " , heroe))
    //llamamos al catch y en caso e que de error nos llamara al catch cogiendonos el mensaje de error especificado
.catch(err => console.warn(err))

//podriamos refactirizar codigo y hacerlo de la siguiente manera

getHeroesByIdAsyn(2)
.then(console.log)
    .catch(console.warn)