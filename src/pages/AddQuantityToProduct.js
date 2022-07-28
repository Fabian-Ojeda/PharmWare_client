import React, {useState, useEffect} from "react";
import { Controller, useForm} from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import FormSearchProdUpdIn from "../Components/FormSearchProdUpdIn";

const AddQuantityToProduct = () => {
    const {register, formState: {errors}, handleSubmit, watch,control, setValue } = useForm()

    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")){
            navigate('/');
        }
    });
    const [nameProduct, setNameProduct] = useState('')
    const [idProduct, setIdProduct] = useState(0)
    const [succesfullCreated, setSuccesfullCreated] = useState('')
    const [failitureCreated, setfailitureCreated] = useState('Pailas')

    const succesCreating = () => {
        setfailitureCreated('')
        setSuccesfullCreated('Se han agregado las unidades correctamente')
    }

    const failCreating = (error) => {
        setSuccesfullCreated('')
        setfailitureCreated(error)
    }

    const onChangeFunction = (item) => {
        setNameProduct(item.name)
        setIdProduct(item.id)
    }

    const onSubmit = (data) => {
        alert('se va a enviar ' + data.quantity)
        setSuccesfullCreated('Creando Proveedor...')
    }

    return(
        <div className={'container'}>
            <h1>Agregar unidades</h1>
            <FormSearchProdUpdIn flag={2} onChangeFunction={ onChangeFunction }/>
            <div className={'row mt-5'} align={'center'}>
                <h3>{nameProduct}</h3>
            </div>
            <div className={'mt-5'}>
                <form className="col mr-4 ml-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mt-4" align={'center'}>
                        <input
                            name="quantity"
                            className="form-control my-2"
                            type={"number"}
                            placeholder={"Cantidades a ingresar"}
                            style={{width:'50%'}}
                            min={0}
                            {...register("quantity",{
                                required:true
                            })}
                        /><span className="text-danger text-small d-block">
                            {errors.quantity?.type === 'required' && "Ingrese las cantidades para agregar"}
                        </span>
                    </div>
                    <div className="form-group mt-4" align={'center'}>
                        <button className={'btn btn-success'} type={'submit'}>Aceptar</button>
                    </div>
                </form>
                <div className="form-group mt-4" align={'center'}>
                    <span className="text-primary fs-3 d-block mt-3">
                            {succesfullCreated}
                        </span>
                    <span className="text-danger fs-3 d-block mt-3">
                            {failitureCreated}
                        </span>
                </div>
            </div>

        </div>)
}

export default AddQuantityToProduct