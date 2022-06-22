import React, {useState, useEffect} from "react";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import ButtonTable from "./ButtonTable";
import TableLotes from "./TableLotes";

const TableInventory = (props) => {

    const [players, setPlayers] = useState([]);

    const [itemSelected, setItemSelected] = useState(null)

    const changeSelectedItem = (item) => {
        setItemSelected(item)
    }

    const getPlayers = () => {
        const data = props.data
        //const data = [{name:'acer', predator:'asasin', button:<button onClick={mostrarQueSirve}>Hola mijo</button>}]
        for (let i = 0; i < data.length; i++) {
            data[i].button=<ButtonTable
                name={data[i].name}
                changeSelecteditem={changeSelectedItem}/>
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


        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Lotes del producto</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {itemSelected}
                        <TableLotes/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default TableInventory