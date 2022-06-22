import React, {useState}from "react";
import { Table } from 'react-bootstrap';

const TableLotes = () => {

    const [lotes, setLotes] = useState([{id:1, cantidad:53, expirDate:'25/08/2023'},
        {id:2, cantidad:12, expirDate:'14/02/2030'},
        {id:3, cantidad:74, expirDate:'24/01/2025'},
        {id:4, cantidad:36, expirDate:'15/09/2024'}])

    return(
        <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Cantidad</th>
                    <th>Fecha de vencimiento</th>
                </tr>
                </thead>
                <tbody>
                    {lotes.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.cantidad}</td>
                            <td>{item.expirDate}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
    </div>)
}

export default TableLotes