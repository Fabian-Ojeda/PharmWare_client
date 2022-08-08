import React, {useState} from "react";
import { Table } from 'react-bootstrap';

const TableReprintBillProduct = (props) => {
  const [products, setProducts] = useState([{}])


  return(<div>
    <Table striped bordered hover>
      <thead>
      <tr>
        <th>#</th>
        <th>Nombre</th>
        <th>Cantidad</th>
        <th>Valor unitario</th>
        <th>Valor Total</th>
      </tr>
      </thead>
      <tbody>
      {props.products.map((item, index)=>(
          <tr key={item.id_producto}>
            <td>{(index+1)}</td>
            <td>{item.nombre}</td>
            <td>{item.cantidad}</td>
            <td>{(item.valor_total)/(item.cantidad)}</td>
            <td>{item.valor_total}</td>
          </tr>
      ))}
      </tbody>
    </Table>
  </div>)
}

export default TableReprintBillProduct