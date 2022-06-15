import React, { useState } from "react";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
registerLocale("es", es)

const ModifyInventory = (props) => {

    const [fecha, setFecha] = useState(null)
    const changeDate = (fecha) =>{
        setFecha(fecha)
        alert('la fecha seleccionada es: '+fecha)
    }
    const numberIn = props.number;
    let button;
    if (numberIn==1) {
        button = <button>Es uno</button>;
    } else {
        button = <button>Es dos</button>;    }
    return(
        <div className={'container'}>
            <h1>Modificación de Inventario</h1>
            <div>
                {/*Panel del busqueda manual*/}
                <div className={'col'}>
                    <div className={'row'}>
                        <input type={'text'}/>
                    </div>
                    <div className={'row'}>
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            Coincidencias
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li>
                                <button className="dropdown-item" type="button">Coincidencia 1</button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button">Coincidencia 2</button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button">Coincidencia 3</button>
                            </li>
                        </ul>
                    </div>
                </div>
                {/*Panel de opciones */}
                <div className={'row'}>
                    {/*Panel del formulario*/}
                    <div className={'col'}>
                        <div className={'row'}>
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                Coincidencias
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li>
                                    <button className="dropdown-item" type="button">Coincidencia 1</button>
                                </li>
                                <li>
                                    <button className="dropdown-item" type="button">Coincidencia 2</button>
                                </li>
                                <li>
                                    <button className="dropdown-item" type="button">Coincidencia 3</button>
                                </li>
                            </ul>
                        </div>
                        <div className={'row'}>
                            <div className={'col'}>
                                <input type={'text'}/>
                            </div>
                            <div className={'col'}>
                                <input type={'number'}/>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col'}>
                            <DatePicker placeholderText={"Fecha de vencimiento"} locale={"es"} onChange={(date) => changeDate(date)}
                                        selected={fecha} dateFormat="MM/yyyy" showMonthYearPicker/>
                            </div>
                            <div className={'col'}>
                                icono
                            </div>
                        </div>

                    </div>
                    {/*Panel de la calculadora*/}
                    <div className={'col'}>
                        <div className={'row'}>
                            <h3>Calculadora de precio de venta</h3>
                        </div>
                        <div className={'row'}>
                            <input type={'number'}/>
                        </div>
                        <div className={'row'}>
                            <input type={'number'}/>
                        </div>
                        <div className={'row'}>
                            <button>Calcular</button>
                        </div>
                    </div>
                </div>
            </div>
            {button}
        </div>)
}

export default ModifyInventory