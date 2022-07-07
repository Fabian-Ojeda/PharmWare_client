import React, {useState} from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from "./pages/login";
import MainWindow from "./pages/MainWindow";
import Inventory from "./pages/Inventory";
import Sidebar from "./Components/Sidebar";
import Welcome from "./pages/Welcome";
import Sales from "./pages/Sales";
import Formats from "./pages/Formats";
import AddUser from "./pages/AddUser";
import Reports from "./pages/Reports";
import InfoProduct from "./pages/InfoProduct";
import UpdateInventory from "./pages/UpdateInventory";
import ModifyInventory from "./pages/ModifyInventory";
import AddNewProduct from "./pages/AddNewProduct";
import ReprintBill from "./pages/ReprintBill";

function App() {

    const changeToken = (token, rol) =>{
        localStorage.setItem("token",token)
        localStorage.setItem("rol",rol)
    }

  return (
    <div>
        <BrowserRouter>
            <Sidebar>
                <Routes>
                    <Route path='/' element={<Login changeToken = {changeToken}/>}/>
                    <Route path='/Main' element={<Welcome/>}/>
                    <Route path='/Ventas' element={<Sales/>}/>
                    <Route path='/Ventas/ReimprimirFacturas' element={<ReprintBill/>}/>
                    <Route path='/Inventario' element={<Inventory/>}/>
                    <Route path='/Inventario/ActualizarInventario' element={<UpdateInventory/>}/>
                    <Route path='/Inventario/ActualizarInventario/AgregarAlInventario' element={<ModifyInventory number={1}/>}/>
                    <Route path='/Inventario/ActualizarInventario/CrearProducto' element={<AddNewProduct/>}/>
                    <Route path='/Formatos' element={<Formats/>}/>
                    <Route path='/AgregarUsuario' element={<AddUser/>}/>
                    <Route path='/Reportes' element={<Reports/>}/>
                    <Route path='/InfoProducto' element={<InfoProduct/>}/>
                    <Route path="*" element={<h1>Pagina no encontrada</h1>}/>
                </Routes>
            </Sidebar>
        </BrowserRouter>
    </div>
  );
}

export default App;
