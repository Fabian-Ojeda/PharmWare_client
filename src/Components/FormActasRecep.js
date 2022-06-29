import React, {useState} from "react";
import { Controller, useForm} from "react-hook-form";
import DatePicker from "react-datepicker";
import {BsCalendarEvent} from "react-icons/bs";
import FormItemsActRec from "./FormItemsActRec";
import { Table } from 'react-bootstrap';

const FormActasRecep = () => {
    const [items, setItems] = useState([])
    const addItem = (item) => {
        setItems([...items, item])
    }
    const {register, formState: {errors}, handleSubmit,control } = useForm()
    const onSubmit = (data) => {
        alert("Nos llega por ahora"+data)
    }

    return(
        <div>
            <div className={'mt-4'}>
                <h4>Rellene los siguientes campos</h4>
                    <form className={'col mt-4'} onSubmit={handleSubmit(onSubmit)}>
                        <h5>Los siguientes campos son de la factura</h5>
                        <div className={'row mt-3 mx-5'}>
                            <div className={'form-group col mx-5'} align={'center'}>
                                <div className="groupCalendarTH my-2 ">
                                    <Controller
                                        control={control}
                                        name={'dateBill'}
                                        defaultValue={null}
                                        rules={{required:true}}
                                        render={({ field }) => (
                                            <DatePicker
                                                className={'form-control'}
                                                placeholderText={"Fecha de la factura"}
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
                                    {errors.dateBill?.type === 'required' && "Por favor seleccione la fecha de la factura"}
                                </span>
                            </div>
                            <div className={'form-group col mx-5'}>
                                <input
                                    name="refBill"
                                    className="form-control my-2 "
                                    type={'text'}
                                    placeholder={"Referencia de factura"}
                                    {...register("refBill",{
                                        required:true
                                    })}
                                />
                                <span className="text-danger text-small d-block mb-2">
                                    {errors.refBill?.type === 'required' && "Por favor ingrese la referencia de la factura"}
                                </span>
                            </div>
                        </div>

                        <div className={'row mt-4'}>
                            <div className={'form-group col'} align={'center'}>
                                <button type={"submit"} className={'btn btn-success'}> Guardar</button>
                            </div>
                        </div>
                        <hr size={'3'}/>
                    </form>
                <FormItemsActRec
                    addItem={addItem}/>
                <div>
                    <Table striped bordered hover className={'mt-5'}>
                        <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Laboratorio</th>
                            <th>Cantidad</th>
                            <th>Reg Invima</th>
                            <th>Lote</th>
                            <th>Fecha de Vencimiento</th>
                        </tr>
                        </thead>
                        <tbody>
                        {items.map((item) => (
                            <tr key={item.nameProduct}>
                                <td>{item.nameProduct}</td>
                                <td>{item.laboratoryProduct}</td>
                                <td>{item.quantityProduct}</td>
                                <td>{item.invimaRegisterProduct}</td>
                                <td>{item.loteProduct}</td>
                                <td>{item.dateExpirProduct.getMonth()+1}/{item.dateExpirProduct.getFullYear()}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </div>

        </div>)

}

export default FormActasRecep