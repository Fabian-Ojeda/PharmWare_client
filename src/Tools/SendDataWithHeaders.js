import axios from "axios";

const SendDataWithHeaders = async (url, data) => {
    var responseServer = null
    await axios.post(url, data, { headers: {
            'x-access-token': localStorage.getItem("token")
        }})
        .then(function (response) {
            console.log(response)
        if(response.status===200){
                responseServer = 'OK'

        }
    }).catch(function (error) {
        if(error.response.data.message){
            responseServer = error.response.data.message
            console.log(responseServer)
        }else {

        }
    });
    return responseServer
}

export default SendDataWithHeaders