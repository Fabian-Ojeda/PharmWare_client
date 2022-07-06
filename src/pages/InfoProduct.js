import React, {useEffect, useState} from "react";
import FormHandleSearchInfoProduct from "../Components/FormHandleSearchInfoProduct";
import {useNavigate} from "react-router-dom";

const InfoProduct = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")){
            navigate('/');
        }
    });

    const [product, setProduct] = useState({name:'Dodge Challenger srt Demon', price:590000000, unitSale:'carro', ubication:'F-5'})

    return(
        <div className={'container'}>
            <div>
                <h1 className='TitleSection'>Información de productos</h1>
            </div>
            {/*Panel de busqueda manual*/}
            <div>
                <FormHandleSearchInfoProduct/>
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