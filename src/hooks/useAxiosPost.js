import { useState, useEffect } from 'react'
import axios from "axios";

const useAxiosPost = (url, body) => {
    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect( () => {
        const axiosResource = async () => {
            await axios.post(url, body).then(function (response) {
                if(response.data){
                    setData(response.data)
                    setLoading(false)
                }
            }).catch(function (error) {
                setLoading(false)
                setError(error)
            });
        }
        axiosResource()

    })

    return { data, loading, error }
}

export default useAxiosPost