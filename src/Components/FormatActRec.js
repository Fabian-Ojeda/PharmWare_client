import React, {useState} from "react";
import FormActasRecep from "./FormActasRecep";
import ShowFormatAreaRec from "./ShowFormatAreaRec";

const FormatActRec = () => {

    const formAR = <FormActasRecep/>
    const showFormats = <ShowFormatAreaRec/>
    const buttonShow = <button className={'btn btn-secondary'} onClick={() => changeComponent(2)}>Mostrar Formatos Diligenciados</button>
    const buttonDigit = <button className={'btn btn-secondary'} onClick={() => changeComponent(1)}>Rellenar Formato</button>
    const [component, setComponent] = useState(formAR)
    const [myButton, setMyButton] = useState(buttonShow)
    const changeComponent = (index) => {
        if (index===1){
            setComponent(formAR)
            setMyButton(buttonShow)
        }else {
            setComponent(showFormats)
            setMyButton(buttonDigit)
        }
    }

    return(
        <div>
            <h1>Actas de recepción</h1>
            <div className={'mt-4'}>
                {myButton}
            </div>
            {component}
        </div>)
}

export default FormatActRec