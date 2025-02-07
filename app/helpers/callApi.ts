import axios from "axios"
import ValidationError from "../exceptions/validationError"


const callApi = () => {

    const axoisInstance = axios.create({
        baseURL : 'http://localhost:5000/api'
    })

    axoisInstance.interceptors.request.use(
        (config) => {
            config.withCredentials = true
            return config
        },

        err => {throw err}
    )

    axoisInstance.interceptors.response.use(
        res => {
            // Validation Handel

            return res
        },

        err => {
            const res = err?.response;

            if(res){
                if(res.status === 422){
                    throw new ValidationError(res.data.errors);
                }
            }

            throw err
        }
    )

    return axoisInstance
}

export default callApi
