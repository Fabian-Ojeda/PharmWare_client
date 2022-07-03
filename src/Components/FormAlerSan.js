import React from "react";
import { Controller, useForm} from "react-hook-form";
import DatePicker from "react-datepicker";
import {BsCalendarEvent} from "react-icons/bs";

const FormAlerSan = () => {
    const {register, formState: {errors}, handleSubmit,control } = useForm()
    const onSubmit = (data) => {
        alert("Nos llega por ahora en alertas sanitarias\n"+data.dateDay+"\n"+data.product+"\n"+data.lote+"\n"+data.regInv+"\n"+data.motAlert+
        "\n"+data.actions)
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
                        <div className={'form-group col'}>
                            <input
                                name="product"
                                className="form-control my-2"
                                type={'text'}
                                placeholder={"Producto"}
                                {...register("product",{
                                    required:true
                                })}
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors.product?.type === 'required' && "Por favor ingrese el producto"}
                            </span>
                        </div>
                        <div className={'form-group col'}>
                            <input
                                name="lote"
                                className="form-control my-2"
                                type={'text'}
                                placeholder={"Lote"}
                                {...register("lote",{
                                    required:true
                                })}
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors.lote?.type === 'required' && "Por favor ingrese el lote"}
                            </span>
                        </div>
                    </div>
                    <div className={'divRegInv row'}>
                        <div className={'form-group col'}>
                            <input
                                name="regInv"
                                className="form-control my-2"
                                type={'text'}
                                placeholder={"Registro invima"}
                                {...register("regInv",{
                                    required:true
                                })}
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors.regInv?.type === 'required' && "Por favor ingrese el registro invima"}
                            </span>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'form-group col'}>
                            <input
                                name="motAlert"
                                className="form-control my-2"
                                type={'text'}
                                placeholder={"Motivo de la alerta"}
                                {...register("motAlert",{
                                    required:true
                                })}
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors.motAlert?.type === 'required' && "Por favor ingrese el motivo de alerta"}
                            </span>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col'}>
                            <input
                                name="actions"
                                className="form-control my-2"
                                type={'text'}
                                placeholder={"Acciones tomadas por el establecimiento"}
                                {...register("actions",{
                                    required:true
                                })}
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors.actions?.type === 'required' && "Por favor ingrese las acciones tomadas"}
                            </span>
                        </div>
                    </div>
                    <div className={'row mt-3'} align={'center'}>
                        <div>
                            <button className={'btn btn-success'} type={'submit'}>Guardar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormAlerSan