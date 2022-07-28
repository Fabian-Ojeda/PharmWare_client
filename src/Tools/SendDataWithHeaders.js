import axios from "axios";

const SendDataWithHeaders = async (url, data) => {
    var responseServer = null
    console.log(localStorage.getItem("token"))
    await axios.post(url, data, { headers: {
            'x-access-token': localStorage.getItem("token")
        }})
        .then(function (response) {
        if(response.data){
            responseServer = response.data
            //console.log(response.data)
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