import React, {useState, useEffect} from "react";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import TableReprintBillProduct from "./TableReprintBillProduct";

const TableBills = (props) => {

    const [billselected, setBillSelected] = useState(0)
    const [bills, setBills] = useState([])
    const columns = [
        {dataField: "id_venta", text:"Id Venta"},
        {dataField: "fecha", text:"Fecha"},
        {dataField: "details", text:"Detalles"},
    ]

    const changeBillSelected = (id) => {
        setBillSelected(id)
    }

    const printBill = (id) => {
      alert("Se le imprime la factura "+id+", claro que si")
    }

    const getBills = () => {
        const data = props.bills
        for (let i = 0; i < data.length; i++) {
            data[i].details=<button className={'btn btn-warning'} data-bs-toggle="modal" data-bs-target="#modalBillDetails" onClick={() => changeBillSelected(data[i].id_venta)}>detalles</button>
            data[i].fecha= data[i].fecha.slice(0,10)
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
                    keyField={'id_venta'}
                    data={bills}
                    columns={columns}
                    pagination={paginationFactory()}/>
            </div>
            {/*Modal*/}
        <div className="modal fade" id="modalBillDetails" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Detalles de factura</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className={'row'}>
                            <h5>Id de factura: {billselected}</h5>
                        </div>
                        <div className={'row'}>
                            <div className={'col'}><h5>Cliente: </h5></div>
                            <div className={'col'}><h5>Fecha: </h5></div>
                        </div>
                        <div className={'mt-3 mb-3'}>
                            <h4>Productos</h4>
                        </div>
                        <TableReprintBillProduct
                            idBill={billselected}/>
                        <div className={'mt-2'}><h3>Total: </h3></div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => printBill(billselected)}>Imprimir</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default TableBills