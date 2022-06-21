import React from "react";
import TableBills from "./TableBills";
import Loading from "./Loading";
import useFetch from "../hooks/useFetch";

const ContainerTableBills = (props) => {
  return(<TableBills
      bills={props.bills}/>)
}

export default ContainerTableBills