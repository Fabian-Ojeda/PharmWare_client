import axios from "axios";

const InitSesion = async (usname, password) => {
    var responseServer = null
    await axios.post('http://localhost:4000/auth/login', {
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