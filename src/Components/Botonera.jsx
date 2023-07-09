export const Botonera = ({
    stock,
    counter,
    masUno,
    menosUno,
    reset,
    handleAgregar,
}) => {
    return (
        <>
            <div className=" px-8  ">
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={counter > 1 ? menosUno : undefined}
                >
                    -
                </button>

                <span className="inline-block m-5">{counter}</span>

                <button
                    className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={counter < stock ? masUno : undefined}
                >
                    +
                </button>

                <button
                    className="block bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={handleAgregar}
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
