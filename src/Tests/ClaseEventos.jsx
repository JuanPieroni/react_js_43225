export const ClaseEventos = () => {

   const clickear = (e => { 

    console.log(e);})



    return (
        <div className="h-19">
            <h2 onClick={clickear} className="text-center">EVENTOS</h2>
        </div>
    );
};
