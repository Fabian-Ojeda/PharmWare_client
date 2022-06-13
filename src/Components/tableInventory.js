import React, {useState, useEffect} from "react";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import axios from "axios";
import ButtonTable from "./ButtonTable";

const TableInventory = (props) => {

    const [players, setPlayers] = useState([]);

    const getPlayers = () => {
        const data = props.data
        //const data = [{name:'acer', predator:'asasin', button:<button onClick={mostrarQueSirve}>Hola mijo</button>}]
        for (let i = 0; i < data.length; i++) {
            data[i].button=<ButtonTable name={data[i].name}/>
        }
        setPlayers(data)

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
    return(<div className={'divTableInventory'}>
        <BootstrapTable
            keyField={'name'}
            data={players}
            columns={columns}
            pagination={paginationFactory()}/>
    </div>)
}

export default TableInventory