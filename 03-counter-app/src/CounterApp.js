import property from "prop-types";
import { useState } from "react";

const CounterApp= ({value = 10}) => {

const [counter,setCounter] = useState(value);

const suma = () => {
    setCounter(counter+1);
}
const resta = () => {
    setCounter(counter-1);
}
const reset = () => {
    setCounter(value);
}

    return (
        <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
        <button onClick={suma}>+1</button>
        <button onClick={resta}>-1</button>
        <button onClick={reset}>reset</button>
        </>
    )        
    
}

CounterApp.propsType={
    value: property.number
}

export default CounterApp;