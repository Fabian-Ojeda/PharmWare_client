import React, {useState} from "react";
import { Table } from 'react-bootstrap';

const TableLimAre = () => {

  const [places, setPlaces] = useState([{id:0,date:"23/09/2022",inyectologia:"x",estanteria:"",pisos:"x",paredes:"",banios:"x",det:"x",hipo:"",did:"yo", superview:"el"}])


  return(
      <Table striped bordered hover className={'mt-5'}>
        <thead>
        <tr>
          <th>Fecha</th>
          <th>Inyectologia</th>
          <th>Estanteria</th>
          <th>Pisos</th>
          <th>Paredes</th>
          <th>Paredes</th>
          <th>Detergente</th>
          <th>Hipoclorito de sodio</th>
          <th>Realizo</th>
          <th>Superviso</th>
        </tr>
        </thead>
        <tbody>
        {places.map((item)=>(
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.inyectologia}</td>
              <td>{item.estanteria}</td>
              <td>{item.pisos}</td>
              <td>{item.paredes}</td>
              <td>{item.banios}</td>
              <td>{item.det}</td>
              <td>{item.hipo}</td>
              <td>{item.did}</td>
              <td>{item.superview}</td>
            </tr>
        ))}
        </tbody>
      </Table>
      )
}

export default TableLimAre