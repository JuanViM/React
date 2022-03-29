import React from 'react';
import reactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import "./index.css";
import CounterApp from './CounterApp';





const divRoot = document.querySelector('#root');

 //reactDOM.render(<PrimeraApp saludo="Hola soy una arcaxofa" />, divRoot);

reactDOM.render(<CounterApp valor={5}/>, divRoot);


