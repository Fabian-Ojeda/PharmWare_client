import React, {useEffect, useState} from "react";
import FormSearchProdUpdIn from "../Components/FormSearchProdUpdIn";
import {useNavigate} from "react-router-dom";

const InfoProduct = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")){
            navigate('/');
        }
    });

    const [product, setProduct] = useState({})

    const onChangeFunction = (item) => {
        setProduct({name:item.nombre, price:item.precio, unitSale:item.unidad_venta, ubication:item.ubicacion})
    }

    return(
        <div className={'container'}>
            <div>
                <h1 className='TitleSection'>Información de productos</h1>
            </div>
            {/*Panel de busqueda manual*/}
            <div>
                <FormSearchProdUpdIn  flag={3} onChangeFunction={ onChangeFunction }/>
            </div>
            <div className={'col mt-5'}>
                <div className={'row'}>
                    <h1>Nombre: {product.name}</h1>
                </div>
                <div className={'row mt-2'}>
                    <h1>Precio: ${product.price}</h1>
                </div>
                <div className={'row mt-2'}>
                    <h1>Unidad de venta: {product.unitSale}</h1>
                </div>
                <div className={'row mt-2'}>
                    <h1>Ubicación: {product.ubication}</h1>
                </div>
            </div>
        </div>
    )
}

export default InfoProduct