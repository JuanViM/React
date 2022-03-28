//import {heroes} from "./data/heroes"

import { heroes, owners, cuentas} from "../data/heroes";


//import {heroes} from './data/heroes'

export const getHeroesById = (id) =>  heroes.find((heroe) => heroe.id == id);

// console.log(getHeroesById(2));

export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner == owner);

// console.log(getHeroesByOwner("DC"));

// console.log(owners);

// console.log(cuentas);