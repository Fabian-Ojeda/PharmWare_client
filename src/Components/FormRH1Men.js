import React, {useState} from "react";
import { Controller, useForm} from "react-hook-form";
import DatePicker from "react-datepicker";
import {BsCalendarEvent} from "react-icons/bs";

const FormRH1Men = () => {
    const {register, formState: {errors}, handleSubmit,control } = useForm()

    const onSubmit = (data) => {
        alert("Nos llega por ahora en el formulario de RH1 Mensual: \n: "+data.dateDay+"\n"+data.ordinaries+"\n"+data.recicles+
        "\n"+data.chemicals+"\n"+data.biosanitary+"\n"+data.sharps)
    }

    return(
        <div>
            <div className={'mt-4'}>
                <h4>Rellene los siguientes campos</h4>
                <form className={'col mt-3'} onSubmit={handleSubmit(onSubmit)}>
                    <div className={'form-group row'}>
                        <div className="groupCalendarRH1 my-2">
                            <Controller
                                control={control}
                                name={'dateDay'}
                                defaultValue={null}
                                rules={{required:true}}
                                render={({ field }) => (
                                    <DatePicker
                                        className={'form-control'}
                                        placeholderText={"Fecha"}
                                        locale={"es"}
                                        onChange={(date) => field.onChange(date)}
                                        selected={field.value}
                                        dateFormat="dd/MM/yyyy"
                                    />
                                )}
                            />
                            <div className="input-group-prepend">
                                <span className="input-group-text"><h7><BsCalendarEvent/></h7></span>
                            </div>
                        </div>
                        <span className="text-danger text-small d-block mb-2">
                                    {errors.dateDay?.type === 'required' && "Por favor seleccione la fecha"}
                                </span>
                    </div>
                    <div className={'row border border-dark p-3 m-2'}>
                        <h5 className={'mb-2'}>Residuos no peligrosos</h5>
                        <div className={'form-group col mx-5'}>
                            <input
                                name="ordinaries"
                                className="form-control my-2"
                                type={'number'}
                                placeholder={"Ordinarios"}
                                {...register("ordinaries",{
                                    required:true
                                })}
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors.ordinaries?.type === 'required' && "Por favor ingrese la cantidad de ordinarios"}
                            </span>
                        </div>
                        <div className={'form-group col mx-5'}>
                            <input
                                name="recicles"
                                className="form-control my-2"
                                type={'number'}
                                placeholder={"Reciclables"}
                                {...register("recicles",{
                                    required:true
                                })}
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors.recicles?.type === 'required' && "Por favor ingrese la cantidad de reciclables"}
                            </span>
                        </div>
                    </div>
                    <div className={'row border border-dark p-3 m-2'}>
                        <h5 className={'mb-2'}>Residuos peligrosos</h5>
                        <div className={'form-group col'}>
                            <input
                            name="chemicals"
                            className="form-control my-2"
                            type={'number'}
                            placeholder={"Quimicos"}
                            {...register("chemicals",{
                                required:true
                            })}
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors.chemicals?.type === 'required' && "Por favor ingrese la cantidad de quimicos"}
                            </span>
                        </div>
                        <div className={'form-group col'}>
                            <input
                                name="biosanitary"
                                className="form-control my-2"
                                type={'number'}
                                placeholder={"Biosanitarios"}
                                {...register("biosanitary",{
                                    required:true
                                })}
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors.biosanitary?.type === 'required' && "Por favor ingrese la cantidad de biosanitarios"}
                            </span>
                        </div>
                        <div className={'form-group col'}>
                            <input
                                name="sharps"
                                className="form-control my-2"
                                type={'number'}
                                placeholder={"Cortopunzantes"}
                                {...register("sharps",{
                                    required:true
                                })}
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors.sharps?.type === 'required' && "Por favor ingrese la cantidad de cortounzantes"}
                            </span>
                        </div>
                    </div>
                    <div className={'form-group row mt-3'} align={'center'}>
                        <div>
                            <button className={'btn btn-success'} type={'submit'}>Guardar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>)
}

export default FormRH1Men