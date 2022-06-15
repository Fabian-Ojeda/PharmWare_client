import React from "react";

const ButtonTable = (props) => {

    const nameModal = props.name+"modal"

    const mostrarQueSirve = (name) =>{
        alert('Mire el nombre: '+name)
    }

    return(
        <div>
            <button className={'btn btn-warning'} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => mostrarQueSirve(props.name)}>Mirar</button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Lotes del producto</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {props.name}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ButtonTable