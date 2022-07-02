import React from "react";
import TableRH1An from "./TableRH1An";
import Loading from "./Loading";
import useFetch from "../hooks/useFetch";

const ContainerTableRh1An = (props) => {
    return(
        <div style={{display:props.visible}}>
            <TableRH1An/>
        </div>)
}

export default ContainerTableRh1An