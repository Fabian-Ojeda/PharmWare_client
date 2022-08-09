import React, {useState} from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
//Importación de todas las paginas
import Login from "./pages/login";
import Inventory from "./pages/Inventory";
import Sidebar from "./Components/Sidebar";
import Welcome from "./pages/Welcome";
import Sales from "./pages/Sales";
import Formats from "./pages/Formats";
import AddUser from "./pages/AddUser";
import AddProviders from "./pages/AddProviders";
import Reports from "./pages/Reports";
import InfoProduct from "./pages/InfoProduct";
import UpdateInventory from "./pages/UpdateInventory";
import AddQuantityToProduct from "./pages/AddQuantityToProduct";
import ModifyInventory from "./pages/ModifyInventory";
import AddNewProduct from "./pages/AddNewProduct";
import ReprintBill from "./pages/ReprintBill";
import { useIdleTimer } from 'react-idle-timer'

function App() {
    //Variables para manejar la visibilidad de la barra lateral
    const [visible, setVisible] = useState('none')
    //Variables para manejar la visibilidad de las opciones de administrador
    const [visibleAdminOptions, setVisibleAdminOptions] = useState('none')
    //funciones para cambiar la visibilidad de componentes
    const changeVisibilitySideBar = (status) => {
        setVisible(status)
    }
    const changeVisibilityAdminOptions = (status) => {
        setVisibleAdminOptions(status)
    }
    //funcion para almacenar el token y el rol del usuario
    const changeToken = (token, rol) =>{
        localStorage.setItem("token",token)
        localStorage.setItem("rol",rol)
        idleTimer.reset()
        idleTimer.start()
    }
    //Función para cerrar sesión
    const endSession = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("rol")
        setVisible('none')
        setVisibleAdminOptions('none')
        idleTimer.pause()
    }

    //Funciones del componente IdleTimer
    const onPrompt = () => {
        // Fire a Modal Prompt
    }

    const onIdle = () => {
        endSession()
        alert("Su sesión ha expirado por inactividad")
    }

    const onActive = (event) => {
        // Close Modal Prompt
        //alert("esto es desde el de active")
    }

    const onAction = (event) => {
        // Do something when a user triggers a watched event
        //alert("esto es desde el de action")
    }

    const idleTimer = useIdleTimer({
        onPrompt,
        onIdle,
        onActive,
        onAction,
        timeout: 1000 * 60 *60,
        promptTimeout: 0,
        startOnMount: false,
        startManually: true,
        stopOnIdle: true,})


    return (
        <div>
            <BrowserRouter>
                <Sidebar visible={visible} visibleAdminOptions={visibleAdminOptions} changeVisibilitySideBar={changeVisibilitySideBar}
                         changeVisibilityAdminOptions={changeVisibilityAdminOptions} endSession={endSession}>
                    <Routes>
                        <Route path='/' element={<Login changeToken = {changeToken}/>}/>
                        <Route path='/Main' element={<Welcome/>}/>
                        <Route path='/Ventas' element={<Sales/>}/>
                        <Route path='/Ventas/ReimprimirFacturas' element={<ReprintBill/>}/>
                        <Route path='/Inventario' element={<Inventory/>}/>
                        <Route path='/Inventario/ActualizarInventario' element={<UpdateInventory/>}/>
                        <Route path='/Inventario/ActualizarInventario/AgregarAlInventario' element={<ModifyInventory/>}/>
                        <Route path='/Inventario/ActualizarInventario/AgregarUnidades' element={<AddQuantityToProduct/>}/>
                        <Route path='/Inventario/ActualizarInventario/CrearProducto' element={<AddNewProduct/>}/>
                        <Route path='/Formatos' element={<Formats/>}/>
                        <Route path='/AgregarUsuario' element={<AddUser/>}/>
                        <Route path='/AgregarProveedor' element={<AddProviders/>}/>
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
