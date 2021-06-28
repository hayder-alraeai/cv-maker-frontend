import {createUserDetails, addWork} from '../../apies/UserDetailsApi'
const UserDetailsReducer = (state, action) => {
    switch(action.type){
        case 'save':
            //implementing code to post those info to the backend
            createUserDetails(action.payload.userDetails, action.payload.userId )
            return {isLoading: false, userId: action.payload.userId, message: {text: 'your info has been saved!', style: 'success'}, userDetails: action.payload.userDetails}
        case 'addWork':
            //implementing code to post new work to backend
            console.log(action.payload.userDetails.workExperiences);
            addWork(action.payload.userDetails.workExperiences, action.payload.userId )
            return {isLoading: false, userId: action.payload.userId, message: {text: 'your info has been saved!', style: 'success'}, userDetails: {...state.userDetails, workExperiences: action.payload.userDetails.workExperiences}}
        case 'addEducation':
            //implementing code to post new education to backend
            return {...state, userDetails: {}}
        default:
            return state
    }
}
export default UserDetailsReducer
