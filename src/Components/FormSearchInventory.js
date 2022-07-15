import React from "react";
import {useForm} from "react-hook-form";
import {BsSearch} from "react-icons/bs";

const FormSearchInventory = () => {

    const changeNameProduct = (event) => {
        alert("Esto esta escrito: "+event.target.value)
    }

    const {register, formState: {errors}, handleSubmit, watch,control, setValue } = useForm()

    return(
            <form>
                <div className="input-group tool">
                <div className="input-group-text" id="btnGroupAddon"><BsSearch/></div>
                <input type="text" className="form-control" placeholder="Buscar"
                       aria-label="Input group example" aria-describedby="btnGroupAddon" onChange={changeNameProduct}/>
                </div>
            </form>

    )
}

export default FormSearchInventory