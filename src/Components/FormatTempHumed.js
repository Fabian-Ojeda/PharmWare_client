import React, {useState} from "react";
import FormTempHum from "./FormTempHum";
import ShowFormatTemHum from "./ShowFormatTemHum";

const FormatTempHumed = () => {
    const changeComponent = (index) => {
        if (index===1){
            setComponent(formTH)
            setMyButton(buttonShow)
        }else {
            setComponent(showFormats)
            setMyButton(buttonDigit)
        }
    }
    const formTH = <FormTempHum/>
    const showFormats = <ShowFormatTemHum/>
    const buttonShow = <button className={'btn btn-secondary'} onClick={() => changeComponent(2)}>Mostrar Formatos Diligenciados</button>
    const buttonDigit = <button className={'btn btn-secondary'} onClick={() => changeComponent(1)}>Rellenar Formato</button>
    const [component, setComponent] = useState(formTH)
    const [myButton, setMyButton] = useState(buttonShow)
    return(<div>
        <h1>Temperatura y humedad</h1>
        <div className={'mt-4'}>
            {myButton}
        </div>
        {component}
    </div>)
}

export default FormatTempHumed