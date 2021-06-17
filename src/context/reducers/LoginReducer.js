import axios from 'axios';
const loginCall = (email, password) => {
    return  axios({
        method: 'post',
        url: 'http://localhost:5000/api/v1/login',
        data: {
            email: email,
            password: password
        }
    })
    .then(res => {
        return res.data.token
    }, error => {
        console.log(error)
    })
}

const LoginReducer = (state, action) => {
    switch(action.type){
        case 'login':
            return {token: loginCall(action.payload.email, action.payload.password), message: ''}
            // return {email: action.payload.email, password: action.payload.password}
        default:
            return state;
    }
}

export default LoginReducer;