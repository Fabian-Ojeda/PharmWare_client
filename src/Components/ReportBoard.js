import React, {useState} from "react";

const ReportBoard = (props) => {

    const [dataReport, setDataReport] = useState({'19p':12345,'5p':6789,'0p':98765,tp:4321})

  return(
      <div className={'col'} style={{display:props.visible}}>
          <div className={'row mt-4'}>
              <h4>Total de ventas de productos con 19%</h4>
              <h4>{dataReport["19p"]}</h4>
          </div>
          <div className={'row mt-4'}>
              <h4>Total de ventas de productos con 5%</h4>
              <h4>{dataReport["5p"]}</h4>
          </div>
          <div className={'row mt-4'}>
              <h4>Total de ventas de productos con 0%</h4>
              <h4>{dataReport["0p"]}</h4>
          </div>
          <div className={'row mt-4'}>
              <h4>Total de ventas</h4>
              <h4>{dataReport.tp}</h4>
          </div>
      </div>
  )
}

export default ReportBoard