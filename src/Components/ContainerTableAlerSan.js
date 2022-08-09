import React from "react";
import TableAlerSan from "./TableAlerSan";

const ContainerTableAlerSan = (props) => {
    return(<div style={{display:props.visible}}>
        <TableAlerSan/>
    </div>)
}

export default ContainerTableAlerSan