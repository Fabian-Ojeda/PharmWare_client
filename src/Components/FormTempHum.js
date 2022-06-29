import React from "react";
import { Controller, useForm} from "react-hook-form";
import DatePicker from "react-datepicker";
import {BsCalendarEvent} from "react-icons/bs";

const FormTempHum = () => {

  const {register, formState: {errors}, handleSubmit,control } = useForm()
  const onSubmit = (data) => {
    alert("Nos llega por ahora: "+data.temperature+" "+data.humidity+ " "+data.dateDay)
    //console.log(data)
  }

  return(<div>
        {/**/}
        <div className={'mt-4'}>
          <h4>Rellene los siguientes campos</h4>
          <form className={'row mt-3'} onSubmit={handleSubmit(onSubmit)}>
            <div className={'form-group col'}>
              <div className="groupCalendarTH my-2">
                <Controller
                    control={control}
                    name={'dateDay'}
                    defaultValue={null}
                    rules={{required:true}}
                    render={({ field }) => (
                        <DatePicker
                            className={'form-control'}
                            placeholderText={"Fecha"}
                            locale={"es"}
                            onChange={(date) => field.onChange(date)}
                            selected={field.value}
                            dateFormat="dd/MM/yyyy"
                        />
                    )}
                />

                <div className="input-group-prepend">
                  <span className="input-group-text"><h7><BsCalendarEvent/></h7></span>
                </div>

              </div>
              <span className="text-danger text-small d-block mb-2">
                                {errors.dateDay?.type === 'required' && "Por favor seleccione la fecha"}
                            </span>
            </div>
            <div className={'form-group col'}>
              <input
                  name="temperature"
                  className="form-control my-2"
                  type={'number'}
                  placeholder={"Temperatura"}
                  {...register("temperature",{
                    required:true
                  })}
              />
              <span className="text-danger text-small d-block mb-2">
                        {errors.temperature?.type === 'required' && "Por favor ingrese la temperatura"}
                    </span>
            </div>
            <div className={'form-group col'}>
              <input
                  name="humidity"
                  className="form-control my-2"
                  type={'number'}
                  placeholder={"Humedad"}
                  {...register("humidity",{
                    required:true
                  })}
              />
              <span className="text-danger text-small d-block mb-2">
                        {errors.humidity?.type === 'required' && "Por favor ingrese la humedad"}
                    </span>
            </div>
            <div className={'form-group col'}>
              <button className={'btn btn-success  my-2'} type={'submit'}>Guardar</button>
            </div>
          </form>
        </div>
      </div>

  )
}

export default FormTempHum