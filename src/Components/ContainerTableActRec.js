import React from "react";
import Loading from "./Loading";
import useFetch from "../hooks/useFetch";
import TableShowFormatActRec from "./TableShowFormatActRec";

const ContainerTableActRec = (props) => {
    return(<div style={{display:props.visible}}>
        <TableShowFormatActRec
            visibleDetail={props.visibleDetail}/>
    </div>)
}

export default ContainerTableActRec