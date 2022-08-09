import React from "react";
import TableRH1Men from "./TableRH1Men";

const ContainerTableRH1Men = (props) => {
    return(
        <div style={{display:props.visible}}>
            <TableRH1Men/>
        </div>
    )
}

export default ContainerTableRH1Men