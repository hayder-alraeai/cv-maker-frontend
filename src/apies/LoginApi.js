import axios from "axios";
import { saveTokenInLocalStorage} from '../helpers/Utils'
export const loginHandler = (data, setMessage, isAuthenticatedDispatcher, setIsLoading) => {
    axios
        .post('http://localhost:5000/api/v1/login', {
            email: data.email,
            password: data.password
        })
        .then(res => {
            if(res.data.status === 'success'){
                return res.data
            }   
        })
        .then(data => saveTokenInLocalStorage(data.token))
        .then(() => isAuthenticatedDispatcher({type: 'auth'}))
        .then(() => setIsLoading(false))
        .catch(error => {
            if(error.response){
                setIsLoading(false)
                setMessage(error.response.data.message);

            }
        })
}