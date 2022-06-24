import React from "react";
import ReportBoard from "./ReportBoard";
import { Controller, useForm} from "react-hook-form";
import DatePicker from "react-datepicker";

const ReportMonthly = () => {
    const {register, formState: {errors}, handleSubmit, control, setValue } = useForm()

    const onSubmit = (data) => {
        alert("Nos llego la fecha "+data.dateBill)
    }
  return(
      <div>
      {/*container de fecha*/}
          <div>
          <form className="col mr-4 ml-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="divDateBill">
                  <Controller
                      control={control}
                      name={'dateBill'}
                      defaultValue={null}
                      rules={{required:true}}
                      render={({ field }) => (
                          <DatePicker
                              className={'form-control'}
                              placeholderText={"Seleccione el mes"}
                              locale={"es"}
                              onChange={(date) => field.onChange(date)}
                              selected={field.value}
                              dateFormat="dd/MM/yyyy"
                              showMonthYearPicker
                          />
                      )}
                  />
              </div>
              <span className="text-danger text-small d-block mb-2">
                        {errors.dateBill?.type === 'required' && "Por favor seleccione el mes del reporte"}
                    </span>
              <div className={'mt-3'}>
                  <button className={'btn btn-secondary'} type={'submit'}>Buscar</button>
              </div>
          </form>
      </div>
      {/*container de campos*/}
        <div>
          <h3>Mes: Mayo</h3>
          <ReportBoard/>
        </div>
      </div>)
}

export default ReportMonthly