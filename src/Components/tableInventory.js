import React, {useState, useEffect} from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import ButtonTable from "./ButtonTable";
import ContainerTableLotes from "./ContainerTableLotes";

const TableInventory = (props) => {

    const [products, setProducts] = useState([]);
    const [componentShowLotes, setComponentShowLotes] = useState(<br/>)
    const [itemSelected, setItemSelected] = useState(null)

    const changeSelectedItem = (item, idItem) => {
        setComponentShowLotes(<ContainerTableLotes idProduct={idItem}/>)
        setItemSelected(item)
    }

    const getProducts = () => {
        setProducts([])
        const data = props.data
        for (let i = 0; i < data.length; i++) {
            data[i].button=<ButtonTable
                name={data[i].nombre}
                changeSelecteditem={changeSelectedItem}
                idProduct={data[i].id_producto}/>
        }
        setProducts(data)
    }

    const pageButtonRenderer = ({
                                                   page,
                                                   active,
                                                   disable,
                                                   title,
                                                   onPageChange
                                               }) => {
        const handleClick = (e) => {
            e.preventDefault();
            onPageChange(page);
        };
        const activeStyle = {};
        if (active) {
            activeStyle.backgroundColor = 'lightskyblue';
            activeStyle.color = '#232552';
        } else {
            activeStyle.backgroundColor = '#232552';
            activeStyle.color = 'white';
        }
        if (typeof page === 'string') {
            activeStyle.backgroundColor = 'white';
            activeStyle.color = 'black';
        }
        return (
            <li className="page-item">
                <button className={'btn btn-outline-dark'} href="#" onClick={ handleClick } style={ activeStyle }>{ page }</button>
            </li>
        );
    };

    const sizePerPageRenderer = ({
                                     options,
                                     currSizePerPage,
                                     onSizePerPageChange
                                 }) => (
        <div className="btn-group" role="group">
            {
                options.map((option) => {
                    const isSelect = currSizePerPage === `${option.page}`;
                    return (
                        <button
                            key={ option.text }
                            type="button"
                            onClick={ () => onSizePerPageChange(option.page) }
                            className={ `btn ${isSelect ? 'btn-primary' : 'btn-dark'}` }
                        >
                            { option.text }
                        </button>
                    );
                })
            }
        </div>
    );
    const options = {
        pageButtonRenderer,sizePerPageRenderer
    };

    useEffect(()=>{
        getProducts()
    })

    const columns = [
        {dataField: "rowNumber", text:"#",headerStyle: (column, colIndex) => {
                return { width: '6vh' }},formatter: (cell, row, rowIndex) => <td>{rowIndex+1}</td>},
        {dataField: "nombre", text:"Nombre", sort: true},
        {dataField: "categoria", text:"Categoria",headerStyle: (column, colIndex) => {
                return { width: '17vh' }}},
        {dataField: "laboratorio", text:"Laboratorio",headerStyle: (column, colIndex) => {
                return { width: '21vh' }}},
        {dataField: "precio", text:"Precio",headerStyle: (column, colIndex) => {
                return { width: '12vh' }}},
        {dataField: "unidad_venta", text:"Unidad venta",headerStyle: (column, colIndex) => {
                return { width: '12vh' }}},
        {dataField: "ubicacion", text:"Ubicación",headerStyle: (column, colIndex) => {
                return { width: '12vh' }}},
        {dataField: "cantidad_minima", text:"Cantidad minima",headerStyle: (column, colIndex) => {
        return { width: '11vh' }}},
        {dataField: "cantidad", text:"Cantidad",headerStyle: (column, colIndex) => {
                return { width: '11vh' }}},
        {dataField: "button", text:"Lotes",headerStyle: (column, colIndex) => {
        return { width: '15vh' }}}
    ]

    const defaultSorted = [{
        dataField: 'nombre',
        order: 'asc'
    }];

    return(<div className={'divTableInventory'}>
        <BootstrapTable

            keyField={'nombre'}
            data={products}
            columns={columns}
            defaultSorted={ defaultSorted }
            pagination={paginationFactory(options)}
            noDataIndication="No se han recibido datos"

            hover
            condensed/>


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
                        {componentShowLotes}
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