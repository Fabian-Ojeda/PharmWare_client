import React, {useState, useEffect} from "react";
import { Controller, useForm} from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import FormSearchProdUpdIn from "../Components/FormSearchProdUpdIn";
import SendData from "../Tools/SendData";
import CalcSalePrice from "../Components/CalcSalePrice";

const AddQuantityToProduct = () => {
    const ip = process.env.REACT_APP_IP_SERVER
    const {register, formState: {errors}, handleSubmit, watch,control, setValue } = useForm()

    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")){
            navigate('/');
        }
    });
    const [nameProduct, setNameProduct] = useState('')
    const [idProduct, setIdProduct] = useState(0)
    const [succesfullCreated, setSuccesfullCreated] = useState('')
    const [failitureCreated, setfailitureCreated] = useState('')
    const [salePrice, setSalePrice] = useState(0)
    const [changePrice, setChangePrice] = useState(false)

    const succesCreating = () => {
        setfailitureCreated('')
        setSuccesfullCreated('Se han agregado las unidades correctamente')
    }

    const failCreating = (error) => {
        setSuccesfullCreated('')
        setfailitureCreated(error)
    }

    const onChangeFunction = (item) => {
        if(item.category==='Medicamentos'){
            alert("El producto seleccionado es un medicamento, para modificar su cantidad debe proceder ingresando lotes")
        }else {
            setNameProduct(item.name)
            setIdProduct(item.id)
        }
    }

    const onSubmit = async (data) => {
        if (idProduct === 0) {
            alert("No ha seleccionado un producto")
        } else {
            setSuccesfullCreated('Agregando cantidades...')
            const response = await SendData('http://' + ip + '/inventory/update_quantity', {
                id_product: idProduct,
                quantity: data.quantity
            })
            if (response==='OK'){
                let priceNow = await SendData('http://'+ip+'/inventory/get_price',{id_product:idProduct})
                if (priceNow!=data.priceProduct){
                    const response2 = await SendData('http://'+ip+'/inventory/update_price', {id_product:idProduct, price:data.price})
                    if(response2==='OK'){
                        succesCreating()
                    }else{
                        failCreating('No se ha podido completar la operación')
                    }
                }
            }else {
                failCreating('No se ha podido completar la operación')
            }
        }
    }

    const changeSalePrice = (salePriceIn) => {
        setSalePrice(prevValue => salePriceIn)
        setValue("price", salePriceIn)
    }

    return(
        <div className={'container'}>
            <h1>Agregar unidades</h1>
                <div className={'col'}>
                        <FormSearchProdUpdIn flag={4} onChangeFunction={ onChangeFunction }/>
                        <div className={'row mt-5'} align={'center'}>
                            <h3>{nameProduct}</h3>
                        </div>
                        <div className={'row mt-3'}>
                            <form className="col mr-4 ml-4" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group mt-4" align={'center'}>
                                    <input
                                        name="quantity"
                                        className="form-control my-2"
                                        type={"number"}
                                        placeholder={"Cantidades a ingresar"}
                                        style={{width:'50%'}}
                                        min={0}
                                        {...register("quantity",{
                                            required:true
                                        })}
                                    /><span className="text-danger text-small d-block">
                                        {errors.quantity?.type === 'required' && "Ingrese las cantidades para agregar"}
                                    </span>
                                </div>
                                <div className="form-group mt-4" align={'center'}>
                                    <input
                                        name="price"
                                        className="form-control my-2"
                                        type={"number"}
                                        placeholder={"Nuevo precio"}
                                        style={{width:'50%'}}
                                        min={0}
                                        {...register("price",{
                                            required:true
                                        })}
                                    /><span className="text-danger text-small d-block">
                                        {errors.price?.type === 'required' && "Ingrese el precio de venta"}
                                    </span>
                                </div>
                                <div className="form-group mt-4" align={'center'}>
                                    <button className={'btn btn-success'} type={'submit'}>Aceptar</button>
                                </div>
                            </form>
                            <CalcSalePrice
                                changeSalePrice={changeSalePrice}
                            />


                        </div>
                        <div className="form-group mt-4" align={'center'}>
                                    <span className="text-primary fs-3 d-block mt-3">
                                            {succesfullCreated}
                                        </span>
                            <span className="text-danger fs-3 d-block mt-3">
                                            {failitureCreated}
                                        </span>
                        </div>
                </div>
        </div>)
}

export default AddQuantityToProduct