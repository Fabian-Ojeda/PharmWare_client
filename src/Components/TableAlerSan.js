import React, {useState} from "react";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";

const TableAlerSan = () => {
    const [registers, setRegisters] = useState([
        {dateDay:"antier",number:1,product:1,lote:2,regInv:3,motAlert:"Se emite circular #6 exponiendo problemas de concentración en el antibiotico",actions:5},
        {dateDay:"ayer",number:1,product:6,lote:7,regInv:8,motAlert:"Se emite circular #6 exponiendo problemas de concentración en el antibiotico",actions:10},
        {dateDay:"hoy",number:1,product:11,lote:12,regInv:13,motAlert:"Se emite circular #6 exponiendo problemas de concentración en el antibiotico",actions:15},
        {dateDay:"mañana",number:1,product:16,lote:17,regInv:18,motAlert:"Se emite circular #6 exponiendo problemas de concentración en el antibiotico",actions:20}
    ])
    const columns = [
        {dataField: "dateDay", text:"fecha"},
        {dataField: "number", text:"N° Alerta"},
        {dataField: "product", text:"Producto"},
        {dataField: "lote", text:"Lote"},
        {dataField: "regInv", text:"Registro Invima"},
        {dataField: "motAlert", text:"Motivo de alerta"},
        {dataField: "actions", text:"Acciones tomadas"}
    ]
    return(
        <div className={'mt-5'}>
            <div className={'contTableRH1M'}>
                <BootstrapTable
                    keyField={'number'}
                    data={registers}
                    columns={columns}
                    pagination={paginationFactory()}
                    />
            </div>
        </div>)
}

export default TableAlerSan