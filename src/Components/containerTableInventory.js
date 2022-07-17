import React, {useState} from "react";
import ContainerAllInventory from "./ContainerAllInventory";
import ContainerWithFilter from "./ContainerWithFilter";
import ContainerSearchByName from "./ContainerSearchByName";

const ContainerTableInventory = (props) => {
    const filters = ["Medicamentos","Perfumeria","Helados","Miscelanea","Papeleria"]
    if (props.filter===0){
        return <ContainerAllInventory/>
    }else if (props.filter>=1 && props.filter<=5){
        return <ContainerWithFilter filter={filters[props.filter-1]}/>
    }else {
        return <ContainerSearchByName name={props.name}/>
    }

}

export default ContainerTableInventory
