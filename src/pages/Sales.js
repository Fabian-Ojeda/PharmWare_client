import React, {useState, useEffect } from "react";
import TableSales from "../Components/TableSales";
import FormSearchProdUpdIn from "../Components/FormSearchProdUpdIn";

const Sales = () => {
    const [products, setProducts] = useState([{id:0, name:'Acetaminofen Tabletas 500mg',quantity:1,unitValue:1000},
        {id:1, name:'Suero Pedialyte Frasco 200ml',quantity:1,unitValue:6500},
        {id:2, name:'Amoxicilina Tabletas 500mg',quantity:1,unitValue:4500},
        {id:3, name:'Loratadina Jarabe 200ml',quantity:1,unitValue:9000},
        {id:4, name:'Bicarbonato de sodio Sobre 20g',quantity:1,unitValue:300},
        {id:5, name:'Salbutamol Inhalador 500mc/g',quantity:1,unitValue:7400},
        {id:6, name:'Gel desinfectante frasco 25 ml',quantity:1,unitValue:2500},
        {id:7, name:'Dolex Jarabe 100 ml',quantity:1,unitValue:8500},])

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

    const printBills = () => {
        alert("aqui van los comandos de reimprimir facturas")
    }

    useEffect(() => {
        calcTotalSale()
    });
  return(
      <div className={'container'}>
        <h1 className='TitleSection'>Ventas</h1>
          {/*Panel de opciones*/}
          <div className={'row mt-4'}>
              <div className={'col'} align={'center'}><button className={'btn btn-secondary '} onClick={printBills} style={{width:'50%'}}>Reimprimir facturas</button></div>
              <div className={'col'} align={'center'}><button className={'btn btn-secondary'} onClick={showHandleSearch} style={{width:'50%'}}>Buscar manualmente</button></div>
          </div>
          {/*Panel de busqueda manual*/}
          {handleSearch ? <FormSearchProdUpdIn/>:<span></span>}
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
                      <div className={'col'} align={'right'}><button  className={'btn btn-primary'}>Finalizar venta</button></div>
                      <div className={'col'} align={'right'}><button className={'btn btn-danger mx-5'}>Cancelar Venta</button></div>
                  </div>
              </div>

          </div>

      </div>
  )
}

export default Sales