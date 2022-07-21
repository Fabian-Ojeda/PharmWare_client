import React, {useState} from "react";
import { Controller, useForm} from "react-hook-form";
import SendData from "../Tools/SendData";

const FormSearchProdUpdIn = (props) => {

  const ip = process.env.REACT_APP_IP_SERVER
  const [coincidences, setCoincidences] = useState([])
  const [search, setSearch] = useState('')

  const changeNameProduct = async (event) => {
    setSearch(event.target.value)
    setCoincidences([])
    const response = await SendData('http://'+ip+'/inventory/search_by_name',{"name":event.target.value})
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
    let itemSelected ={}
    if (props.flag === 1){
      itemSelected = {id:selected.id_producto, name:selected.nombre,quantity:1 ,unitValue:selected.precio, quantityInventory:selected.cantidad}
    }else{
      itemSelected = {id:selected.id_producto, name:selected.nombre,barCode:selected.codigo_barras}
    }
    props.onChangeFunction(itemSelected)
    setSearch('')
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
          value={search}
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