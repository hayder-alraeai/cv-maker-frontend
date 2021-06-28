import React, {useState} from 'react'
import MouseIcon from '@material-ui/icons/Mouse';
import LoadingButton from '../../components/LoadingButton'
export default function CompetenciesComponent() {
    const [showForm, setShowForm] = useState(false);
    return (
        <div className='job-wrapper'>
            <div className='job-title-wrapper' onClick={() => setShowForm(!showForm)} >
                <div><MouseIcon /></div>
                <div>Competencies</div>
            </div>
            <div className={showForm ? 'job-body-wrapper' : 'job-body-wrapper hide'} >
                <hr />
                <form>
                    <div className='title-city-wrapper'>
                        <div className='title-wrapper'>
                            <div>Competence</div>
                            <div><input placeholder='for example Microsoft Word' type='text' /></div>
                        </div>
                        <div className='city-wrapper'>
                            <div>Level</div>
                            <div>
                                <select>
                                    <option defaultValue value={null} >Choose leve</option>
                                    <option value="Expert">Expert</option>
                                    <option value="experienced">Experienced</option>
                                    <option value="skilled">Skilled</option>
                                    <option value="biginner">Biginner</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <LoadingButton title='Add' />
                </form>
            </div>
        </div>
    )
}
