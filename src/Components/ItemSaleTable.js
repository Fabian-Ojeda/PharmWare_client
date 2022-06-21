import React , {useState} from "react";
import FormItemSaleTable from "./FormItemSaleTable";

const ItemSaleTable = (props) => {

    const [totalValue, setTotalValue] = useState(props.product.unitValue*props.product.quantity)

    const changeTotalValue = (totalQuantity) => {
        setTotalValue(props.product.unitValue*totalQuantity)
        props.modifyQuantity(props.product.id, totalQuantity)
    }

  return(<tr>
      <td>{props.product.id}</td>
      <td>{props.product.name}</td>
      <td><FormItemSaleTable
          changeTotalValue={changeTotalValue}
          defaultValue={props.product.quantity}
      /></td>
      <td>{props.product.unitValue}</td>
      <td>{totalValue}</td>
      <td><button className={'btn btn-danger'} onClick={()=>props.deleteItem(props.product.id)}>Eliminar</button></td>
  </tr>)
}

export default ItemSaleTable