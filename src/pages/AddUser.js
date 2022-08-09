import React, {useEffect, useState} from "react";
import { Controller, useForm} from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import SendDataWithHeaders from "../Tools/SendDataWithHeaders";

const AddUser = () => {
    const ip = process.env.REACT_APP_IP_SERVER
    const navigate = useNavigate();
    const {register, formState: {errors}, handleSubmit, watch,control, setValue } = useForm()
    const [blueMessage, setBlueMessage] = useState('')
    const [redMessage, setRedMessage] = useState('')
    useEffect(() => {
        if (!localStorage.getItem("token")){
            navigate('/');
        }
        if(localStorage.getItem("rol")!='admin'){
            navigate('/');
        }
    });
    const onSubmit = async (data) => {
        setBlueMessage('')
        setRedMessage('')
        if (data.passwordUser != data.passwordX2) {
            alert("Las contraseñas no coinciden")
        } else {
            setBlueMessage('Creando usuario...')
            const dataToSend = {
                username:data.nameUser,
                password:data.passwordUser,
                role:'user'
            }
            const response = await SendDataWithHeaders('http://' + ip + '/user/create_user', dataToSend)
            if(response==='OK'){
                setBlueMessage('Usuario creado correctamente')
            }else if(response==="The User already exist"){
                setBlueMessage('')
                setRedMessage("El usuario ya existe")
            }else{
                setBlueMessage('')
                setRedMessage("El servidor no ha respondido")
            }

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
                                required:true,
                                minLength: 10
                            })}
                        /><span className="text-danger text-small d-block">
                        {errors.nameUser?.type === 'required' && "Ingrese el nombre del usuario"}
                        {errors.nameUser?.type === 'minLength' && "Ingrese un nombre de usuario de minimo 10 caracteres"}
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
                                required:true,
                                pattern: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
                            })}
                        /><span className="text-danger text-small d-block">
                        {errors.passwordUser?.type === 'required' && "Ingrese la contraseña del usuario"}
                        {errors.passwordUser?.type === 'pattern' && "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula."}
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
            <div align={'center'}>
                <span className="text-primary fs-3 d-block mt-3">
                    {blueMessage}
                </span>
            </div>
            <div align={'center'}>
                <span className="text-danger fs-3 d-block mt-3">
                    {redMessage}
                </span>
            </div>
        </div>

    )
}

export default AddUser