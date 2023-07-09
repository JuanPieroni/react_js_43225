import { useState } from "react"

export const useCounter = () => {
    const [counter, setCounter] = useState(1)
 
    const masUno = () => {
        setCounter(counter + 1)
    }
    const menosUno = () => {
        setCounter(counter - 1)
    }

    const reset = () => {
        setCounter(1)
    }

    return {
        counter,
        masUno,
        menosUno,
        reset,
    }
}
