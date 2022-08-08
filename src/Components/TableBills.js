import React, {useState, useEffect} from "react";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import TableReprintBillProduct from "./TableReprintBillProduct";
import ContainerTableRePrintBills from "./ContainerTableRePrintBills";

const TableBills = (props) => {

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

    const defaultSorted = [{
        dataField: 'nombre',
        order: 'asc'
    }];


    const [billselected, setBillSelected] = useState(0)
    const [detailsBillSelected, setDetailsBillSelected] = useState({})
    const [bills, setBills] = useState([])
    const columns = [
        {dataField: "id_venta", text:"Id Venta"},
        {dataField: "fecha", text:"Fecha"},
        {dataField: "details", text:"Detalles"},
    ]

    const changeBillSelected = (id) => {
        setBillSelected(id)
        props.bills.forEach((item)=>{
            if(item.id_venta===id){
                setDetailsBillSelected({id_cliente:item.id_cliente, fecha:item.fecha, valor_total:item.valor_total})
            }
        })
    }

    const printBill = (id) => {
      alert("Se le imprime la factura "+id+", claro que si")
    }

    const getBills = () => {
        const data = props.bills
        for (let i = 0; i < data.length; i++) {
            data[i].details=<button className={'btn btn-warning'} data-bs-toggle="modal" data-bs-target="#modalBillDetails" onClick={() => changeBillSelected(data[i].id_venta)}>detalles</button>
            data[i].fecha= data[i].fecha.slice(0,10)
        }
        setBills(data)
    }

    useEffect(() => {
        //console.log(props.bills)
        getBills()
    });

    return(<div>
            {/*Tabla*/}
            <div className={'divTableInventory'}>
                <BootstrapTable
                    keyField={'id_venta'}
                    data={bills}
                    columns={columns}
                    pagination={paginationFactory()}
                    defaultSorted={ defaultSorted }
                    pagination={paginationFactory(options)}
                    noDataIndication="No se han recibido datos"/>
            </div>
            {/*Modal*/}
        <div className="modal fade" id="modalBillDetails" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Detalles de factura</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className={'row'}>
                            <h5>Id de factura: {billselected}</h5>
                        </div>
                        <div className={'row'}>
                            <div className={'col'}><h5>Cliente: {detailsBillSelected.id_cliente}</h5></div>
                            <div className={'col'}><h5>Fecha: {detailsBillSelected.fecha}</h5></div>
                        </div>
                        <div className={'mt-3 mb-3'}>
                            <h4>Productos</h4>
                        </div>
                        <ContainerTableRePrintBills
                            saleId={billselected}/>
                        <div className={'mt-2'}><h3>Total: {detailsBillSelected.valor_total}</h3></div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => printBill(billselected)}>Imprimir</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default TableBills