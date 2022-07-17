import React , { useState } from "react";
import { Controller, useForm} from "react-hook-form";
import {BsCalendarEvent} from "react-icons/bs";
import DatePicker, {registerLocale} from "react-datepicker";
import SendData from "../Tools/SendData";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
registerLocale("es", es)

const FormAddLotes = (props) => {
    const {register, formState: {errors}, handleSubmit, watch,control, setValue } = useForm()
    const ip = process.env.REACT_APP_IP_SERVER
    let minDate = new Date()
    minDate.setMonth(minDate.getMonth()+1)
    const onSubmitValuesProduct = async (data) => {
        if (props.barCode === 0) {
            alert("No se ha seleccionado un producto")
        } else {
            props.dataSended()
            const dataToSend = {
                "barCode": props.barCode,
                "fecha_vencimiento": (data.expirationDate.getFullYear() + "/" + data.expirationDate.getMonth() + "/1"),
                "cantidad": data.quantityProduct,
                "id_proveedor": data.providers
            }
            const response = await SendData('http://'+ip+'/inventory/add_batch', dataToSend)
            if(response==='OK'){
                props.modifySuccessfull()
            }else {
                props.modifyFailed()
            }
            /*alert("Nos llega por ahora:\nCantidad: " + data.quantityProduct + "\nPrecio: " + data.priceProduct + "\nCodigo de barras: " + props.barCode + "\nProveedor: "
                + data.providers + "\nFecha de vencimiento: " + data.expirationDate.getFullYear() + "/" + data.expirationDate.getMonth() + "/1")*/
        }
    }

    if (props.changePrice==true){
        props.setChangePrice()
        setValue("priceProduct", props.salePrice)
    }


    return(
        <form className="col mr-4 ml-4" onSubmit={handleSubmit(onSubmitValuesProduct)}>
            <div className={'form-group mt-3 row centerHorizontalELements'} align={'center'}>
                <select className="form-select" {...register("providers",{
                    required:true
                })}>
                    <option value="">Proveedor...</option>
                    <option value={1}>Coopidrogas</option>
                    <option value={2}>Laboratorios Aventis</option>
                </select>
                <span className="text-danger text-small d-block mt-1">
                        {errors.providers?.type === 'required' && "Por favor seleccione un proveedor"}
                </span>
            </div>
            <div className={'form-group mt-3 row'}>
                <div className={'form-group col'}>
                    <input
                        name="quantityProduct"
                        className="form-control my-2"
                        type={'number'}
                        placeholder={"Cantidad"}
                        {...register("quantityProduct",{
                            required:true
                        })}
                    /><span className="text-danger text-small d-block mb-2">
                        {errors.quantityProduct?.type === 'required' && "Por favor ingrese la cantidad del producto"}
                    </span>
                </div>
                <div className={'form-group col'}>
                    <input
                        name="priceProduct"
                        className="form-control my-2"
                        type={'number'}
                        placeholder={"Precio de venta"}
                        {...register("priceProduct",{
                            required:true
                        })}
                    />
                    <span className="text-danger text-small d-block mb-2">
                        {errors.priceProduct?.type === 'required' && "Por favor ingrese el precio del producto"}
                    </span>
                </div>
            </div>
            <div className={'form-group mt-3 row centerHorizontalELements'} align={'center'}>
                <div className="groupCalendar">
                    <Controller
                        control={control}
                        name={'expirationDate'}
                        defaultValue={null}
                        rules={{required:true}}
                        render={({ field }) => (
                            <DatePicker
                                className={'form-control'}
                                placeholderText={"Fecha de vencimiento"}
                                locale={"es"}
                                onChange={(date) => field.onChange(date)}
                                selected={field.value}
                                dateFormat="MM/yyyy"
                                minDate={minDate}
                                showMonthYearPicker
                            />
                        )}
                    />


                    <div className="input-group-prepend">
                        <span className="input-group-text"><h7><BsCalendarEvent/></h7></span>
                    </div>

                </div>
                <span className="text-danger text-small d-block mb-2">
                        {errors.expirationDate?.type === 'required' && "Por favor seleccione la fecha de vencimiento"}
                    </span>
            </div>
            <div className={'form-group mt-3 row centerHorizontalELements'}>
                <button className={'btn btn-success'} style={{width:'70%'}} >Guardar</button>
            </div>
        </form>

    )
}

export default FormAddLotes