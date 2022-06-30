import React, {useState} from "react";
import { Table } from 'react-bootstrap';

const TableShowFormatActRec = (props) => {

    const [bills, setBills]= useState([{date:"25/03/2015",number:'78855za'},{date:"25/03/2017",number:'Lsdvcsf'}])

    const billSelected = (number) => {
        props.visibleDetail(number)
    }

    return(<Table striped bordered hover className={'mt-5'}>
        <thead>
            <tr>
                <th>Fecha</th>
                <th>Numero de factura</th>
                <th>Detalles</th>
            </tr>
        </thead>
        <tbody>
        {bills.map((item) => (
            <tr key={item.number}>
                <td>{item.date}</td>
                <td>{item.number}</td>
                <td><button className={'btn btn-warning'} onClick={()=>billSelected(item.number)}>Detalles</button></td>
            </tr>
        ))}

        </tbody>
    </Table>)
}

export default TableShowFormatActRec