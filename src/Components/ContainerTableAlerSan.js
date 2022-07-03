import React from "react";
import Loading from "./Loading";
import useFetch from "../hooks/useFetch";
import TableAlerSan from "./TableAlerSan";

const ContainerTableAlerSan = (props) => {
    return(<div style={{display:props.visible}}>
        <TableAlerSan/>
    </div>)
}

export default ContainerTableAlerSan