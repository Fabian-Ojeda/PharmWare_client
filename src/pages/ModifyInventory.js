import React, { useState, useEffect} from "react";
import {Link} from "react-router-dom";
import FormAddLotes from "../Components/FormAddLotes";
import CalcSalePrice from "../Components/CalcSalePrice";
import FormSearchProdUpdIn from "../Components/FormSearchProdUpdIn";
import {useNavigate} from "react-router-dom"
import consumeAPI from "../Tools/consumeAPI";

const ModifyInventory = (props) => {
    const ip = process.env.REACT_APP_IP_SERVER
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")){
            navigate('/');
        }else{
            if (consume === 0){
                getProviders()
                setConsume(1)
            }
        }
    });

    const getProviders = async () => {
        let providersIn = await consumeAPI('http://' + ip + '/inventory/get_supplier')
        setProviders(providersIn)
    }
    const [consume, setConsume] = useState(0)
    const [providers, setProviders] = useState([])
    const [responseSent, setResponseSent] = useState('')
    const [errorCreating, setErrorCreating] = useState('')
    const [salePrice, setSalePrice] = useState(0)
    const [changePrice, setChangePrice] = useState(false)
    const [nameProduct, setNameProduct] = useState('')
    const [barCode, setBarCode] = useState(0)
    const [idProduct, setIdProduct] = useState(0)
//---------------------Función para cambiar el valor del precio de venta
    const changeSalePrice = (salePriceIn) => {
        setSalePrice(prevValue => salePriceIn)
        setChangePrice(true)
    }
//----------------------Función para reiniciar la bandera de cambio de precio la cual esta siendo observada desde
// ---------------------el componente hijo FormAddLotes
    const priceChanged = () => {
        setChangePrice(false)
    }
//---------------------Función que pinta el nombre del producto seleccionada y almacena el codigo de barras
// --------------------del producto para usarlo en la petición y con él identificar el producto al que se le
// --------------------van a agregar lotes
    const onChangeFunction = (item) => {
        setNameProduct(item.name)
        setBarCode(item.barCode)
        setIdProduct(item.id)
    }
//------------Metodo para pintar que la creación fue correcta
    const modifySuccessfull = () => {
        setErrorCreating('')
        setResponseSent('Agregación realizada correctamente')
    }
//----------Metodo para pintar que hubo error en la creación
    const modifyFailed = () => {
        setResponseSent('')
        setErrorCreating('La agregación no se ha realizado correctamente')
    }
//----------Metodo para borrar las respuestas previas de modificación
    const dataSended = () => {
        setResponseSent('')
        setErrorCreating('')
    }

    return(
        <div className={'container'}>
            <h1>Agregación de lotes</h1>
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
                        idProduct={idProduct}
                        modifySuccessfull={modifySuccessfull}
                        modifyFailed={modifyFailed}
                        dataSended={dataSended}
                        providers={providers}
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