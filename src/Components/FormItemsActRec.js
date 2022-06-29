import React from "react";
import { Controller, useForm} from "react-hook-form";
import DatePicker from "react-datepicker";
import {BsCalendarEvent} from "react-icons/bs";
import TableItemsActRec from "./TableItemsActRec";

const FormItemsActRec = (props) => {

    const {register, formState: {errors}, handleSubmit,control } = useForm()
    const onSubmitItems = (data) => {
        const item = {'nameProduct':data.nameProduct, 'laboratoryProduct':data.laboratoryProduct,
        'quantityProduct':data.quantityProduct,'invimaRegisterProduct':data.invimaRegisterProduct,'loteProduct':data.loteProduct,
        'dateExpirProduct':data.dateExpirProduct}
        props.addItem(item)
    }

    return(
        <form className={'col mt-3'} onSubmit={handleSubmit(onSubmitItems)}>
            <h5>Los siguientes campos son de los items</h5>
            <div className={'row'}>
                <div className={'form-group col'}>
                    <input
                        name="nameProduct"
                        className="form-control my-2"
                        type={'text'}
                        placeholder={"Nombre"}
                        {...register("nameProduct",{
                            required:true
                        })}
                    />
                    <span className="text-danger text-small d-block mb-2">
                                    {errors.nameProduct?.type === 'required' && "Por favor ingrese el nombre"}
                                </span>
                </div>
                <div className={'form-group col'}>
                    <input
                        name="laboratoryProduct"
                        className="form-control my-2"
                        type={'text'}
                        placeholder={"Laboratorio"}
                        {...register("laboratoryProduct",{
                            required:true
                        })}
                    />
                    <span className="text-danger text-small d-block mb-2">
                                    {errors.laboratoryProduct?.type === 'required' && "Por favor ingrese el laboratorio"}
                                </span>
                </div>
                <div className={'form-group col'}>
                    <input
                        name="quantityProduct"
                        className="form-control my-2"
                        type={'number'}
                        placeholder={"Cantidad"}
                        {...register("quantityProduct",{
                            required:true
                        })}
                    />
                    <span className="text-danger text-small d-block mb-2">
                                    {errors.quantityProduct?.type === 'required' && "Por favor ingrese la cantidad"}
                                </span>
                </div>
            </div>
            <div className={'row'}>
                <div className={'form-group col'}>
                    <input
                        name="invimaRegisterProduct"
                        className="form-control my-2"
                        type={'text'}
                        placeholder={"Registro Invima"}
                        {...register("invimaRegisterProduct",{
                            required:true
                        })}
                    />
                    <span className="text-danger text-small d-block mb-2">
                                    {errors.invimaRegisterProduct?.type === 'required' && "Por favor ingrese el reistro invima"}
                                </span>
                </div>
                <div className={'col'}>
                    <input
                        name="loteProduct"
                        className="form-control my-2"
                        type={'text'}
                        placeholder={"Numero de Lote"}
                        {...register("loteProduct",{
                            required:true
                        })}
                    />
                    <span className="text-danger text-small d-block mb-2">
                                    {errors.loteProduct?.type === 'required' && "Por favor ingrese el lote"}
                                </span>
                </div>
                <div className={'col'}>
                    <div className="groupCalendarTH my-2">
                        <Controller
                            control={control}
                            name={'dateExpirProduct'}
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
                                    {errors.dateExpirProduct?.type === 'required' && "Por favor seleccione la fecha de vencimiento"}
                                </span>
                </div>
            </div>
            <div className={'row mt-3'}>
                <div align={'center'}>
                    <button type={'submit'} className={'btn btn-primary'} style={{width:'30%'}}>Agregar</button>
                </div>
            </div>
        </form>)
}

export default FormItemsActRec