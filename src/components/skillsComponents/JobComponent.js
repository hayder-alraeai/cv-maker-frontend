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
    const [work, setWork] = useState({})
    const [works, setWorks] = useState([])
    const [showForm, setShowForm] = useState(false);
    const handleAddWork = () => {
        setWorks([...works, work])
    }
    return (
        <div className='job-wrapper'>
            {works.map(w => {
                return(
                    <div>
                        <div>{w.title}</div>
                    </div>
                )
            })}
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
                            <div><input value={work.title} type='text' onChange={e => setWork(prevState => ({...prevState, title: e.target.value}))} /></div>
                        </div>
                        <div className='city-wrapper'>
                            <div>City / Town</div>
                            <div><input value={work.city} type='text' onChange={e => setWork(prevState => ({...prevState, city: e.target.value}))} /></div>
                        </div>
                    </div>
                    {/* Employer */}
                    <div className='employer-wrapper'>
                        <div>Employer</div>
                        <div><input value={work.employer} type='text' onChange={e => setWork(prevState => ({...prevState, employer: e.target.value}))} /></div>
                    </div>
                    <div className='date-wrapper'>
                        <div className='date-wrapper-element'>
                            <div>Start</div>
                            <TextField
                                value={work.startDate}
                                onChange={e => setWork(prevState => ({...prevState, startDate: e.target.value}))}
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
                                value={work.endDate}
                                onChange={e => setWork(prevState => ({...prevState, endDate: e.target.value}))}
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
                        <div><textarea value={work.description} onChange={e => setWork(prevState => ({...prevState, description: e.target.value}))} /></div>
                    </div>
                    <LoadingButton title='Add' onClick={handleAddWork} />
                </form>
            </div>
        </div>
    )
}
