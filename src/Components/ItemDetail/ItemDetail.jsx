//ItemDetail.js, que debe mostrar la vista de detalle de un ítem incluyendo su descripción, una foto y el precio

import { Botonera } from "../Botonera";

export const ItemDetail = ({
    id,
    nombre,
    categoria,
    desc,
    precio,
    stock,
    img,
}) => {
    return (
        <div className="p-6  items-center">
        
           
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src={img} alt="item" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{nombre} </div>
                    <p class="text-gray-700 text-base">
                    {desc}
                    </p>
                </div>
              
                <Botonera   />
            </div>
        </div>
    );
};
