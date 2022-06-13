import React, {useState} from "react";
import {useForm} from "react-hook-form";
import logoDrogueria from "../assets/Images/Logo Drogueria.PNG"
import consumeAPI from "../Tools/consumeAPI";

const Login = () => {

    const {register, formState: {errors}, handleSubmit} = useForm()

    const onSubmit = (data) => {
        alert("tenemos de nombre de usuario: "+data.userName+" y de contraseña: "+data.password)
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
            <form className="col mr-4 ml-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mt-2">
                    <input
                        name="userName"
                        className="form-control my-2"
                        type={"text"}
                        placeholder={"Ingrese el nombre de usuario"}
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
                    <button type="submit" className="btn btn-success" style={{width:'25%'}}>Ingresar</button>
                </div>

            </form>
        </div>

    </div>)
}

export default Login;