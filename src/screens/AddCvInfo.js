import React, {useContext, useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import '../styles/AddCvInfo.css'
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LoadingButton from '../components/LoadingButton'
import GeneralContext from '../context/GeneralContext';
import AlertMessage from '../components/AlertMessage'
const useStyles = makeStyles((theme) => ({
    textField: {
      width: '100%',
    },
  }));
export default function AddCvInfo() {
    const {userDetailsState, userDetailsDicpatcher} = useContext(GeneralContext)
    const classes = useStyles();
    const [message, setMessage] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [profileDetails, setProfileDetails] = useState({})
    const [showMoreInfo, setShowMoreInfo] = useState(false)
    useEffect(() => {
        setMessage(userDetailsState.message)
        setIsLoading(userDetailsState.isLoading)
        setProfileDetails(userDetailsState.userDetails)
    }, [isLoading, userDetailsState.isLoading, message, userDetailsState.message, userDetailsState.userDetails, profileDetails])
    const handleOnClick = () => {
        setIsLoading(true)
        userDetailsDicpatcher({type: 'save', payload: {userDetails: profileDetails}})
    }
    return (
        <div className='info-form-wrapper'>
            <div className='info-form-body'>
                {message ? <AlertMessage message={message.text} style={message.style} /> : null }
                <div className='info-form-title'><AccountCircleIcon /> <span>Personal details</span></div>
                <div className='info-form-body-form'>
                <form>
                    <div className='image-name-wrapper'>
                        <div className='add-image-wrapper'>
                            <CameraAltIcon className='image-icon' />
                            <div className='text'>Add profile image</div>
                        </div>
                        <div className='name-wrapper'>
                            <div className='first-name'>
                                <p>First name<span>*</span></p>
                                <input value={profileDetails.firstName} required type='text' onChange={e => setProfileDetails(prevState => ({...prevState, firstName: e.target.value}))} />
                            </div>
                            <div className='last-name'>
                                <p>Last name<span>*</span></p>
                                <input value={profileDetails.lastName} required type='text' onChange={e => setProfileDetails(prevState => ({...prevState, lastName: e.target.value}))}  />
                            </div>    
                        </div>
                    </div>
                    <div className='email-phone-wrapper'>
                        <div className='email'>
                            <p>Email address</p>
                            <input value={profileDetails.email} required type='text' onChange={e => setProfileDetails(prevState => ({...prevState, email: e.target.value}))} />
                        </div>
                        <div className='phone'>
                            <p>Phone number</p>
                            <input value={profileDetails.phoneNumber}  type='text' onChange={e => setProfileDetails(prevState => ({...prevState, phoneNumber: e.target.value}))} />
                        </div>
                    </div>
                    <div className='address-wrapper'>
                        <div className='street'>
                            <p>Address</p>
                            <input value={profileDetails.street} type='text' onChange={e => setProfileDetails(prevState => ({...prevState, street: e.target.value}))} />
                        </div>
                        <div className='post-state-wrapper'>
                            <div className='post'>
                                <p>Post code</p>
                                <input value={profileDetails.postCode} type='text' onChange={e => setProfileDetails(prevState => ({...prevState, postCode: e.target.value}))} />
                            </div>
                            <div className='state'>
                                <p>State</p>
                                <input value={profileDetails.state} type='text' onChange={e => setProfileDetails(prevState => ({...prevState, state: e.target.value}))} />
                            </div>
                        </div>
                    </div>
                    {/* Birthday and birthplace */}
                    <div className={showMoreInfo ? 'hidden-info-wrapper' : 'hidden-info-wrapper show'}>
                    <div className='birthday-birthplace-wrapper'>
                        <div className='birthday'>
                            <p>Birthday</p>
                            <TextField
                                value={profileDetails.birthDate}
                                onChange={e => setProfileDetails(prevState => ({...prevState, birthDate: e.target.value}))} 
                                type="date"
                                defaultValue="2017-05-24"
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                        </div>
                        <div className='birthplace'>
                            <p>Birthplace</p>
                            <input value={profileDetails.birthPlace} type='text' onChange={e => setProfileDetails(prevState => ({...prevState, birthPlace: e.target.value}))} />
                        </div>
                    </div>
                    {/* Driving license  and marital status */}
                    <div className='driving-gender-wrapper'>
                        <div className='driving'>
                            <p>Driving license</p>
                            <input value={profileDetails.drivingLicense} type='text' onChange={e => setProfileDetails(prevState => ({...prevState, drivingLicense: e.target.value}))} />
                        </div>
                        <div className='gender'>
                            <p>Gender</p>
                            <select value={profileDetails.gender} onChange={e => setProfileDetails(prevState => ({...prevState, gender: e.target.value}))} >
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>
                            </select>
                        </div>
                    </div>
                    {/* Nationality and marital */}
                    <div className='nationality-marital-wrapper'>
                        <div className='nationality'>
                            <p>Nationality</p>
                            <input value={profileDetails.nationality} type='text' onChange={e => setProfileDetails(prevState => ({...prevState, nationality: e.target.value}))}  />
                        </div>
                        <div className='marital'>
                            <p>Marital status</p>
                            <input value={profileDetails.maritalStatus} type='text' onChange={e => setProfileDetails(prevState => ({...prevState, maritalStatus: e.target.value}))} />
                        </div>
                    </div>
                    {/* social media */}
                    <div className='social-wrapper'>
                        <div className='linkedin'>
                            <p>LinkedIn</p>
                            <input value={profileDetails.linkedIn}  type='text' onChange={e => setProfileDetails(prevState => ({...prevState, linkedIn: e.target.value}))} />
                        </div>
                        <div className='web'>
                            <p>Website</p>
                            <input value={profileDetails.website} type='text' onChange={e => setProfileDetails(prevState => ({...prevState, website: e.target.value}))} />
                        </div>
                    </div>
                    <div className='profile-description'>
                        <p>About me</p>
                        <textarea value={profileDetails.aboutMe} onChange={e => setProfileDetails(prevState => ({...prevState, aboutMe: e.target.value}))} />
                    </div>
                        <LoadingButton title='Save' isLoading={isLoading} onClick={handleOnClick} />
                    </div>
                    <div className='show-more-fields-bottun' onClick={() => setShowMoreInfo(!showMoreInfo)}>
                            {showMoreInfo ? <><AddCircleOutlineIcon /> <p>Show more information</p> </> : 
                            <><RemoveCircleOutlineIcon /> <p>Show less information</p> </>}
                    </div>           
                </form>
            </div>
            </div>
        </div>
    )
}
