import React, {useEffect, useState, useContext} from 'react'
import GeneralContext from '../context/GeneralContext'
import { useParams, useHistory } from 'react-router-dom'
import {verificationApi} from '../apies/VerifyApi'
import LoadingIcon from '../components/LoadingIcon'
import '../styles/Verification.css'
export default function Verification() {
    let {id} = useParams()
    let history = useHistory()
    // const {isAuthenticatedState} = useContext(GeneralContext)
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        verificationApi(id, setMessage, setIsLoading)
    }, [id])

    // if(isAuthenticatedState.isAuth){
    //     history.push('/')
    // }
    if(isLoading) {
        return(
            <LoadingIcon text='Loading ..' />
        )
    }
    return (
        <div className='verification-wrapper'>
            {message ? message : null}
        </div>
    )
}
