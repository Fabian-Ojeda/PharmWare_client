import React from "react";
import Loading from "./Loading";
import useFetch from "../hooks/useFetch";
import TableLimAre from "./TableLimAre";

const ContainerTableLimpAre = (props) =>{
    return(<div style={{display:props.visible}}>
        <TableLimAre/>
    </div>)
}

export default ContainerTableLimpAre