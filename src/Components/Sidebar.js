import React, {useState , useEffect} from "react";
import {FaBars} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import {BsCart, BsReverseLayoutTextSidebarReverse , BsClipboardCheck, BsPersonPlus, BsCurrencyDollar, BsQuestionCircle} from "react-icons/bs";
import { RiLogoutBoxLine } from "react-icons/ri";
import Sales from "../pages/Sales";
import logoDrogueria from "../assets/Images/Logo Drogueria.PNG";
import { useNavigate } from 'react-router-dom';

const Sidebar = (props) => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState('none')
    const [visibleAdminOptions, setVisibleAdminOptions] = useState('none')
    const endSession = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("rol")
        setVisible('none')
        setVisibleAdminOptions('none')
        navigate('/');
    }
    useEffect(() => {

        if (localStorage.getItem("token")){
            setVisible('block')
        }
        if (localStorage.getItem("rol")==='admin'){
            setVisibleAdminOptions('block')
        }

    });
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen);
    const menuItem=[
        {
            path:'/Ventas',
            name:"Ventas",
            icon:<BsCart/>,
            displayVisible:"block"
        },
        {
            path:'/Inventario',
            name:"Inventario",
            icon:<BsReverseLayoutTextSidebarReverse/>,
            displayVisible:"block"
        },
        {
            path:'/Formatos',
            name:"Formatos",
            icon:<BsClipboardCheck/>,
            displayVisible:"block"
        },
        {
            path:'/AgregarUsuario',
            name:"Agregar Usuario",
            icon:<BsPersonPlus/>,
            displayVisible:visibleAdminOptions
        },
        {
            path:'/Reportes',
            name:"Reportes",
            icon:<BsCurrencyDollar/>,
            displayVisible:"block"
        },
        {
            path:'/InfoProducto',
            name:"Información de Producto",
            icon:<BsQuestionCircle/>,
            displayVisible:"block"
        }
    ]
    return (
        <div className='contPers'>
            <nav style={{width:isOpen ? "250px":"50px", display:visible}} className='sidebar '>
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
                            <div style={{display:item.displayVisible}} key={index}>
                                <NavLink to={item.path} key={index} className='link' activateclassname='active'>
                                    <div className='icon'>{item.icon}</div>
                                    <div style={{display:isOpen ? "block":"none"}} className='link_text'>{item.name}</div>
                                </NavLink>
                            </div>
                        ))
                    }
                    <button className='btn link' activateclassname='active' style={{width:'100%'}} onClick={endSession}>
                        <div className='icon'>{<RiLogoutBoxLine/>}</div>
                        <div style={{display:isOpen ? "block":"none"}} className='link_text'>{"Salir"}</div>
                    </button>
                </div>
            </nav>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Sidebar