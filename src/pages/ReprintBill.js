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
    const [bills, setBills] = useState([{id:0,hour:'12:32 m'},{id:1,hour:'10:26 a.m'},{id:2,hour:'07:12 a.m'},{id:3,hour:'05:10 a.m'}
        ,{id:4,hour:'08:56 a.m'},{id:5,hour:'09:41 a.m'},{id:6,hour:'06:12 p.m'},{id:7,hour:'10:14 a.m'},{id:8,hour:'05:02 p.m'},
        {id:9,hour:'11:58 a.m'}])
    const onSubmit = (data) => {
        let dataToSend = data.dateBill.getFullYear()+"/"+data.dateBill.getMonth()+"/"+data.dateBill.getDate()
        alert("Nos llego la fecha "+dataToSend)
        console.log(data)
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
                bills={bills}
            />
        </div>
    </div>)
}

export default ReprintBill