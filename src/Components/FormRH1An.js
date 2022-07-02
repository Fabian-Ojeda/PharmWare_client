import React, {useState} from "react";
import { Controller, useForm} from "react-hook-form";
import DatePicker from "react-datepicker";
import {BsCalendarEvent} from "react-icons/bs";

const FormRH1An = () => {
    const {register, formState: {errors}, handleSubmit,control } = useForm()
    const onSubmit = (data) => {
        alert("Nos llega por ahora en el formulario de RH1 Anual: \n: "+data.dateMonth+"\n"+data.recyclable+"\n"+data.resRiesBio+"\n"+data.resCom
        +"\n"+data.sharps+"\n"+data.totalMonth+"\n"+data.idrs+"\n"+data.idr+"\n"+data.idd)
    }

    return(
        <div>
            <div className={'mt-4'}>
                <h4>Rellene los siguientes campos</h4>
                <form className={'col mt-3'} onSubmit={handleSubmit(onSubmit)}>
                    <div className={'row'}>
                        <div className={'form-group col'}>
                            <div className="groupCalendarTH my-2">
                                <Controller
                                    control={control}
                                    name={'dateMonth'}
                                    defaultValue={null}
                                    rules={{required:true}}
                                    render={({ field }) => (
                                        <DatePicker
                                            className={'form-control'}
                                            placeholderText={"Mes"}
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
                                {errors.dateMonth?.type === 'required' && "Por favor seleccione el mes"}
                            </span>
                        </div>
                        <div className={'form-group col'}>
                            <input
                                name="recyclable"
                                className="form-control my-2"
                                type={'number'}
                                placeholder={"Reciclables"}
                                {...register("recyclable",{
                                    required:true
                                })}
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors.recyclable?.type === 'required' && "Por favor ingrese la cantidad de reciclables"}
                            </span>
                        </div>
                        <div className={'form-group col'}>
                            <input
                                name="resRiesBio"
                                className="form-control my-2"
                                type={'number'}
                                placeholder={"Residuos riesgo biologico"}
                                {...register("resRiesBio",{
                                    required:true
                                })}
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors.resRiesBio?.type === 'required' && "Por favor ingrese la cantidad de residuos de riesgo biologico"}
                            </span>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'form-group col'}>
                            <input
                                name="resCom"
                                className="form-control my-2"
                                type={'number'}
                                placeholder={"Residuos comunes"}
                                {...register("resCom",{
                                    required:true
                                })}
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors.resCom?.type === 'required' && "Por favor ingrese la cantidad de residuos comunes"}
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
                                {errors.sharps?.type === 'required' && "Por favor ingrese la cantidad de cortopunzantes"}
                            </span>
                        </div>
                        <div className={'form-group col'}>
                            <input
                                name="totalMonth"
                                className="form-control my-2"
                                type={'number'}
                                placeholder={"Total mensual"}
                                {...register("totalMonth",{
                                    required:true
                                })}
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors.totalMonth?.type === 'required' && "Por favor ingrese el total del mes"}
                            </span>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'form-group col'}>
                            <input
                                name="idrs"
                                className="form-control my-2"
                                type={'number'}
                                placeholder={"IDRS"}
                                {...register("idrs",{
                                    required:true
                                })}
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors.idrs?.type === 'required' && "Por favor ingrese el valor de IDRS"}
                            </span>
                        </div>
                        <div className={'form-group col'}>
                            <input
                                name="idr"
                                className="form-control my-2"
                                type={'number'}
                                placeholder={"IDR"}
                                {...register("idr",{
                                    required:true
                                })}
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors.idr?.type === 'required' && "Por favor ingrese el valor de IDR"}
                            </span>
                        </div>
                        <div className={'form-group col'}>
                            <input
                                name="idd"
                                className="form-control my-2"
                                type={'number'}
                                placeholder={"IDD"}
                                {...register("idd",{
                                    required:true
                                })}
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors.idd?.type === 'required' && "Por favor ingrese el valor de IDD"}
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
        </div>
    )

}

export default FormRH1An