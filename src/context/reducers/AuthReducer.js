const AuthReducer = (state, action) => {
    switch(action.type){
        case 'auth':
            return {isAuth: true}
        case 'notAuth':
            return {isAuth: false}
        default:
            return state
    }
}
export default AuthReducer;