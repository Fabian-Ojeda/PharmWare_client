import React from "react";
import '../styles/Pages.css'
import {BsBagPlusFill, BsJournalPlus} from "react-icons/bs";

const UpdateInventory = () => {
  return(
      <div className={'container'}>
          {/* Container Parte superior */}
          <div>
              <h1 className='TitleSection'>Actualizar el inventario</h1>
          </div>
          {/* Container de opciones */}
          <div className={'container mt-5 OptionsUpdateInventory'}>
            <button className={'btn btn-secondary btn-lg btn-block'}><BsBagPlusFill/> Agregar al inventario</button>
              <button className={'btn btn-secondary btn-lg btn-block'}><BsJournalPlus/> Crear nuevo producto</button>
          </div>
      </div>)
}

export default UpdateInventory