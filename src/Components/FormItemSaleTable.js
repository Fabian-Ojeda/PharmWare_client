import React from "react";

const FormItemSaleTable = (props) => {

  const changeQuantity = (event) => {
    props.changeTotalValue(event.target.value)
  }
  return(
      <form>
        <input
            name="quantityProduct"
            className="form-control"
            type={'number'}
            style={{width:'20%'}}
            defaultValue={props.defaultValue}
            min={1}
            onChange={changeQuantity}
        />
      </form>)
}

export default FormItemSaleTable