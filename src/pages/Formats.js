import React, {useState} from "react";
import FormatTempHumed from "../Components/FormatTempHumed";
import FormatLimpArea from "../Components/FormatLimpArea";
import FormatActRec from "../Components/FormatActRec";
import FormatRH1Men from "../Components/FormatRH1Men";
import FormatRH1An from "../Components/FormatRH1An";
import FormatAlerSan from "../Components/FormatAlerSan";

const Formats = () => {

    const [component, setComponent] = useState(<br/>)
    const changeComponent = (index) => {
      switch (index) {
          case 1:
              setComponent(<FormatTempHumed/>)
              break
          case 2:
              setComponent(<FormatLimpArea/>)
              break
          case 3:
              setComponent(<FormatActRec/>)
              break
          case 4:
              setComponent(<FormatRH1Men/>)
              break
          case 5:
              setComponent(<FormatRH1An/>)
              break
          case 6:
              setComponent(<FormatAlerSan/>)
              break
          default:
              break

      }
    }

    return(
        <div className={'container'}>
            <h1 className='TitleSection'>Formatos</h1>
            {/*PanelPrincipal*/}
            <div className={'mt-3'}>
                {/*Panel de botones*/}
                <div className={'containerButtonsFormats'}>
                    <button className="btn btn-secondary btnFormats" onClick={()=> changeComponent(1)}>Temp y humedad</button>
                    <button className="btn btn-secondary btnFormats" onClick={()=> changeComponent(2)}>Limpieza de areas</button>
                    <button className="btn btn-secondary btnFormats" onClick={()=> changeComponent(3)}>Actas de recepción</button>
                    <button className="btn btn-secondary btnFormats" onClick={()=> changeComponent(4)}>RH1 Mensual</button>
                    <button className="btn btn-secondary btnFormats" onClick={()=> changeComponent(5)}>RH1 Anual</button>
                    <button className="btn btn-secondary btnFormats" onClick={()=> changeComponent(6)}>Alertas sanitarias</button>
                </div>
                {/*Panel del formato*/}
                <div className={'mt-3'}>
                    {component}
                </div>
            </div>
        </div>

    )
}

export default Formats