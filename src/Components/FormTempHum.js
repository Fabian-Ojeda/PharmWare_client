import React, {useState} from "react";
import { Controller, useForm} from "react-hook-form";
import DatePicker from "react-datepicker";
import {BsCalendarEvent} from "react-icons/bs";
import SendData from "../Tools/SendData";

const FormTempHum = () => {
    const ip = process.env.REACT_APP_IP_SERVER
    const [blueMessage, setBlueMessage] = useState('')
    const [redMessage, setRedMessage] = useState('')
  const {register, formState: {errors}, handleSubmit,control } = useForm()
  const onSubmit = async (data) => {
      setBlueMessage('')
      setRedMessage('')
        let day = data.dateDay.getDate()
      let month = (data.dateDay.getMonth() + 1)
        if(day<10){
            day="0"+day
        }
        if(month<10){
            month="0"+month
        }
       let dataToSend={temperature:data.temperature, humidity:data.humidity, date: (day + "/" + month + "/" + data.dateDay.getFullYear())}
        setBlueMessage('Enviando datos...')
      //alert("Nos llega por ahora: " + data.temperature + " " + data.humidity + "" + data.dateDay.getDate() + "/" + (data.dateDay.getMonth() + 1) + "/" + data.dateDay.getFullYear())
      const response = await SendData('http://' + ip + '/formats/temp_humidity', dataToSend)
      if (response==='OK'){
          succesCreation()
      } else{
          failitureCreating(response)
      }
  }

  const succesCreation = () => {
    setBlueMessage('Reporte guardado correctamente')
      setRedMessage('')
  }

  const failitureCreating = (error) => {
      setBlueMessage('')
      setRedMessage(error)
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
                            maxDate={new Date()}
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
            <div align={'center'}>
                <span className="text-primary fs-3 d-block mt-3">
                    {blueMessage}
                </span>
                <span className="text-danger fs-3 d-block mt-3">
                    {redMessage}
                </span>
            </div>
        </div>
      </div>

  )
}

export default FormTempHum