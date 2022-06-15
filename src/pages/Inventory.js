import React from "react";
import '../styles/Pages.css'
import {BsSearch} from "react-icons/bs";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import ContainerTableInventory from "../Components/containerTableInventory";
import {Link} from "react-router-dom";


const Inventory = () => {


    return(
        <div className={'container'}>
            {/* Container Parte superior */}
            <div>
                <h1 className='TitleSection'>Inventario</h1>
            </div>
            {/* Container de opciones */}
            <div className={'OptionsInventory'}>
                <div className={'leftTool'}>
                    <Link to={'/Inventario/ActualizarInventario'}><button className={'btn btn-info tool'}>Actualizar el inventario</button></Link>
                </div>
                <div className={'rightTools'}>
                    <div className="dropdown tool">
                        <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenu2"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            Categoria
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li>
                                <button className="dropdown-item" type="button">Action</button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button">Another action</button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button">Something else here</button>
                            </li>
                        </ul>
                    </div>
                    <div className="input-group tool searchItem">
                        <div className="input-group-text" id="btnGroupAddon"><BsSearch/></div>
                        <input type="text" className="form-control" placeholder="Buscar"
                               aria-label="Input group example" aria-describedby="btnGroupAddon" />
                    </div>
                </div>
            </div>
            {/* Container tabla */}
            <div className={'tableInventory mt-5'}>
                <ContainerTableInventory/>
            </div>
        </div>
    )
}

export default Inventory