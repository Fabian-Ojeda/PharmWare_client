import React, {useState} from "react";
import TableBills from "./TableBills";
import Loading from "./Loading";
import useAxiosPost from "../hooks/useAxiosPost";

const ContainerTableBills = (props) => {

  const ip = process.env.REACT_APP_IP_SERVER
  let { data, loading } = useAxiosPost('http://'+ip+'/inventory/get_receipt',{"date":props.dateSelected}, props.dateSelected)

  if(loading)
    return <Loading />
  return(<TableBills bills={data}/>)
}

export default ContainerTableBills