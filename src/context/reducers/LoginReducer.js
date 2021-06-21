
const LoginReducer = (state, action) => {
    switch(action.type){
        case 'login':
            return {email: action.payload.email, password: action.payload.password}
        default:
            return state;
    }
}

export default LoginReducer;