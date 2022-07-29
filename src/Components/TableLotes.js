import React, {useState}from "react";
import { Table } from 'react-bootstrap';

const TableLotes = (props) => {

    const deleteLote = (idLote) => {
        alert ("Vamos a borrar el "+idLote)
    }

    return(
        <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Cantidad</th>
                    <th>Fecha de vencimiento</th>
                    <th>Borrar</th>
                </tr>
                </thead>
                <tbody>
                    {props.data.map((item, index) => (
                        <tr key={item.id_lote}>
                            <td>{index+1}</td>
                            <td>{item.cantidad}</td>
                            <td>{item.fecha_vencimiento.slice(0,7)}</td>
                            <td><button className={'btn btn-danger'} onClick={() => deleteLote(item.id_lote)}>Borrar</button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
    </div>)
}

export default TableLotes