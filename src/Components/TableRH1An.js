import React, {useState} from "react";
import { Table } from 'react-bootstrap';

const TableRH1An = () => {

    const [registers, setRegisters] = useState([{dateMonth:"enero",recyclable:1, resRiesBio:2, resCom:3, sharps:4,
        totalMonth:5,idrs:6,idr:7,idd:8}])

    return(
        <div className={'mt-4'}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Mes</th>
                        <th>Reciclables</th>
                        <th>Residuos<br/>Riesgo Biologico</th>
                        <th>Res. Comunes</th>
                        <th>Cortopunzantes</th>
                        <th>Total Mensual</th>
                        <th>IDRS</th>
                        <th>IDR</th>
                        <th>IDD</th>
                    </tr>
                </thead>
                <tbody>
                    {registers.map((item)=>(
                        <tr>
                            <td>{item.dateMonth}</td>
                            <td>{item.recyclable}</td>
                            <td>{item.resRiesBio}</td>
                            <td>{item.resCom}</td>
                            <td>{item.sharps}</td>
                            <td>{item.totalMonth}</td>
                            <td>{item.idrs}</td>
                            <td>{item.idr}</td>
                            <td>{item.idd}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default TableRH1An