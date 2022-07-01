import React, {useState} from "react";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";

const TableRH1Men = () => {

    const [registers, setRegisters] = useState([
        {dateDay:"antier",ordinaries:1,recicles:2,chemicals:3,biosanitary:4,sharps:5},
        {dateDay:"ayer",ordinaries:6,recicles:7,chemicals:8,biosanitary:9,sharps:10},
        {dateDay:"hoy",ordinaries:11,recicles:12,chemicals:13,biosanitary:14,sharps:15}])
    const columns = [
        {dataField: "dateDay", text:"fecha"},
        {dataField: "ordinaries", text:"Ordinarios"},
        {dataField: "recicles", text:"Reciclables"},
        {dataField: "chemicals", text:"Quimicos"},
        {dataField: "biosanitary", text:"Biosanitarios"},
        {dataField: "sharps", text:"Cortopunzantes"}
    ]

    return(
        <div>
            <div className={'contTableRH1M'}>
                <BootstrapTable
                    keyField={'dateDay'}
                    data={registers}
                    columns={columns}
                    pagination={paginationFactory()}
                />
            </div>

        </div>
    )
}

export default TableRH1Men