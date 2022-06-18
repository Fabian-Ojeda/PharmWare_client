import React from "react";
import { Table } from 'react-bootstrap';
import ItemSaleTable from "./ItemSaleTable";

const TableSales = (props) => {

  return(
    <div className={'mt-4'}>
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Valor Unitario</th>
          <th>Valor Total</th>
          <th>Eliminar</th>
        </tr>
        </thead>
        <tbody>
        {props.products.map((item) => (
            <ItemSaleTable
                key={item.id}
                product={item}
                modifyQuantity={props.modifyQuantity}
                deleteItem={props.deleteItem}/>
        ))}
        </tbody>
      </Table>
    </div>)
}

export default TableSales