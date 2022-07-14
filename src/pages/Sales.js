import React, {useState, useEffect } from "react";
import TableSales from "../Components/TableSales";
import FormSearchProdUpdIn from "../Components/FormSearchProdUpdIn";
import {Link, useNavigate} from "react-router-dom"

const Sales = () => {

    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")){
            navigate('/');
        }
    });

    const onChangeFunction = (item) => {
        setProducts([...products, item])
        console.log(item)
    }

    const [products, setProducts] = useState([])

    const [totalSale, setTotalSale] = useState(0)

    const [handleSearch, setHandleSearch] = useState(false)

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
                      <div className={'col'} align={'right'}><button  className={'btn btn-primary'} data-bs-toggle="modal" data-bs-target="#ModalConfirmSale">Finalizar venta</button></div>
                      <div className={'col'} align={'right'}><button className={'btn btn-danger mx-5'}>Cancelar Venta</button></div>
                  </div>
              </div>
          </div>
          {/*Modal de confirmación de venta*/}
          <div className="modal fade" id="ModalConfirmSale" tabIndex="-1" aria-labelledby="exampleModalLabel"
               aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Venta cerrada</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                          <h3>Valor total: ${totalSale}</h3>
                          <br/>
                          <h3>Desea imprimir factura</h3>
                      </div>
                      <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={printBill}>Si</button>
                          <button type="button" className="btn btn-primary" data-bs-dismiss="modal">No</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Sales