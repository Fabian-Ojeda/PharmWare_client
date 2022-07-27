import React, {useState, useEffect} from "react";
import { Controller, useForm} from "react-hook-form";
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useNavigate} from "react-router-dom"
import es from 'date-fns/locale/es';
import ContainerTableBills from "../Components/containerTableBills";
registerLocale("es", es)

const ReprintBill = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")){
            navigate('/');
        }
    });
    const {register, formState: {errors}, handleSubmit, control, setValue } = useForm()
    const [dateSelected, setDateSelected] = useState(new Date().getFullYear()+"/"+new Date().getMonth()+"/"+new Date().getDate())
    const onSubmit = (data) => {
        let dataToSend = data.dateBill.getFullYear()+"/"+data.dateBill.getMonth()+"/"+data.dateBill.getDate()
        setDateSelected(dataToSend)
    }

    return(<div className={"container"}>
        <h1 className='TitleSection'>Reimprimir facturas</h1>
        {/*Formulario para ingresar la fecha*/}
        <div className={'mt-5'} align={'center'}>
            <form className="col mr-4 ml-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="divDateBill">
                    <Controller
                        control={control}
                        name={'dateBill'}
                        defaultValue={null}
                        rules={{required:true}}
                        render={({ field }) => (
                            <DatePicker
                                className={'form-control'}
                                placeholderText={"Fecha de factura"}
                                locale={"es"}
                                onChange={(date) => field.onChange(date)}
                                selected={field.value}
                                dateFormat="dd/MM/yyyy"
                                maxDate={new Date()}
                            />
                        )}
                    />
                </div>
                <span className="text-danger text-small d-block mb-2">
                        {errors.dateBill?.type === 'required' && "Por favor seleccione la fecha de la factura"}
                    </span>
                <div className={'mt-3'}>
                    <button className={'btn btn-secondary'} type={'submit'}>Buscar</button>
                </div>
            </form>
        </div>
        <div className={'mt-5'}>
            <ContainerTableBills
                dateSelected={dateSelected}
            />
        </div>
    </div>)
}

export default ReprintBill