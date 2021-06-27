import React, {useContext, useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import GeneralContext from '../context/GeneralContext'
import NextButton from '../components/NextButton'
import AlertMessage from '../components/AlertMessage'
import '../styles/Skills.css'
import JobComponent from '../components/skillsComponents/JobComponent'
import EducationComponent from '../components/skillsComponents/EducationComponent'
export default function Skills() {
    let history = useHistory()
    const {userDetailsState, userDetailsDicpatcher, userInfoState} = useContext(GeneralContext)
    const [message, setMessage] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setMessage(userDetailsState.message)
        setIsLoading(userDetailsState.isLoading)
    },[isLoading, message, userDetailsState.isLoading, userDetailsState.message])

    return (
        <div className='skills-form-wrapper'>
            <div className='skills-form-body'>
                {message ? <AlertMessage message={message.text} style={message.style} /> : null }
                <div>
                    <JobComponent />
                </div>
                <div>
                    <EducationComponent />
                </div>
            </div>
            <NextButton title='Back' leftOrRight='left' onClick={() => history.push(`/person-details/${userInfoState.userId}`)} />
        </div>
    )
}
