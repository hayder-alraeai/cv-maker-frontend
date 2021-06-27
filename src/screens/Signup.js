import '../styles/Signup.css'
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import {registerHandler} from '../apies/RegisterApi'
import LoadingIcon from '../components/LoadingIcon'
import AlertMessage from '../components/AlertMessage';
const useStyles = makeStyles((theme) => ({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
const Signup = () => {
    const classes = useStyles();
    const [user, setUser] = useState({})
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        if(user) {
            setIsLoading(true)
            registerHandler(user, setMessage, setIsLoading, clearForm, setIsSubmitted)
        }
        
    }
    const clearForm = () => {
        setUser({firstName: '', lastName: '', email: '', password:''})
    }
    if(isLoading){
        return(
            <LoadingIcon text="Loading..."/>
        )
      }
    if(isSubmitted){
        return(
            <div className="signup-wrapper">
                <p>Thank you for registration, we have sent you an email with a link for verification, please check your junk mail!</p>
            </div>
        )
    }
    return(
        <div className='signup-wrapper'>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        {message ? <AlertMessage message={message} style='error' /> : null}
                        <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                        Sign up
                        </Typography>
                        <form className={classes.form} noValidate onSubmit={ (e) => handleSubmit(e)}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                value={user.firstName}
                                onChange={e => setUser(prevState => ({...prevState, firstName: e.target.value}))}
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                value={user.lastName}
                                onChange={e => setUser(prevState => ({...prevState, lastName: e.target.value}))}
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                value={user.email}
                                onChange={e => setUser(prevState => ({...prevState, email: e.target.value}))}
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                value={user.password}
                                onChange={e => setUser(prevState => ({...prevState, password: e.target.value}))}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            </Grid>
                            {/* <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                            </Grid> */}
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={{background: 'linear-gradient(to bottom, #f74d40, #f5c160)', color: 'white', fontWeight: 'bolder'}}
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                            <Link to='/login'>
                                Already have an account? Sign in
                            </Link>
                            </Grid>
                        </Grid>
                        </form>
                    </div>
            </Container>
        </div>
    )
}
export default Signup