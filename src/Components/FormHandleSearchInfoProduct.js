import React from "react";
import { Controller, useForm} from "react-hook-form";

const FormHandleSearchInfoProduct = () => {

    const changeNameProduct = (event) => {
        alert("Esto esta escrito: "+event.target.value)
    }

    return(<div>

        <div className={'row mt-5 centerHorizontalELements'} align={'center'}>
            <form>
                <input
                    name="nameProduct"
                    className="form-control my-2"
                    type={'text'}
                    placeholder={"Nombre de producto"}
                    style={{width:'50%'}}
                    onChange={changeNameProduct}
                />
            </form>

        </div>
        <div className={'row mt-3 centerHorizontalELements'}>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
                    data-bs-toggle="dropdown" aria-expanded="false" style={{width:'50%'}}>
                Coincidencias
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2" style={{width:'40%'}}>
                <li>
                    <button className="dropdown-item" type="button">Coincia 1</button>
                </li>
                <li>
                    <button className="dropdown-item" type="button">Coincincia 2</button>
                </li>
                <li>
                    <button className="dropdown-item" type="button">Coinc 3</button>
                </li>
            </ul>
        </div>
    </div>)
}

export default FormHandleSearchInfoProduct