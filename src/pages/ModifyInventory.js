import React, { useState, useEffect} from "react";
import {Link} from "react-router-dom";
import FormAddLotes from "../Components/FormAddLotes";
import CalcSalePrice from "../Components/CalcSalePrice";
import FormSearchProdUpdIn from "../Components/FormSearchProdUpdIn";
import {useNavigate} from "react-router-dom"

const ModifyInventory = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")){
            navigate('/');
        }
    });
    const [responseSent, setResponseSent] = useState('')
    const [errorCreating, setErrorCreating] = useState('')
    const [salePrice, setSalePrice] = useState(0)
    const [changePrice, setChangePrice] = useState(false)
    const [nameProduct, setNameProduct] = useState('')
    const [barCode, setBarCode] = useState(0)
    const changeSalePrice = (salePriceIn) => {
        setSalePrice(prevValue => salePriceIn)
        setChangePrice(true)
    }
    const priceChanged = () => {
        setChangePrice(false)
    }
    const onChangeFunction = (item) => {
        setNameProduct(item.name)
        setBarCode(item.barCode)
    }

    const modifySuccessfull = () => {
        setErrorCreating('')
        setResponseSent('Agregación realizada correctamente')
    }

    const modifyFailed = () => {
        setResponseSent('')
        setErrorCreating('La agregación no se ha realizado correctamente')
    }

    return(
        <div className={'container'}>
            <h1>Modificación de Inventario</h1>
            <div className={'col'}>
                {/*Panel del busqueda manual*/}
                <FormSearchProdUpdIn flag={2} onChangeFunction={ onChangeFunction }/>
                <div className={'row mt-5'} align={'center'}>
                    <h3>{nameProduct}</h3>
                </div>
                {/*Panel de opciones */}
                <div className={'row mt-3'} >
                    {/*Panel del formulario*/}
                    <FormAddLotes
                        salePrice={salePrice}
                        changePrice={changePrice}
                        setChangePrice={priceChanged}
                        barCode={barCode}
                        modifySuccessfull={modifySuccessfull}
                        modifyFailed={modifyFailed}
                    />
                    {/*Panel de la calculadora*/}
                    <CalcSalePrice
                        changeSalePrice={changeSalePrice}
                    />
                </div>
            </div>
            <div align={'center'}>
            <span className="text-primary fs-3 d-block mt-3">
                    {responseSent}
                </span>
            </div>
            <div align={'center'}>
            <span className="text-danger fs-3 d-block mt-3">
              {errorCreating}
                </span>
            </div>
        </div>)
}

export default ModifyInventory