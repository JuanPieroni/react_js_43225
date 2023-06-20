import { useCounter } from "../hooks/useCounter";

export const Botonera = () => {
    const { counter, masUno, menosUno, reset } = useCounter();
    console.log(counter);
    return (
        <>
            <div className=" px-8  ">
                <button
                    className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={masUno}
                >
                    +
                </button>
                <h2 className="inline-block m-5">{counter}</h2>
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={menosUno}
                >
                    -
                </button>

                <button
                    className="block bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={reset}
                >
                    Agregar al Carrito
                </button>
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={reset}
                >
                    Reset
                </button>
            </div>
        </>
    );
};
