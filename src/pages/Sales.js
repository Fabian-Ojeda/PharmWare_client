import React, {useState, useEffect } from "react";
import TableSales from "../Components/TableSales";
import FormSearchProdUpdIn from "../Components/FormSearchProdUpdIn";
import {Link, useNavigate} from "react-router-dom"
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import SendDataWithHeaders from "../Tools/SendDataWithHeaders";

const Sales = () => {
    const dateTemp =  new Date()
    const today = dateTemp.getDate()+"/"+(dateTemp.getMonth()+1)+"/"+dateTemp.getFullYear()
    const todayToSend = dateTemp.getFullYear()+"/"+(dateTemp.getMonth()+1)+"/"+dateTemp.getDate()
    const ip = process.env.REACT_APP_IP_SERVER
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("token")){
            navigate('/');
        }
    });

    const onChangeFunction = (item) => {
        if (item.quantityInventory===0){
            alert("No existen unidades en el inventario de el producto seleccionado")
        }else{
            let indicator = 0
            products.forEach((element)=>{
                if(element.id===item.id){
                    alert("El producto ya se encuentra en la venta actual")
                    indicator=1
                }
            })
            if (indicator===0){
                setProducts([...products, item])
            }
        }
    }

    const [idCliente, setIdCliente] = useState(1)

    const [products, setProducts] = useState([])

    const [totalSale, setTotalSale] = useState(0)

    const [handleSearch, setHandleSearch] = useState(false)

    const [showPrintShell, setShowPrintShell] = useState(false)

    const calcTotalSale = () => {
        let addSale = 0
        products.forEach(element => (addSale+=(element.unitValue*element.quantity)))
        setTotalSale(addSale)
    }

    const modifyQuantity = (id, quantity) =>{
        let productsTemp = products
        for (let i = 0; i < productsTemp.length; i++) {
            if(productsTemp[i].id===id){
                productsTemp[i].quantity=quantity
                i+=productsTemp.length
            }
        }
        setProducts(productsTemp)
        calcTotalSale()
    }

    const deleteItem = (id) => {
        let productsTemp = products
        for (let i = 0; i < productsTemp.length; i++) {
            if(productsTemp[i].id===id){
                productsTemp.splice(i,1)
                i+=productsTemp.length
            }
        }
        setProducts(productsTemp)
        calcTotalSale()
    }

    const showHandleSearch = () => {
      setHandleSearch(true)
    }

    const printBill = () => {
      alert("Se le imprime, claro que si")
        cleanProducts()
    }

    const changeIdUser = (event)=> {
        setIdCliente(event.target.value)
        event.preventDefault()
    }

    const sendSale = async () => {
        let idClientToSend = 0
        if(idCliente===''){
            idClientToSend=1
        }else{
            idClientToSend=idCliente
        }
        let productsToSend = []
        products.forEach(element => productsToSend.push({product:element.id, quantity:element.quantity, total:element.unitValue*element.quantity}));
        const dataToSend = {date:todayToSend, total:totalSale, user:1, client:idClientToSend, products:productsToSend}
        const response = await SendDataWithHeaders('http://'+ip+'/inventory/sale', dataToSend)
        //const response = await SendData('http://'+ip+'/inventory/sale', dataToSend)
        if (response==='OK'){
            setShowPrintShell(true)
        } else {
            alert("llorela")
        }
    }

    const cleanProducts = () => {
        closePrintShell()
        setProducts([])
    }

    const cancelSale = () => {
        setProducts([])
    }

    const closePrintShell = () => {
        setShowPrintShell(false)
    }

    useEffect(() => {
        calcTotalSale()
    });
  return(
      <div className={'container'}>
        <h1 className='TitleSection'>Ventas</h1>
          {/*Panel de opciones*/}
          <div className={'row mt-4'}>
              <div className={'col'} align={'center'}><Link to={"/Ventas/ReimprimirFacturas"}><button className={'btn btn-secondary '} style={{width:'50%'}}>Reimprimir facturas</button></Link></div>
              <div className={'col'} align={'center'}><button className={'btn btn-secondary'} onClick={showHandleSearch} style={{width:'50%'}}>Buscar manualmente</button></div>
          </div>
          {/*Panel de busqueda manual*/}
          {handleSearch ? <FormSearchProdUpdIn flag={1} onChangeFunction={ onChangeFunction }/>:<span></span>}
          {/*Cliente y fecha*/}
          <div className={"row mt-5"}>
              <div className={"col"}>
                  <input style={{width: '50%'}} className={"form-control mr-5"} type={"number"}
                  id={"idUsuario"} placeholder={"Id de Cliente"} onChange={changeIdUser}/>
              </div>
              <div className={"col"}><h4>Fecha: {today}</h4></div>
          </div>
          {/*Table de ventas*/}
          <div className={'mt-4'}>
              <h2>Productos agregados</h2>
              <div className={'contTableSales'}>
                  <TableSales
                      products={products}
                      modifyQuantity={modifyQuantity}
                      deleteItem={deleteItem}/>
              </div>
          </div>
          {/*Panel Inferior*/}
          <div className={'row mt-4'}>
              <div className={'col'}><h1>Valor total: {totalSale}</h1></div>
              <div className={'col'}>
                  <div className={'row mt-2'}>
                      <div className={'col'} align={'right'}><button  className={'btn btn-primary'} onClick={sendSale}>Finalizar venta</button></div>
                      <div className={'col'} align={'right'}><button className={'btn btn-danger mx-5'} onClick={cancelSale}>Cancelar Venta</button></div>
                  </div>
              </div>
          </div>
          {/*Modal de confirmación de venta*/}
          <Modal isOpen={showPrintShell}>
              <ModalHeader>
                  <h5 className="modal-title" id="exampleModalLabel">Venta cerrada</h5>
              </ModalHeader>
              <ModalBody>
                  <h3>Valor total: ${totalSale}</h3>
                  <br/>
                  <h3>Desea imprimir factura</h3>
              </ModalBody>
              <ModalFooter>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={printBill}>Si</button>
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={cleanProducts}>No</button>
              </ModalFooter>
          </Modal>
      </div>
  )
}

export default Sales