import React, {useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import logoDrogueria from "../assets/Images/Logo Drogueria.PNG"
import InitSesion from "../Tools/InitSesion";
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

    const [error, setError] = useState('')
    const [initSessionMessage, setInitSessionMessage] = useState('')
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("token")){
            navigate('/Main', {replace: true});
        }
    });

    const {register, formState: {errors}, handleSubmit} = useForm()

    const onSubmit = async (data) => {
        setInitSessionMessage('Iniciando Sesión...')
        setError('')
        const response = await InitSesion(data.userName, data.password)
        if (response.token) {
            props.changeToken(response.token, response.rol)
        } else {
            setInitSessionMessage('')
            setError(response)
        }
    }

    return(
        <div className="container d-flex justify-content-center align-items-center"
        style={{height:'100vh'}}>
        <div className={"container"}  align="center">
            <img
                src={logoDrogueria}
                width="50%"
            />
            <h1 className={"m-4"}>Inicio de sesión</h1>
            <form className="col mr-4 ml-4" onSubmit={handleSubmit(onSubmit)} data-testid={"formLogin"}>
                <div className="form-group mt-2">
                    <input
                        name="userName"
                        className="form-control my-2"
                        type={"text"}
                        placeholder={"Ingrese el nombre de usuario"}
                        data-testid={"nameLogin"}
                        style={{width:'50%'}}
                        {...register("userName",{
                            required:true
                        })}
                    >
                    </input>
                    <span className="text-danger text-small d-block mb-2">
                        {errors.userName?.type === 'required' && "Por favor ingrese el nombre de usuario"}
                    </span>
                </div>
                <div className="form-group mt-2">
                    <input
                        name="password"
                        className="form-control my-2"
                        type={"password"}
                        placeholder={"Ingrese la contraseña"}
                        data-testid={"pswLogin"}
                        style={{width:'50%'}}
                        {...register("password",{
                            required:true
                        })}>
                    </input>
                    <span className="text-danger text-small d-block mb-2">
                    {errors.password?.type === 'required' && "Por favor ingrese la contraseña"}
                </span>

                </div>
                <div className="form-group mt-4">
                    <button type="submit" className="btn btn-success" style={{width:'25%'}} data-testid={"btnLogin"}>Ingresar</button>
                </div>
                <span className="text-danger fs-3 d-block mt-3">
                    {error}
                </span>
                <span className="text-primary fs-3 d-block mt-3">
                    {initSessionMessage}
                </span>
            </form>
        </div>

    </div>)
}

export default Login;