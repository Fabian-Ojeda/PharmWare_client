import React, {useState} from "react";
import { Table } from 'react-bootstrap';

const TableBills = (props) => {

    const [billselected, setBillSelected] = useState(null)

    const changeBillSelected = (id) => {
        setBillSelected(id)
        //alert("has seleccionado la factura con id "+id+" eso es equivalente a "+props.bills[id].hora)
    }

    return(<div>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Hora</th>
                <th>Detalles</th>
            </tr>
            </thead>
            <tbody>
                {props.bills.map((item)=>(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.hora}</td>
                        <td><button className={'btn btn-warning'} data-bs-toggle="modal" data-bs-target="#modalBillDetails" onClick={() => changeBillSelected(item.id)}>detalles</button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
            {/*Modal*/}
            <div class="modal fade" id="modalBillDetails" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Detalles de factura</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            aqui va otra tabla
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Imprimir</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default TableBills