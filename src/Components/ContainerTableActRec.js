import React from "react";

import TableShowFormatActRec from "./TableShowFormatActRec";

const ContainerTableActRec = (props) => {
    return(<div style={{display:props.visible}}>
        <TableShowFormatActRec
            visibleDetail={props.visibleDetail}/>
    </div>)
}

export default ContainerTableActRec