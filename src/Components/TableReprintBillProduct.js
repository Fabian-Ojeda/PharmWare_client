import React, {useState} from "react";
import { Table } from 'react-bootstrap';

const TableReprintBillProduct = (props) => {
  const [products, setProducts] = useState([{id:0, name:'Acetaminofen Tabletas 500mg',quantity:1,unitValue:1000, totalValue:25000},
    {id:1, name:'Suero Pedialyte Frasco 200ml',quantity:9,unitValue:6500, totalValue:2000},
    {id:2, name:'Amoxicilina Tabletas 500mg',quantity:5,unitValue:4500, totalValue:200},
    {id:3, name:'Loratadina Jarabe 200ml',quantity:1,unitValue:9000, totalValue:25000},
    {id:4, name:'Bicarbonato de sodio Sobre 20g',quantity:1,unitValue:300, totalValue:25000},
    {id:5, name:'Salbutamol Inhalador 500mc/g',quantity:1,unitValue:7400, totalValue:25000},
    {id:6, name:'Gel desinfectante frasco 25 ml',quantity:1,unitValue:2500, totalValue:25000},
    {id:7, name:'Dolex Jarabe 100 ml',quantity:1,unitValue:8500, totalValue:25000}])


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
      {props.products.map((item)=>(
          <tr key={item.id_producto}>
            <td>{item.id_producto}</td>
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