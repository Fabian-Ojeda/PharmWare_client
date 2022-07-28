import React, {useEffect} from "react";
import logoDrogueria from "../assets/Images/Logo Drogueria.PNG";
import { useNavigate } from 'react-router-dom';
import '../styles/Main.css'

const Welcome = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")){
      navigate('/');
    }
  });
  return(<div>
    <div className="container d-flex justify-content-center align-items-center mt-5">
    <img
        src={logoDrogueria}
        width="60%"
    />
  </div>
      <div className="container d-flex justify-content-center align-items-center mt-5">
        <div align={'center'}>
      <h1 className={"welcome"}>BIENVENIDO A SIPIDSA</h1>
      <h2 className={'mt-5'}>Sistema informatico postventa e inventario drogueria San Antonio</h2>
        </div>
      </div>
  </div>)
}

export default Welcome;