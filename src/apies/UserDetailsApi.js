import axios from "axios";
import {BASE_URL} from '../config/config'
export const createUserDetails = (data, userId) => {
    axios
        .post(`${BASE_URL}/api/v1/user-details/${userId}`, {
                        firstName: data.firstName,
                        lastName: data.lastName,
                        email: data.email,
                        phoneNumber: data.phoneNumber,
                        street: data.street,
                        postCode: data.postCode,
                        state: data.state,
                        birthDate: data.birthDate,
                        birthPlace: data.birthPlace,
                        drivingLicense: data.drivingLicense,
                        gender: data.gender,
                        nationality: data.nationality,
                        maritalStatus: data.maritalStatus,
                        linkedIn: data.linkedIn,
                        website: data.website,
                        aboutMe: data.aboutMe
        })
        .then(res => {
            if(res.data.status === 'success'){
                return res.data
            }   
        })
        .catch(error => {
            if(error.response){
                return error.response.data.message
            }
        })
}
export const getUserDetails = (userId, setData) => {
    axios
        .get(`${BASE_URL}/api/v1/user-details/${userId}`)
        .then(res => {
            if(res.data.status === 'success'){
                return res.data
            }   
        })
        .then(data => setData(data.userDetails))
        .catch(error => {
            if(error.response){
                return error.response.data.message
            }
        })
}