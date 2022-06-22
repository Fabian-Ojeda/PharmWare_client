import React , { useState } from "react";
import { Controller, useForm} from "react-hook-form";
import {BsCalendarEvent} from "react-icons/bs";
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
registerLocale("es", es)

const FormAddLotes = (props) => {
    const {register, formState: {errors}, handleSubmit, watch,control, setValue } = useForm()
    const onSubmitValuesProduct = (data) => {
        alert("Nos llega por ahora: "+data.quantityProduct+" "+data.priceProduct)
        console.log(data)
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
                    <option value="Coopidrogas">Coopidrogas</option>
                    <option value="Laboratorios Aventis">Laboratorios Aventis</option>
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