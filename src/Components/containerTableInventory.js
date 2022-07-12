import React from "react";
import TableInventory from "./tableInventory";
import Loading from "./Loading";
import useFetch from "../hooks/useFetch";

const ContainerTableInventory = () => {
    const { data, loading } = useFetch('http://172.21.188.169:3000/inventory/products')
    if(loading)
        return <Loading />

    return <TableInventory data={data}></TableInventory>
}

export default ContainerTableInventory
