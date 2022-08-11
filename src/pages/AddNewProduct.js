import React, {useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom"
import SendData from "../Tools/SendData";

const AddNewProduct = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")){
      navigate('/');
    }
  });

  const [barCode, setBarcode] = useState(null)
  const [responseSent, setResponseSent] = useState('')
  const [errorCreating, setErrorCreating] = useState('')
  const {register, formState: {errors}, handleSubmit , setValue} = useForm()

  const onSubmit = async (data) => {
    setResponseSent('')
    setErrorCreating('')
    let newProduct = {}
    newProduct.name = data.nameProduct
    newProduct.category = data.category
    newProduct.lab = data.laboratoryProduct
    newProduct.price = data.salePrice
    newProduct.unitSell = data.saleUnity
    newProduct.location = data.ubicationProduct
    newProduct.tax = data.tax
    newProduct.barCode = data.barcode
    newProduct.minQuant = data.minimumQuantity
    newProduct.quant = 0
    const ip = process.env.REACT_APP_IP_SERVER
    const response = await SendData('http://'+ip+'/inventory/create_product', newProduct)
    if (response==='Created'){
      setResponseSent('El producto se ha creado correctamente')
      setErrorCreating('')
    } else if (response==='Product already exists'){
      setResponseSent('')
      setErrorCreating('Ya se encuentra registrado este código de barras, el producto ya existe')
    }
  }

  const changeBarcode = () => {
    setValue("barcode", 12345)
  }

  return(
      <div className={'container'}>
        <div>
          <h1 className='TitleSection'>Crear nuevo producto</h1>
        </div>
        <div className={'mt-5'}>
          <h2>Por favor rellene los siguientes campos para crear un producto nuevo</h2>
        </div>
        {/*Formulario*/}
        <form className="row mr-4 ml-4 mt-3" onSubmit={handleSubmit(onSubmit)}>
          <div className={'col mx-5'}>
            <div className={'row my-3'}>
              <input
                  name="nameProduct"
                  className="form-control"
                  type={'text'}
                  placeholder={"Nombre del producto"}
                  {...register("nameProduct",{
                    required:true
                  })}
              /><span className="text-danger text-small d-block">
                        {errors.nameProduct?.type === 'required' && "Por favor ingrese el nombre del producto"}
                    </span>
            </div>
            <div className={'row my-3'}>
              <input
                  name="laboratoryProduct"
                  className="form-control"
                  type={'text'}
                  placeholder={"Laboratorio"}
                  {...register("laboratoryProduct",{
                  })}
              />
            </div>
            <div className={'row my-3'}>
              <input
                  name="saleUnity"
                  className="form-control"
                  type={'text'}
                  placeholder={"Unidad de Venta"}
                  {...register("saleUnity",{
                    required:true
                  })}
              /><span className="text-danger text-small d-block">
                        {errors.saleUnity?.type === 'required' && "Por favor ingrese la unidad de venta del producto"}
                    </span>
            </div>
            <div className={'row my-3'}>
              <select className="form-select" {...register("tax",{
                required:true
              })}>
                <option value="">Impuesto Grabado</option>
                <option value={19}>19%</option>
                <option value={5}>5%</option>
                <option value={0}>0%</option>
              </select>
              <span className="text-danger text-small d-block">
                        {errors.tax?.type === 'required' && "Por favor seleccione el impuesto del producto"}
                    </span>
            </div>
            <div className={'row my-3'}>
              <button className={'btn btn-secondary'} onClick={changeBarcode} type={'button'}>Leer Codigo de Barras</button>
            </div>
            <div className={'row my-3'}>
              <button className={'btn btn-success'} type={'submit'}>Aceptar</button>
            </div>
          </div>
          <div className={'col'}>
            <div className={'row my-3'}>
              <select className="form-select" {...register("category",{
                required:true
              })}>
                <option value="">Categoria</option>
                <option value={"Medicamentos"}>Medicamentos</option>
                <option value={"Perfumeria"}>Perfumeria</option>
                <option value={"Helados"}>Helados</option>
                <option value={"Miscelanea"}>Miscelanea</option>
                <option value={"Papeleria"}>Papeleria</option>
              </select>
              <span className="text-danger text-small d-block">
                        {errors.category?.type === 'required' && "Por favor seleccione la categoria del producto"}
                    </span>
            </div>
            <div className={'row my-3'}>
              <input
                  name="salePrice"
                  className="form-control"
                  type={'number'}
                  placeholder={"Precio de venta"}
                  {...register("salePrice",{
                    required:true
                  })}
              /><span className="text-danger text-small d-block">
                        {errors.salePrice?.type === 'required' && "Por favor ingrese el precio de venta del producto"}
                    </span>
            </div>
            <div className={'row my-3'}>
              <input
                  name="ubicationProduct"
                  className="form-control"
                  type={'text'}
                  placeholder={"Ubicación"}
                  {...register("ubicationProduct",{
                    required:true
                  })}
              /><span className="text-danger text-small d-block">
                        {errors.ubicationProduct?.type === 'required' && "Por favor ingrese la ubicación del producto"}
                    </span>
            </div>
            <div className={'row my-3'}>
              <input
                  name="minimumQuantity"
                  className="form-control"
                  type={'number'}
                  placeholder={"Cantidad minima"}
                  {...register("minimumQuantity",{
                    required:true
                  })}
              /><span className="text-danger text-small d-block">
                        {errors.minimumQuantity?.type === 'required' && "Por favor ingrese la cantidad mínima del producto"}
                    </span>
            </div>
            <div className={'row my-3'}>
              <input
                  name="barcode"
                  className="form-control"
                  type={'number'}
                  placeholder={"Código de barras"}
                  {...register("barcode",{
                  })}
              />
            </div>
            <div className={'row my-3'}>
              <Link to={'/Inventario'}><button className={'btn btn-danger'} style={{width:'100%'}} type={'button'}>Cancelar</button></Link>
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
        </form>
      </div>)
}

export default AddNewProduct