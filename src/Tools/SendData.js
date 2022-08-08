import axios from "axios";

const SendData = async (url, data) => {
    var responseServer = null
    await axios.post(url,
        data).then(function (response) {
        if(response.data){
            responseServer = response.data
        }
    }).catch(function (error) {
        if (error.code==="ERR_NETWORK"){
            responseServer = "Sin respuesta por parte del servidor"
        }else{
        if(error.response.data.message){
            responseServer = error.response.data.message
        }else {
            responseServer = 'El servidor no ha respondido'
        }}
    });
    return responseServer
}

export default SendData