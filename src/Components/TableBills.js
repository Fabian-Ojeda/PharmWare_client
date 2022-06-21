import React, {useState, useEffect} from "react";
import { Table } from 'react-bootstrap';
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import TableReprintBillProduct from "./TableReprintBillProduct";
import ButtonTable from "./ButtonTable";

const TableBills = (props) => {

    const [billselected, setBillSelected] = useState(0)
    const [bills, setBills] = useState([])
    const columns = [
        {dataField: "id", text:"id"},
        {dataField: "hour", text:"Hora"},
        {dataField: "details", text:"Detalles"},
    ]

    const changeBillSelected = (id) => {
        setBillSelected(id)
        //alert("has seleccionado la factura con id "+id+" eso es equivalente a "+props.bills[id].hora)
    }

    const printBill = (id) => {
      alert("Se le imprime la factura "+id+", claro que si")
    }

    const getBills = () => {
        const data = props.bills
        for (let i = 0; i < data.length; i++) {
            data[i].details=<button className={'btn btn-warning'} data-bs-toggle="modal" data-bs-target="#modalBillDetails" onClick={() => changeBillSelected(data[i].id)}>detalles</button>
            //alert(data[i].hour)
        }
        setBills(data)
    }

    useEffect(() => {
        getBills()
    });

    return(<div>
            {/*Tabla*/}
            <div className={'divTableInventory'}>
                <BootstrapTable
                    keyField={'name'}
                    data={bills}
                    columns={columns}
                    pagination={paginationFactory()}/>
            </div>
            {/*Modal*/}
            <div className="modal fade" id="modalBillDetails" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Detalles de factura</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <TableReprintBillProduct
                            idBill={props.bills[billselected].id}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => printBill(props.bills[billselected].id)}>Imprimir</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default TableBills