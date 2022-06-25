import React, {useState} from "react";
import { Table } from 'react-bootstrap';

const TableTempHum = () => {

    const [registers, setRegisters] = useState([{id:0,date:"11/02/2022", temperature:25, humidity:65},
        {id:2,date:"12/02/2022", temperature:26, humidity:60},
        {id:3,date:"13/02/2022", temperature:24, humidity:62}])

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
            {registers.map((item)=>(
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