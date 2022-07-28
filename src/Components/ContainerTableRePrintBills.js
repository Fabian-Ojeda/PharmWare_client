import React, {useState} from "react";
import TableReprintBillProduct from "./TableReprintBillProduct";
import Loading from "./Loading";
import useAxiosPost from "../hooks/useAxiosPost";

const ContainerTableRePrintBills = (props) => {
    const ip = process.env.REACT_APP_IP_SERVER
    let { data, loading } = useAxiosPost('http://'+ip+'/inventory/get_item_sale',{"saleId":props.saleId}, props.saleId)
    if(loading)
        return <Loading />
    return(<TableReprintBillProduct products={data}/>)
}

export default ContainerTableRePrintBills