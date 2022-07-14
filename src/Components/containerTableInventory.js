import React from "react";
import TableInventory from "./tableInventory";
import Loading from "./Loading";
import useFetch from "../hooks/useFetch";

const ContainerTableInventory = () => {
    const ip = process.env.REACT_APP_IP_SERVER
    const { data, loading } = useFetch('http://'+ip+'/inventory/products')
    if(loading)
        return <Loading />

    return <TableInventory data={data}></TableInventory>
}

export default ContainerTableInventory
