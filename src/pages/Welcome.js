import React from "react";
import logoDrogueria from "../assets/Images/Logo Drogueria.PNG";

const Welcome = () => {
  return(<div>
    <div className="container d-flex justify-content-center align-items-center mt-5">
    <img
        src={logoDrogueria}
        width="60%"
    />
  </div>
      <div className="container d-flex justify-content-center align-items-center mt-5">
    <div className={"container d-flex justify-content-center align-items-center"} >
      <h1 className={"welcome"}>Bienvenido!</h1>
    </div>
      </div>
  </div>)
}

export default Welcome;