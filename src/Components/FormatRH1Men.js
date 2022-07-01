import React, {useState} from "react";
import FormRH1Men from "./FormRH1Men";
import ShowFormatRH1Men from "./ShowFormatRH1Men";

const FormatRH1Men = () => {
    const changeComponent = (index) => {
        if (index===1){
            setComponent(formRH1)
            setMyButton(buttonShow)
        }else {
            setComponent(showFormats)
            setMyButton(buttonDigit)
        }
    }

    const formRH1 = <FormRH1Men/>
    const showFormats = <ShowFormatRH1Men/>
    const buttonShow = <button className={'btn btn-secondary'} onClick={() => changeComponent(2)}>Mostrar Formatos Diligenciados</button>
    const buttonDigit = <button className={'btn btn-secondary'} onClick={() => changeComponent(1)}>Rellenar Formato</button>
    const [component, setComponent] = useState(formRH1)
    const [myButton, setMyButton] = useState(buttonShow)

    return(
        <div>
            <h1>RH1 Mensual</h1>
            <div className={'mt-4'}>
                {myButton}
            </div>
            {component}
        </div>)
}

export default FormatRH1Men