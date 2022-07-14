import React, {useState, useEffect} from "react";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import ButtonTable from "./ButtonTable";
import TableLotes from "./TableLotes";

const TableInventory = (props) => {

    const [products, setProducts] = useState([]);

    const [itemSelected, setItemSelected] = useState(null)

    const changeSelectedItem = (item) => {
        setItemSelected(item)
    }

    const getProducts = () => {
        setProducts([])
        const data = props.data
        for (let i = 0; i < data.length; i++) {
            data[i].button=<ButtonTable
                name={data[i].nombre}
                changeSelecteditem={changeSelectedItem}/>
        }
        setProducts(data)
    }

    useEffect(()=>{
        getProducts()
    })

    const columns = [
        {dataField: "idProductos", text:"#"},
        {dataField: "nombre", text:"Nombre"},
        {dataField: "categoria", text:"Categoria"},
        {dataField: "laboratorio", text:"Laboratorio"},
        {dataField: "precio", text:"Precio"},
        {dataField: "unidad_venta", text:"Unidad de venta"},
        {dataField: "ubicacion", text:"Ubicación"},
        {dataField: "grabado_impuesto", text:"Impuesto"},
        {dataField: "cantidad_minima", text:"Cantidad minima"},
        {dataField: "cantidad", text:"Cantidad"},
        {dataField: "button", text:"Lotes"}
    ]
    return(<div className={'divTableInventory'}>
        <BootstrapTable
            keyField={'name'}
            data={products}
            columns={columns}
            pagination={paginationFactory()}/>


        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Lotes del producto</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {itemSelected}
                        <TableLotes/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default TableInventory