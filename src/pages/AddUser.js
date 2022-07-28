import React, {useEffect} from "react";
import { Controller, useForm} from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const navigate = useNavigate();
    const {register, formState: {errors}, handleSubmit, watch,control, setValue } = useForm()
    useEffect(() => {
        if (!localStorage.getItem("token")){
            navigate('/');
        }
        if(localStorage.getItem("rol")!='admin'){
            navigate('/');
        }
    });
    const onSubmit = (data) => {
        if (data.passwordUser!=data.passwordX2){
            alert("Las contraseñas no coinciden")
        }else{
            alert("Usuario Creado Correctamente")
            navigate('/Main');

        }
    }

    return(
        <div className={'container'}>
            <h1  className='TitleSection'>Agregar usuario</h1>
            <div className={'mt-5'}>
                <h3>Diligencie los siguientes campos para crear un nuevo usuario</h3>
            </div>
            <div className={'mt-5'}>
                <form className="col mr-4 ml-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mt-4" align={'center'}>
                        <input
                            name="nameUser"
                            className="form-control my-2"
                            type={"text"}
                            placeholder={"Nombre de usuario"}
                            style={{width:'50%'}}
                            {...register("nameUser",{
                                required:true
                            })}
                        /><span className="text-danger text-small d-block">
                        {errors.nameUser?.type === 'required' && "Ingrese el nombre del usuario"}
                    </span>
                    </div>
                    <div className="form-group mt-4" align={'center'}>
                        <input
                            name="passwordUser"
                            className="form-control my-2"
                            type={"password"}
                            placeholder={"Contraseña"}
                            style={{width:'50%'}}
                            {...register("passwordUser",{
                                required:true
                            })}
                        /><span className="text-danger text-small d-block">
                        {errors.passwordUser?.type === 'required' && "Ingrese la contraseña del usuario"}
                    </span>
                    </div>
                    <div className="form-group mt-4" align={'center'}>
                        <input
                            name="passwordX2"
                            className="form-control my-2"
                            type={"password"}
                            placeholder={"Repita la contraseña"}
                            style={{width:'50%'}}
                            {...register("passwordX2",{
                                required:true
                            })}
                        /><span className="text-danger text-small d-block">
                        {errors.passwordX2?.type === 'required' && "Repita la contraseña del usuario"}
                    </span>
                    </div>
                    <div className="form-group mt-4" align={'center'}>
                        <button className={'btn btn-success'} type={'submit'}>Aceptar</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default AddUser