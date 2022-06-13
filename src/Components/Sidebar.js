import React, {useState} from "react";
import {FaBars} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import {BsCart, BsReverseLayoutTextSidebarReverse , BsClipboardCheck, BsPersonPlus, BsCurrencyDollar, BsQuestionCircle} from "react-icons/bs";
import Sales from "../pages/Sales";
import logoDrogueria from "../assets/Images/Logo Drogueria.PNG";
const Sidebar = (props) => {

    const messageVentas = () =>{
        alert('son las ventas')
    }
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen);
    const menuItem=[
        {
            path:'/Ventas',
            name:"Ventas",
            icon:<BsCart/>
        },
        {
            path:'/Inventario',
            name:"Inventario",
            icon:<BsReverseLayoutTextSidebarReverse/>
        },
        {
            path:'/Formatos',
            name:"Formatos",
            icon:<BsClipboardCheck/>
        },
        {
            path:'/AgregarUsuario',
            name:"Agregar Usuario",
            icon:<BsPersonPlus/>
        },
        {
            path:'/Reportes',
            name:"Reportes",
            icon:<BsCurrencyDollar/>
        },
        {
            path:'/InfoProducto',
            name:"Información de Producto",
            icon:<BsQuestionCircle/>
        }
    ]
    return (
        <div className='contPers'>
            <nav style={{width:isOpen ? "250px":"50px"}} className='sidebar '>
                <div className="position-sticky pt-3">

                    <div className='top_section'>
                        <h1 style={{display:isOpen ? "block":"none"}} className='Logo'><img
                            src={logoDrogueria}
                            width="200%"
                        /></h1>
                        <div style={{marginLeft:isOpen ? "90px":"0px"}} className='bars'>
                            <FaBars onClick={toggle}></FaBars>
                        </div>
                    </div>
                    {
                        menuItem.map((item, index)=>(
                            <NavLink to={item.path} key={index} className='link' activateclassname='active'>
                                <div className='icon'>{item.icon}</div>
                                <div style={{display:isOpen ? "block":"none"}} className='link_text'>{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
            </nav>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Sidebar