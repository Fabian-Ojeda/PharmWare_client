import React from "react";
import TableInventory from "./tableInventory";
import Loading from "./Loading";
import useAxiosPost from "../hooks/useAxiosPost";

const ContainerSearchByName = (props) => {
    const ip = process.env.REACT_APP_IP_SERVER
    const { data, loading } = useAxiosPost('http://'+ip+'/inventory/search_by_name',{"name":props.name})
    if(loading)
        return <Loading />
    return <TableInventory data={data}></TableInventory>
}

export default ContainerSearchByName