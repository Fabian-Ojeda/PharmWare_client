import React from "react";
import '../styles/Pages.css'
import {BsBagPlusFill, BsJournalPlus} from "react-icons/bs";
import {Link} from "react-router-dom";

const UpdateInventory = () => {
  return(
      <div className={'container'}>
          {/* Container Parte superior */}
          <div>
              <h1 className='TitleSection'>Actualizar el inventario</h1>
          </div>
          {/* Container de opciones */}
          <div className={'container mt-5 OptionsUpdateInventory'}>
              <Link to={'/Inventario/ActualizarInventario/AgregarAlInventario'}><button className={'btn btn-secondary btn-lg btn-block'}><BsBagPlusFill/> Agregar al inventario</button></Link>
              <Link to={'/Inventario/ActualizarInventario/CrearProducto'}><button className={'btn btn-secondary btn-lg btn-block'}><BsJournalPlus/> Crear nuevo producto</button></Link>
          </div>
      </div>)
}

export default UpdateInventory