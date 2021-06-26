import {createUserDetails} from '../../apies/UserDetailsApi'
const UserDetailsReducer = (state, action) => {
    switch(action.type){
        case 'save':
            console.log('reducers: ' + action.payload.userDetails.firstName);
            //implementing code to post those info to the backend
            createUserDetails(action.payload.userDetails, action.payload.userId )
            return {isLoading: false, userId: action.payload.userId, message: {text: 'your info has been saved!', style: 'success'}, userDetails: action.payload.userDetails}
        default:
            return state
    }
}
export default UserDetailsReducer
