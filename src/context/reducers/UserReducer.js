
const UserReducer = (state, action) => {
    switch(action.type){
        case 'info':
            return {userId: action.payload.userId, email: action.payload.email, exp: action.payload.exp}
        default:
            return state;
    }
}

export default UserReducer;