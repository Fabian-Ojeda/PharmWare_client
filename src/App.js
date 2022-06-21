import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
  return (
    <div>
        <BrowserRouter>
            <Sidebar>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/Main' element={<MainWindow/>}/>
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
                </Routes>
            </Sidebar>
        </BrowserRouter>
    </div>
  );
}

export default App;
