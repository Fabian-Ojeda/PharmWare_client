import React from "react";
import { useForm} from "react-hook-form";

const CalcSalePrice = (props) => {

    const {register, formState: {errors}, handleSubmit} = useForm()

    const onSubmitPrecioVenta = (data) => {
        const salePrice = Number.parseInt((data.netPrice/100*data.percentageWin))+Number.parseInt(data.netPrice)
        changePrecioVenta(salePrice)
    }

    const changePrecioVenta = (salePrice) => {
        props.changeSalePrice(salePrice)
    }


  return(
      <div className={'col mx-5'}><div className={' border border-dark'}>
      <div className={'row mb-3 mt-3'}>
          <h3 className={'text-center'}>Calculadora de precio de venta</h3>
      </div>
      <form className="col mr-4 ml-4" onSubmit={handleSubmit(onSubmitPrecioVenta)}>
          <div className="form-group mt-2" align={'center'}>
              <input
                  name="netPrice"
                  className="form-control my-2"
                  type={"number"}
                  placeholder={"Precio Neto"}
                  style={{width:'50%'}}
                  {...register("netPrice",{
                      required:true
                  })}
              /><span className="text-danger text-small d-block">
                        {errors.netPrice?.type === 'required' && "Ingrese el precio neto"}
                    </span>
          </div>
          <div className="form-group mt-4" align={'center'}>
              <input
                  name="percentageWin"
                  className="form-control my-2"
                  type={"number"}
                  placeholder={"Porcentaje de ganancia"}
                  style={{width:'50%'}}
                  {...register("percentageWin",{
                      required:true
                  })}
              /><span className="text-danger text-small d-block">
                        {errors.percentageWin?.type === 'required' && "Ingrese el porcentaje de ganancia"}
                    </span>
          </div>
          <div className={'form-group mt-4 mb-3'} align={'center'}>
              <button className={'btn btn-secondary'} type={"submit"}>Calcular</button>
          </div>
      </form>
  </div></div>)
}

export default CalcSalePrice