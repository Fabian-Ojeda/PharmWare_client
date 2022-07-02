import React, {useState} from "react";
import FormRH1An from "./FormRH1An";
import ShowFormatRH1An from "./ShowFormatRH1An";

const FormatRH1An = () => {
    const formRH1An = <FormRH1An/>
    const showFormats = <ShowFormatRH1An/>
    const buttonShow = <button className={'btn btn-secondary'} onClick={() => changeComponent(2)}>Mostrar Formatos Diligenciados</button>
    const buttonDigit = <button className={'btn btn-secondary'} onClick={() => changeComponent(1)}>Rellenar Formato</button>

    const [component, setComponent] = useState(formRH1An)
    const [myButton, setMyButton] = useState(buttonShow)

    const changeComponent = (index) => {
        if (index===1){
            setComponent(formRH1An)
            setMyButton(buttonShow)
        }else {
            setComponent(showFormats)
            setMyButton(buttonDigit)
        }
    }


    return(
        <div>
            <h1>RH1 Anual</h1>
            <div className={'mt-4'}>
                {myButton}
            </div>
            {component}
        </div>)
}

export default FormatRH1An