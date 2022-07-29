import React from "react";
import TableLotes from "./TableLotes";
import Loading from "./Loading";
import useAxiosPost from "../hooks/useAxiosPost";

const ContainerTableLotes = (props) => {
    const ip = process.env.REACT_APP_IP_SERVER
    let { data, loading } = useAxiosPost('http://'+ip+'/inventory/get_batch',{"idProduct":props.idProduct}, props.idProduct)

    if(loading)
        return <Loading />
    return <TableLotes data={data}/>
}

export default ContainerTableLotes