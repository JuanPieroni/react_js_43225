import { useState } from "react";

export const useCounter = (init = 0, step1 = 1 ) => {
    const [counter, setCounter] = useState(0);

    const masUno = () => {
        setCounter(counter + step1);
    };
    const menosUno = () => {
        setCounter(counter - step1);
    };

    const reset = () => {
        setCounter(init);
    };

    return {
        counter,
        masUno,
        menosUno,
    reset,
       
    };
};
