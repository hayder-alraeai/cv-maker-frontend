import axios from "axios";
import {BASE_URL} from '../config/config'
export const verificationApi = (data, setMessage, setIsLoading) => {
    axios
        .get(`${BASE_URL}/api/v1/verify/${data}`)
        .then(res => {
            if(res.data.status === 'success'){
                return res.data
            }   
        })
        .then(data => setMessage(data.message))
        .then(() => setIsLoading(false))
        .catch(error => {
            if(error.response){
                setIsLoading(false)
                setMessage(error.response.data.message);

            }
        })
}