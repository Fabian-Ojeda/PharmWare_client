import axios from "axios";

const SendData = async (url, data) => {
    var responseServer = null
    await axios.post(url,
        data).then(function (response) {
        if(response.data){
            responseServer = response.data
            console.log(response.data)
        }
    }).catch(function (error) {
        if(error.response.data.message){
            responseServer = error.response.data.message
        }else {

        }
    });
    return responseServer
}

export default SendData