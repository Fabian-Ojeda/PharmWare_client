import React from "react";
import TableInventory from "./tableInventory";
import Loading from "./Loading";
import useAxiosPost from "../hooks/useAxiosPost";

const ContainerWithFilter = (props) => {

    const ip = process.env.REACT_APP_IP_SERVER
    let { data, loading } = useAxiosPost('http://'+ip+'/inventory/search_by_category',{"category":props.filter}, props.filter)

    if(loading)
        return <Loading />
    return <TableInventory data={data}></TableInventory>
}

export default ContainerWithFilter