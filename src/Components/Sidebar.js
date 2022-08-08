import React, {useState , useEffect} from "react";
import {FaBars} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import {BsCart, BsReverseLayoutTextSidebarReverse , BsClipboardCheck, BsPersonPlus, BsCurrencyDollar, BsQuestionCircle, BsBagPlus} from "react-icons/bs";
import { RiLogoutBoxLine } from "react-icons/ri";
import logoDrogueria from "../assets/Images/Logo Drogueria LB.PNG";
import { useNavigate } from 'react-router-dom';

const Sidebar = (props) => {
    const navigate = useNavigate();


    const endSession = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("rol")
        props.changeVisibilitySideBar('none')
        props.changeVisibilityAdminOptions('none')
        navigate('/');
    }
    useEffect(() => {

        if (localStorage.getItem("token")){
            props.changeVisibilitySideBar('block')
        }
        if (localStorage.getItem("rol")==='admin'){
            props.changeVisibilityAdminOptions('block')
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
            displayVisible:props.visibleAdminOptions
        },
        {
            path:'/AgregarProveedor',
            name:'Agregar Proveedor',
            icon: <BsBagPlus/>,
            displayVisible:props.visibleAdminOptions
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
            <nav style={{width:isOpen ? "250px":"50px", display:props.visible}} className='sidebar '>
                <div className="position-sticky pt-3">

                    <div className='top_section'>
                        <NavLink to={"/"}>
                            <h1 style={{display:isOpen ? "block":"none"}} className='Logo'><img
                                src={logoDrogueria}
                                width="200%"
                            /></h1></NavLink>
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
                    <button className='btn link' activateclassname='active' style={{width:'100%'}} onClick={props.endSession}>
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