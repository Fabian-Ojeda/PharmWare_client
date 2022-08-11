import React, {useState, useEffect} from "react";
import { Controller, useForm} from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import SendData from "../Tools/SendData";

const AddProviders = () => {
    const navigate = useNavigate();
    const {register, formState: {errors}, handleSubmit, watch,control, setValue } = useForm()
    const [succesfullCreated, setSuccesfullCreated] = useState('')
    const [failitureCreated, setfailitureCreated] = useState('')
    const ip = process.env.REACT_APP_IP_SERVER

    useEffect(() => {
        if (!localStorage.getItem("token")){
            navigate('/');
        }
        if(localStorage.getItem("rol")!='admin'){
            navigate('/');
        }
    });

    const onSubmit = async (data) => {
        setSuccesfullCreated('Creando Proveedor...')
        setfailitureCreated('')
        let response = await SendData('http://' + ip + '/inventory/create_supplier', {name: data.nameProvider})
        if (response==='OK'){
            succesCreating()
        } else if (response==='Supplier already exists'){
            failCreating('El proveedor que intenta crear ya está registrado')
        } else {
            failCreating(response)
        }
    }

    const succesCreating = () => {
        setfailitureCreated('')
        setSuccesfullCreated('Proveedor creado correctamente')
    }

    const failCreating = (error) => {
        setSuccesfullCreated('')
        setfailitureCreated(error)
    }


    return(
        <div className={'container'}>
            <h1  className='TitleSection'>Agregar proveedor</h1>
            <div className={'mt-5'}>
                <h3>Ingrese el nombre del proveedor</h3>
            </div>
            <div className={'mt-5'}>
                <form className="col mr-4 ml-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mt-4" align={'center'}>
                        <input
                            name="nameProvider"
                            className="form-control my-2"
                            type={"text"}
                            placeholder={"Nombre del proveedor"}
                            style={{width:'50%'}}
                            {...register("nameProvider",{
                                required:true
                            })}
                        /><span className="text-danger text-small d-block">
                            {errors.nameProvider?.type === 'required' && "Ingrese el nombre del proveedor"}
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

export default AddProviders