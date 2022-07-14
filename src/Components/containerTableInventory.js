import React, {useState} from "react";
import ContainerAllInventory from "./ContainerAllInventory";
import ContainerWithFilter from "./ContainerWithFilter";

const ContainerTableInventory = (props) => {
    console.log('llega de filtro: '+props.filter)
    const filters = ["Medicamentos","Perfumeria","Helados","Miscelanea","Papeleria"]
    switch (props.filter){
        case 0:
            return <ContainerAllInventory/>
            break;
        default:
            return <ContainerWithFilter filter={filters[props.filter-1]}/>
            break;
    }


}

export default ContainerTableInventory
