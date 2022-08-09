import React from "react";

const ButtonTable = (props) => {
    //Boton de la tabla de inventario
    return(
        <div>
            <button className={'btn btn-warning'} data-bs-toggle="modal" data-bs-target="#exampleModal"
                    onClick={() => props.changeSelecteditem(props.name, props.idProduct)}>Ver Lotes</button>
        </div>
    )
}

export default ButtonTable