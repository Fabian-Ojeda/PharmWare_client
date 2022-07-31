import React, {useState, useEffect}from "react";
import { Table } from 'react-bootstrap';
import SendData from "../Tools/SendData";

const TableLotes = (props) => {
    const ip = process.env.REACT_APP_IP_SERVER
    const [data, setData] = useState(props.data)

    const deleteLote = async (idLote) => {
        const response = await SendData('http://'+ip+'/inventory/remove_batch',{"idProduct":idLote})
        if (response.message==='Batch has been removed'){
            let dataTemp = data
            console.log(dataTemp)
            dataTemp = dataTemp.filter((item)=> item.id_lote!=idLote)
            setData(dataTemp)
            alert("El lote se ha eliminado correctamente")
        }else {
            alert("No se ha podido eliminar el lote ")
        }
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
                    {data.map((item, index) => (
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