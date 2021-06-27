import axios from "axios";
import {BASE_URL} from '../config/config'
export const registerHandler = (data, setMessage, setIsLoading, clearForm, setIsSubmitted) => {
    axios
        .post(`${BASE_URL}/api/v1/users`, {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password
        })
        .then(() => setIsLoading(false))
        .then(() => clearForm())
        .then(() => setIsSubmitted(true))
        .catch(error => {
            if(error.response){
                setIsLoading(false)
                setMessage(error.response.data.message);
            }
        })
}