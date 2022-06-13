import React, {useState}from "react";

const ButtonTable = (props) => {

    const [name, setName] = useState('')

    const mostrarQueSirve = (name) =>{
        alert('Mire el nombre: '+name)
    }

    return(
        <button className={'btn btn-warning'} onClick={() => mostrarQueSirve(props.name)}>Mirar</button>
    )
}

export default ButtonTable