import React, {useState} from "react";
import { Table } from 'react-bootstrap';

const TableItemsActRec = (props) => {

    const [items, setItems] = useState(props.items)

    return(
        <Table striped bordered hover className={'mt-5'}>
            <thead>
            <tr>
                <th>Nombre</th>
                <th>Laboratorio</th>
                <th>Cantidad</th>
                <th>Reg Invima</th>
                <th>Lote</th>
                <th>Fecha de Vencimiento</th>
            </tr>
            </thead>
            <tbody>
            {items.map((item) => (
                <tr key={item.nameProduct}>
                    <td>{item.nameProduct}</td>
                    <td>{item.laboratoryProduct}</td>
                    <td>{item.quantityProduct}</td>
                    <td>{item.invimaRegisterProduct}</td>
                    <td>{item.loteProduct}</td>
                    <td>{item.dateExpirProduct}</td>
                </tr>
            ))}
            </tbody>
        </Table>)
}

export default TableItemsActRec