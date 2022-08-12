import React, {useState} from "react";
import { Table } from 'react-bootstrap';

const TableTempHum = (props) => {



    return(
        <Table striped bordered hover className={'mt-5'}>
            <thead>
            <tr>
                <th>Fecha</th>
                <th>Temperatura</th>
                <th>Humedad</th>
            </tr>
            </thead>
            <tbody>
            {props.registers.map((item)=>(
                <tr key={item.id}>
                    <td>{item.date}</td>
                    <td>{item.temperature}</td>
                    <td>{item.humidity}</td>
                </tr>
                ))}
            </tbody>
    </Table>)
}

export default TableTempHum