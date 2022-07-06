import React, {useEffect} from "react";
import Sidebar from "../Components/Sidebar";
import '../styles/Main.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./login";
import Inventory from "./Inventory";
import logoDrogueria from "../assets/Images/Logo Drogueria.PNG";
import { useNavigate } from 'react-router-dom';

const MainWindow = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")){
            navigate('/');
        }
    });
    return(
        <div className="container d-flex justify-content-center align-items-center"
                style={{height:'100vh'}}>
            <div className={"container"} align="center">
                <div className={'mb-5'}>
                <img
                    src={logoDrogueria}
                    width="50%"
                />
                </div>
                <h1 className={'mt-5'}> BIENVENIDO A SIPIDSA</h1>
                <h2>Sistema informatico postventa e inventario drogueria San Antonio</h2>
            </div>

    </div>
    )

}

export default MainWindow