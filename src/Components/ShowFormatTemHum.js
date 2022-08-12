import React, {useState} from "react";
import { Controller, useForm} from "react-hook-form";
import DatePicker from "react-datepicker";
import {BsCalendarEvent} from "react-icons/bs";
import ContainerTableTempHume from "./ContainerTableTempHume";
import SendData from "../Tools/SendData";

const ShowFormatTemHum = () => {
  const [registers, setRegisters] = useState([])
  const [blueMessage, setBlueMessage] = useState('')
  const [redMessage, setRedMessage] = useState('')
  const [minDate, setMinDate] = useState(new Date(2020, 11, 25))
  const [visibleTable, setVisibleTable] = useState('none')
  const [enableEndDate, setEnableEndDate] = useState(true)
  const {register, formState: {errors}, handleSubmit,control } = useForm()
  const onSubmit = async (data) => {

    const ip = process.env.REACT_APP_IP_SERVER
    setBlueMessage('')
    setRedMessage('')
    let dayInit = data.initDate.getUTCDate();
    let monthInit = (data.initDate.getMonth() + 1)
    if (dayInit < 10) {
      dayInit = "0" + dayInit
    }
    if (monthInit < 10) {
      monthInit = "0" + monthInit
    }
    let dayEnd = data.endDate.getUTCDate();
    let monthEnd = (data.endDate.getMonth() + 1)
    if (dayEnd < 10) {
      dayEnd = "0" + dayEnd
    }
    if (monthEnd < 10) {
      monthEnd = "0" + monthEnd
    }

    let dataToSend = {
      initDate: (data.initDate.getFullYear() + "/" + monthInit + "/" + dayInit),
      endDate: (data.endDate.getFullYear() + "/" + monthEnd + "/" + dayEnd)
    }
    setBlueMessage('Obteniendo formatos...')
    const response = await SendData('http://' + ip + '/formats/get_temp_humidity', dataToSend)
    if (typeof response ==='object') {
      let tempDate = []
      response.forEach(element => tempDate.push({id:element.id_regis_tem_humed, date:element.fecha.slice(0,10), temperature:element.temperatura, humidity:element.humedad}));
      setRegisters(tempDate)
      succesCreation()
    }else{
      failitureCreating(response)
    }
  }

  const succesCreation = () => {
    setBlueMessage('')
    setRedMessage('')
    setVisibleTable('block')
  }

  const failitureCreating = (error) => {
    setBlueMessage('')
    setRedMessage(error)
  }

  return(<div>
    <div className={'mt-4'}>
      <h4>Seleccione el intervalo de tiempo</h4>
      <form className={'col mt-3'} onSubmit={handleSubmit(onSubmit)}>
        <div className={'row'}>
        <div className={'form-group col'}>
          <div className="groupCalendarTH my-2 mx-5">
            <Controller
                control={control}
                name={'initDate'}
                defaultValue={null}
                rules={{required:true}}
                render={({ field }) => (
                    <DatePicker
                        className={'form-control'}
                        placeholderText={"Fecha Inicial"}
                        locale={"es"}
                        onChange={(date) => {field.onChange(date)
                                              setMinDate(date)
                                              setEnableEndDate(false)}}
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
          <span className="text-danger text-small d-block mb-2 mx-5">
                                {errors.initDate?.type === 'required' && "Por favor seleccione la fecha inicial"}
                            </span>
        </div>
        <div className={'form-group col'}>
          <div className="groupCalendarTH my-2 mx-5">
            <Controller
                control={control}
                name={'endDate'}
                defaultValue={null}
                rules={{required:true}}
                render={({ field }) => (
                    <DatePicker
                        className={'form-control '}
                        placeholderText={"Fecha Final"}
                        locale={"es"}
                        onChange={(date) => field.onChange(date)}
                        selected={field.value}
                        dateFormat="dd/MM/yyyy"
                        maxDate={new Date()}
                        minDate={minDate}
                        disabled={enableEndDate}
                    />
                )}
            />
            <div className="input-group-prepend">
              <span className="input-group-text"><h7><BsCalendarEvent/></h7></span>
            </div>

          </div>
          <span className="text-danger text-small d-block mb-2 mx-5">
                                {errors.endDate?.type === 'required' && "Por favor seleccione la fecha final"}
                            </span>
        </div>
          <div className={'row mt-4 centerHorizontalELements'}>
            <button className={'btn btn-success'} style={{width:'30%'}}>Mostrar</button>
          </div>
        </div>
      </form>
      <div>
        <ContainerTableTempHume
            registers={registers}
        visible={visibleTable}/>
      </div>
      <div align={'center'}>
                <span className="text-primary fs-3 d-block mt-3">
                    {blueMessage}
                </span>
        <span className="text-danger fs-3 d-block mt-3">
                    {redMessage}
                </span>
      </div>
    </div>

  </div>)
}

export default ShowFormatTemHum