import React from "react";
import { Controller, useForm} from "react-hook-form";
import DatePicker from "react-datepicker";
import {BsCalendarEvent} from "react-icons/bs";

const FormLimAre = () => {
    const {register, formState: {errors}, handleSubmit,control } = useForm()
    const onSubmit = (data) => {
        alert("Nos llega por ahora: inyectologia: "+data.inyectologia+" Estanteria: "+data.estanteria+" \nFecha: "+data.dateDay+
            " pisos: "+data.pisos+" paredes: "+data.paredes+ " baños: "+data.banios+" detegente: "+data.detergente+" hipo sodio: "+data.hipoSodio
        +"\nRealizo: "+data.realizo+" superviso: "+data.superviso)
    }
    return(
        <div>
            <div className={'mt-4'}>
                <h4>Rellene los siguientes campos</h4>
                <form className={'col mt-3'} onSubmit={handleSubmit(onSubmit)}>
                    <div className={'row'}>
                        <div className={'form-group col'}>
                            <div className="groupCalendar my-2">
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
                            <div className={'row'}>
                                <h3>Areas</h3>
                            </div>
                            <div className={'row'}>
                                <div className="form-group form-check">
                                    <input name="inyectologia" type="checkbox" {...register('inyectologia')} id="inyectologia" className={`form-check-input`} />
                                    <label htmlFor="inyectologia" className="form-check-label">Inyectologia</label>
                                </div>
                            </div>
                            <div className={'row'}>
                                <div className="form-group form-check">
                                    <input name="estanteria" type="checkbox" {...register('estanteria')} id="estanteria" className={`form-check-input`} />
                                    <label htmlFor="estanteria" className="form-check-label">Estanteria</label>
                                </div>
                            </div>
                            <div className={'row'}>
                                <div className="form-group form-check">
                                    <input name="pisos" type="checkbox" {...register('pisos')} id="pisos" className={`form-check-input`} />
                                    <label htmlFor="pisos" className="form-check-label">Pisos</label>
                                </div>
                            </div>
                            <div className={'row'}>
                                <div className="form-group form-check">
                                    <input name="paredes" type="checkbox" {...register('paredes')} id="paredes" className={`form-check-input`} />
                                    <label htmlFor="paredes" className="form-check-label">Paredes</label>
                                </div>
                            </div>
                            <div className={'row'}>
                                <div className="form-group form-check">
                                    <input name="banios" type="checkbox" {...register('banios')} id="banios" className={`form-check-input`} />
                                    <label htmlFor="banios" className="form-check-label">Baños</label>
                                </div>
                            </div>
                        </div>
                        <div className={'form-group col'}>
                            <div className={'row'}>
                                <h3>Solución satinizante</h3>
                            </div>
                            <div className={'row'}>
                                <div className="form-group form-check">
                                    <input name="detergente" type="checkbox" {...register('detergente')} id="detergente" className={`form-check-input`} />
                                    <label htmlFor="detergente" className="form-check-label">Detergente</label>
                                </div>
                            </div>
                            <div className={'row'}>
                                <div className="form-group form-check">
                                    <input name="hipoSodio" type="checkbox" {...register('hipoSodio')} id="hipoSodio" className={`form-check-input`} />
                                    <label htmlFor="hipoSodio" className="form-check-label">Hipoclorito de sodio</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Campos de texto*/}
                    <div className={'row mt-3'}>
                        <div className={'col mx-5'}>
                            <input
                                name="realizo"
                                className="form-control my-2"
                                type={'text'}
                                placeholder={"Realizo"}
                                {...register("realizo",{
                                    required:true
                                })}
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors.realizo?.type === 'required' && "Por favor ingrese quien realizo"}
                            </span>
                        </div>
                        <div className={'col mx-5'}>
                            <input
                                name="superviso"
                                className="form-control my-2"
                                type={'text'}
                                placeholder={"Superviso"}
                                {...register("superviso",{
                                    required:true
                                })}
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors.superviso?.type === 'required' && "Por favor ingrese quien superviso"}
                            </span>
                        </div>
                    </div>
                    <div className={'row mt-4 centerHorizontalELements'}>
                        <button className={'btn btn-success btnFormats'} type={'submit'}>Guardar</button>
                    </div>
                </form>
            </div>
        </div>)
}

export default FormLimAre