import React from "react";
import TableInventory from "./tableInventory";
import Loading from "./Loading";
import useFetch from "../hooks/useFetch";

const ContainerTableInventory = () => {
    const { data, loading } = useFetch('https://nba-players.herokuapp.com/players-stats')
    if(loading)
        return <Loading />

    return <TableInventory data={data}></TableInventory>
}

export default ContainerTableInventory
