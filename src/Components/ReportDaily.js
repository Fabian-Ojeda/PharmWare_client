import React, {useState} from "react";
import ReportBoard from "./ReportBoard";
import { Controller, useForm} from "react-hook-form";
import DatePicker from "react-datepicker";
import ReportMonthly from "./ReportMonthly";

const ReportDaily = () => {

    const {register, formState: {errors}, handleSubmit, control, setValue } = useForm()
    const [visible, setVisible] = useState('none')
    const onSubmit = (data) => {
        setVisible('block')
        //alert("Nos llego la fecha "+data.dateBill)
    }


    return(<div>
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
                                    placeholderText={"Seleccione el dia"}
                                    locale={"es"}
                                    onChange={(date) => field.onChange(date)}
                                    selected={field.value}
                                    dateFormat="dd/MM/yyyy"
                                />
                            )}
                        />
                    </div>
                    <span className="text-danger text-small d-block mb-2">
                        {errors.dateBill?.type === 'required' && "Por favor seleccione la fecha del reporte"}
                    </span>
                    <div className={'mt-3'}>
                        <button className={'btn btn-secondary'} type={'submit'}>Buscar</button>
                    </div>
                </form>
            </div>
            {/*container de campos*/}
            <div className={'mt-3'} style={{display:visible}}>
                <h3>Fecha: 21/05/36</h3>
                <ReportBoard
                visible = {visible}/>
            </div>
    </div>
        )
}

export default ReportDaily