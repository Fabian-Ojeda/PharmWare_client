import React, {useState, useEffect} from "react";
import '../styles/Pages.css'
import {BsSearch} from "react-icons/bs";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import axios from "axios";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootstrap from 'react-bootstrap';
import TableInventory from "../Components/tableInventory";
import ContainerTableInventory from "../Components/containerTableInventory";

const Inventory = () => {

    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(false)
    const getPlayers = async () => {
      try {
          const data = await axios.get('https://nba-players.herokuapp.com/players-stats')
          //const data = [{name:'acer', predator:'asasin', button:<button onClick={mostrarQueSirve}>Hola mijo</button>}]
          setPlayers(data.data)
      }catch (e){
          console.log('pailas')
      }
    }

    const mostrarQueSirve = () =>{
        alert('si sirve XD')
    }

    useEffect(()=>{
        getPlayers()
    })

    const columns = [
        {dataField: "name", text:"Player Name"},
        {dataField: "predator", text:"predator"},
        {dataField: "team_name", text:"Player Team"},
        {dataField: "button", text:"Mirar"}
    ]

    return(
        <div className={'container'}>
            {/* Container Parte superior */}
            <div>
                <h1 className='TitleSection'>Inventario</h1>
            </div>
            {/* Container de opciones */}
            <div className={'OptionsInventory'}>
                <div className={'leftTool'}>
                    <button className={'btn btn-info tool'}>Actualizar el inventario</button>
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