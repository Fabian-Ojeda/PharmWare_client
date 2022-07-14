import axios from "axios";

const InitSesion = async (usname, password) => {
    const ip = process.env.REACT_APP_IP_SERVER
    var responseServer = null
    await axios.post('http://'+ip+'/auth/login', {
        username: usname,
        password: password
    }).then(function (response) {
        if(response.data){
            responseServer = response.data
        }
    }).catch(function (error) {
        if (error.response.data.message){
            if(error.response.data.message==='User not found'){
                responseServer = "El usuario no se ha encontrado"
            }else {
                responseServer = "contraseña incorrecta"
            }
        }else {
            responseServer =  "Sin respuesta por parte del servidor"
        }
        });
    return responseServer
}

export default InitSesion