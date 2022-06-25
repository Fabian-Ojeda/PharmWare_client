import React from "react";
import TableTempHum from "./TableTempHum";
import Loading from "./Loading";
import useFetch from "../hooks/useFetch";

const ContainerTableTempHume = (props) => {
    return(<div style={{display:props.visible}}>
            <TableTempHum/>
    </div>)
}

export default ContainerTableTempHume