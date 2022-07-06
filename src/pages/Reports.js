import React, {useEffect, useState} from "react";
import ReportDaily from "../Components/ReportDaily";
import ReportMonthly from "../Components/ReportMonthly";
import {useNavigate} from "react-router-dom";

const Reports = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")){
            navigate('/');
        }
    });

    const [componentSelected, setComponentSelected] = useState(<br/>)

    const changeComponent = (identifier) => {
        if (identifier===1){
            const component = <ReportDaily/>
            setComponentSelected(component)
        } else {
            const component = <ReportMonthly/>
            setComponentSelected(component)
        }
    }


    return(
        <div className={'container'}>
            {/* Container Parte superior */}
            <div>
                <h1 className='TitleSection'>Reportes</h1>
            </div>
            {/* Container De botones */}
            <div className={'row mt-5'}>
                <div className={'col'} align={'center'}>
                    <button className={'btn btn-secondary'} onClick={()=> changeComponent(1)}>Reporte diario de ventas</button>
                </div>
                <div className={'col'} align={'center'}>
                    <button className={'btn btn-secondary'}  onClick={()=> changeComponent(2)}>Reporte mensual de ventas</button>
                </div>
            </div>
            {/*Container del reporte seleccionado*/}
            <div className={'mt-4'} align={'center'}>
                {componentSelected}
            </div>
        </div>
    )
}

export default Reports