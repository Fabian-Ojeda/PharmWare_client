import React, { useState } from "react";
import {Link} from "react-router-dom";
import FormAddLotes from "../Components/FormAddLotes";
import CalcSalePrice from "../Components/CalcSalePrice";
import FormSearchProdUpdIn from "../Components/FormSearchProdUpdIn";

const ModifyInventory = (props) => {
    const [salePrice, setSalePrice] = useState(0)
    const [changePrice, setChangePrice] = useState(false)
    const changeSalePrice = (salePriceIn) => {
        setSalePrice(prevValue => salePriceIn)
        setChangePrice(true)
    }
    const priceChanged = () => {
        setChangePrice(false)
    }
    const numberIn = props.number;
    let button;
    if (numberIn===1) {
        button = <button>Es uno</button>;
    } else {
        button = <button>Es dos</button>;    }
    return(
        <div className={'container'}>
            <h1>Modificación de Inventario</h1>
            <div className={'col'}>
                {/*Panel del busqueda manual*/}
                <FormSearchProdUpdIn/>
                {/*Panel de opciones */}
                <div className={'row mt-5'} >
                    {/*Panel del formulario*/}
                    <FormAddLotes
                        salePrice={salePrice}
                        changePrice={changePrice}
                        setChangePrice={priceChanged}
                    />
                    {/*Panel de la calculadora*/}
                    <CalcSalePrice
                        changeSalePrice={changeSalePrice}
                    />
                </div>
            </div>
            {button}
        </div>)
}

export default ModifyInventory