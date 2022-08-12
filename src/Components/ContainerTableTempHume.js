import React from "react";
import TableTempHum from "./TableTempHum";

const ContainerTableTempHume = (props) => {
    return(<div style={{display:props.visible}}>
            <TableTempHum registers={props.registers}/>
    </div>)
}

export default ContainerTableTempHume