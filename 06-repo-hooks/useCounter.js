import { useState } from "react"

//debemos recordar que un hooks no es mas que una simple funcion

export const useCounter = (initialState = 10) => {

    const [counter, setCounter] = useState(initialState);

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(initialState)
    };

    return {
        counter,
        increment,
        decrement,
        reset
    };

}
