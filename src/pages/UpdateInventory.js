import React, {useEffect} from "react";
import '../styles/Pages.css'
import {BsBagPlusFill, BsJournalPlus, BsFillPlusSquareFill} from "react-icons/bs";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom"

const UpdateInventory = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")){
            navigate('/');
        }
    });
  return(
      <div className={'container'}>
          {/* Container Parte superior */}
          <div>
              <h1 className='TitleSection'>Actualizar el inventario</h1>
          </div>
          {/* Container de opciones */}
          <div className={'container mt-5 OptionsUpdateInventory'}>
              <Link to={'/Inventario/ActualizarInventario/AgregarAlInventario'}><button className={'btn btn-secondary btn-lg btn-block'}><BsBagPlusFill/> Agregar lotes</button></Link>
              <Link to={'/Inventario/ActualizarInventario/AgregarUnidades'}><button className={'btn btn-secondary btn-lg btn-block'}><BsFillPlusSquareFill/> Agregar Unidades</button></Link>
              <Link to={'/Inventario/ActualizarInventario/CrearProducto'}><button className={'btn btn-secondary btn-lg btn-block'}><BsJournalPlus/> Crear nuevo producto</button></Link>
          </div>
      </div>)
}

export default UpdateInventory