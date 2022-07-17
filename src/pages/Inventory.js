import React, {useEffect, useState} from "react";
import '../styles/Pages.css'
import {BsSearch} from "react-icons/bs";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import ContainerTableInventory from "../Components/containerTableInventory";
import {Link} from "react-router-dom";
import FormSearchInventory from "../Components/FormSearchInventory";
import {useNavigate} from "react-router-dom"

const Inventory = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")){
            navigate('/');
        }
    });
    const [container, setContainer] = useState(<ContainerTableInventory filter={0}/>)
    const [handleSearch, setHandleSearch] = useState('')
    const changeFilter = (category) => {
        setContainer(<ContainerTableInventory filter={category}/>)
    }

    const changeHandleSearch = (value) => {
        setContainer(<ContainerTableInventory filter={6} name={value}/>)
    }

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
                                <button className="dropdown-item" type="button" onClick={() => changeFilter(0)}>Todas Las Categorias</button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button" onClick={() => changeFilter(1)}>Medicamentos</button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button" onClick={() => changeFilter(2)}>Perfumeria</button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button" onClick={() => changeFilter(3)}>Helados</button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button" onClick={() => changeFilter(4)}>Miscelanea</button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button" onClick={() => changeFilter(5)}>Papeleria</button>
                            </li>
                        </ul>
                    </div>
                    <FormSearchInventory changeHandleSearch={changeHandleSearch}/>
                </div>
            </div>
            {/* Container tabla */}
            <div className={'tableInventory mt-5'}>
                {container}
            </div>
        </div>
    )
}

export default Inventory