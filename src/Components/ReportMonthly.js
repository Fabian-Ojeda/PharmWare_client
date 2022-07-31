import React, {useState} from "react";
import ReportBoard from "./ReportBoard";
import { Controller, useForm} from "react-hook-form";
import DatePicker from "react-datepicker";
import SendData from "../Tools/SendData";

const ReportMonthly = () => {
    const ip = process.env.REACT_APP_IP_SERVER
    const {register, formState: {errors}, handleSubmit, control, setValue } = useForm()
    const [visible, setVisible] = useState('none')
    const [dateToShow, setDatetoShow] = useState('')
    const [reports, setReports] = useState({total19:0, total5:0,total0:0})
    const onSubmit = async (data) => {
        setReports({total19: 0, total5: 0, total0: 0})
        setDatetoShow((data.dateBill.getMonth() + 1) + "/" + data.dateBill.getFullYear())
        let dateToSend = '';
        if ((data.dateBill.getMonth() + 1)<10){
            dateToSend = "0"+(data.dateBill.getMonth() + 1) + "-" + data.dateBill.getFullYear()
        } else{
            dateToSend = (data.dateBill.getMonth() + 1) + "-" + data.dateBill.getFullYear()
        }
        const responseServer = await SendData('http://' + ip + '/report/monthly', {date: dateToSend})
        if (typeof responseServer === 'object') {
            setReports(responseServer)
            setVisible('block')
        } else {
            alert("eso no sivio")
        }
    }
    const printReport = () => {
      alert("se le imprime, claro que si")
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
                              dateFormat="MM/yyyy"
                              showMonthYearPicker
                              maxDate={new Date()}
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
        <div className={'mt-3'} style={{display:visible}}>
          <h3>Mes: {dateToShow}</h3>
          <ReportBoard
              visible = {visible}
              reports={reports}/>
        </div>
          <div align={'right'} style={{display:visible}}>
              <button className={'btn btn-primary'} onClick={() => printReport()}>Imprimir Reporte</button>
          </div>
      </div>)
}

export default ReportMonthly