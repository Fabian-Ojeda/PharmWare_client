import React, {useState} from "react";
import FormAlerSan from "./FormAlerSan";
import ShowFormatAlerSan from "./ShowFormatAlerSan";

const FormatAlerSan = () => {
    const formAlerSAn = <FormAlerSan/>
    const showFormats = <ShowFormatAlerSan/>
    const buttonShow = <button className={'btn btn-secondary'} onClick={() => changeComponent(2)}>Mostrar Formatos Diligenciados</button>
    const buttonDigit = <button className={'btn btn-secondary'} onClick={() => changeComponent(1)}>Rellenar Formato</button>
    const [component, setComponent] = useState(formAlerSAn)
    const [myButton, setMyButton] = useState(buttonShow)
    const changeComponent = (index) => {
        if (index===1){
            setComponent(formAlerSAn)
            setMyButton(buttonShow)
        }else {
            setComponent(showFormats)
            setMyButton(buttonDigit)
        }
    }

    return(
        <div>
            <h1>Alertas Sanitarias</h1>
            <div className={'mt-4'}>
                {myButton}
            </div>
            {component}
        </div>)
}

export default FormatAlerSan