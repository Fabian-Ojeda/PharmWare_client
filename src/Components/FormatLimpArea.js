import React, {useState} from "react";
import FormLimAre from "./FormLimAre";
import ShowFormatAre from "./ShowFormatAre";

const FormatLimpArea = () => {

    const formLA = <FormLimAre/>
    const showFormats = <ShowFormatAre/>
    const buttonShow = <button className={'btn btn-secondary'} onClick={() => changeComponent(2)}>Mostrar Formatos Diligenciados</button>
    const buttonDigit = <button className={'btn btn-secondary'} onClick={() => changeComponent(1)}>Rellenar Formato</button>
    const [component, setComponent] = useState(formLA)
    const [myButton, setMyButton] = useState(buttonShow)
    const changeComponent = (index) => {
        if (index===1){
            setComponent(formLA)
            setMyButton(buttonShow)
        }else {
            setComponent(showFormats)
            setMyButton(buttonDigit)
        }
    }


    return(
        <div>
            <h1>Limpieza de areas</h1>
            <div className={'mt-4'}>
                {myButton}
            </div>
            {component}
        </div>)
}

export default FormatLimpArea