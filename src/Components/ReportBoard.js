import React, {useState} from "react";
import FormatterPrice from "../Tools/FormatterPrice";

const ReportBoard = (props) => {

  return(
      <div className={'col'} style={{display:props.visible}}>
          <div className={'row mt-4'}>
              <h4>Total de ventas de productos con 19%</h4>
              <h4>{props.reports.total19 ? FormatterPrice(""+props.reports.total19) : 0}</h4>
          </div>
          <div className={'row mt-4'}>
              <h4>Total de ventas de productos con 5%</h4>
              <h4>{props.reports.total5 ? FormatterPrice(""+props.reports.total5) : 0}</h4>
          </div>
          <div className={'row mt-4'}>
              <h4>Total de ventas de productos con 0%</h4>
              <h4>{props.reports.total0 ? FormatterPrice(""+props.reports.total0) : 0}</h4>
          </div>
          <div className={'row mt-4'}>
              <h4>Total de ventas</h4>
              <h4>{FormatterPrice(""+(props.reports.total19+props.reports.total5+props.reports.total0))}</h4>
          </div>
      </div>
  )
}

export default ReportBoard