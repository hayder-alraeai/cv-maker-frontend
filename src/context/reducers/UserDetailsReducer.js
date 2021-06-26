import React from 'react'

export default function UserDetailsReducer(state, action) {
    switch(action.type){
        case 'save':
            //implementing code to post those info to the backend
            return {isLoading: false, message: {text: 'your info has been saved!', style: 'success'}, userDetails: action.payload.userDetails}
        default:
            return state
    }
}
