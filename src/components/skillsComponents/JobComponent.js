import React, {useState} from 'react'
import '../../styles/component/skillsComponents/JobComponent.css';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import LoadingButton from '../../components/LoadingButton'
const useStyles = makeStyles((theme) => ({
    textField: {
      width: '100%',
    },
  }));
export default function JobComponent() {
    const classes = useStyles();
    const [showForm, setShowForm] = useState(false);
    return (
        <div className='job-wrapper'>
            <div className='job-title-wrapper' onClick={() => setShowForm(!showForm)} >
                <div><BusinessCenterIcon /></div>
                <div>Work experience</div>
            </div>
            <div className={showForm ? 'job-body-wrapper' : 'job-body-wrapper hide'} >
                <hr />
                <form>
                    <div className='title-city-wrapper'>
                        <div className='title-wrapper'>
                            <div>Job title</div>
                            <div><input type='text' /></div>
                        </div>
                        <div className='city-wrapper'>
                            <div>City / Town</div>
                            <div><input type='text' /></div>
                        </div>
                    </div>
                    {/* Employer */}
                    <div className='employer-wrapper'>
                        <div>Employer</div>
                        <div><input type='text' /></div>
                    </div>
                    <div className='date-wrapper'>
                        <div className='date-wrapper-element'>
                            <div>Start</div>
                            <TextField
                                type="date"
                                defaultValue="2017-05-24"
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }} />
                        </div>
                        <div className='date-wrapper-element'>
                            <div>End</div>
                            <TextField
                                type="date"
                                defaultValue="2017-05-24"
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }} />
                        </div>
                    </div>
                    {/* Job describtion */}
                    <div className='job-description-wrapper'>
                        <div>Description</div>
                        <div><textarea /></div>
                    </div>
                    <LoadingButton title='Add' />
                </form>
            </div>
        </div>
    )
}
