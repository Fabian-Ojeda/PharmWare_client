import React from "react";
import TableRH1Men from "./TableRH1Men";
import Loading from "./Loading";
import useFetch from "../hooks/useFetch";

const ContainerTableRH1Men = (props) => {
    return(
        <div style={{display:props.visible}}>
            <TableRH1Men/>
        </div>
    )
}

export default ContainerTableRH1Men