import React from "react";

const ButtonTable = (props) => {

    return(
        <div>
            <button className={'btn btn-warning'} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => props.changeSelecteditem(props.name)}>Mirar</button>
        </div>
    )
}

export default ButtonTable