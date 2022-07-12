import React, {useState} from "react";
import { Controller, useForm} from "react-hook-form";
import SendData from "../Tools/SendData";

const FormSearchProdUpdIn = (props) => {

  const [coincidences, setCoincidences] = useState([{idProductos:4,nombre:"a"},{idProductos:5,nombre:"b"}])
  const changeNameProduct = async (event) => {
    const response = await SendData('http://172.21.188.169:3000/inventory/getProduct_name',{"name":event.target.value})
    if (Array.isArray(response)){
      if (response.length===0){
        //Sin coincidencias
      }else {
        setCoincidences(response)
      }
    }else {
      alert("Sin respuesta por parte del servidor")
    }
  }
  const coincidenceSelected = (selected) => {
    let itemSelected = {id:selected.idProductos, name:selected.nombre,quantity:1 ,unitValue:selected.precio}
    console.log(itemSelected)
    props.onChangeFunction(itemSelected)
  }

  return(<div>

    <div className={'row mt-5 centerHorizontalELements'} align={'center'}>
      <form>
      <input
          name="nameProduct"
          className="form-control my-2"
          type={'text'}
          placeholder={"Nombre de producto"}
          style={{width:'50%'}}
          onChange={changeNameProduct}
      />
      </form>

    </div>
    <div className={'row mt-3 centerHorizontalELements'}>
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
              data-bs-toggle="dropdown" aria-expanded="false" style={{width:'50%'}}>
        Coincidencias
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu2" style={{width:'40%'}}>
        {coincidences.map((item) => (
            <li key={item.idProductos}>
              <button  className="dropdown-item" type="button" onClick={() => coincidenceSelected(item)}>{item.nombre}</button>
            </li>
        ))}
      </ul>
    </div>
  </div>)
}

export default FormSearchProdUpdIn