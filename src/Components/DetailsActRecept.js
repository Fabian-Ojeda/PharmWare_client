import React from "react";
import { Table } from 'react-bootstrap';

const DetailsActRecept = (props) => {
  return(
      <div style={{display:props.visible}}>
        <div className={'row mt-5'}>
          <div className={'col'} align={'center'}>
              <h3>Numero de factura: {props.idBill}</h3>
          </div>
          <div className={'col'} align={'center'}>
              <h3>Fecha: esa se lee</h3>
          </div>
        </div>
        <div>
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
            {props.details.map((item) => (
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
          </Table>
        </div>
      </div>)
}

export default DetailsActRecept