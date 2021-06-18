import '../styles/Login.css'
import {Redirect} from 'react-router-dom'
import React, { useState, useContext } from 'react';
import GeneralContext from '../context/GeneralContext'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { loginHandler } from '../apies/LoginApi'
import LoadingIcon from '../components/LoadingIcon'
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
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
const Login = () => {
    //getting login state
    const { isAuthenticatedDispatcher,  isAuthenticatedState} = useContext(GeneralContext)
    const classes = useStyles();

    //getting login credentials
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    //handle login
    const handleSubmit = async(e)=> {
      e.preventDefault()
      if(email && password){
        setIsLoading(true)
        loginHandler({email, password}, setMessage, isAuthenticatedDispatcher, setIsLoading)
        setEmail('')
        setPassword('')
      }else{
        setMessage('please write your email or password!')
      }
    }
    if(isLoading){
      return(
          <LoadingIcon text="Loading..."/>
      )
    }
    return(
        <div className='login-wrapper'>
                <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      {message ? <p style={{color: 'white', fontSize:'12px', backgroundColor: 'red', padding: '10px', fontWeight: 'bolder'}}>{message}</p> : null }
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            onChange={e => setEmail(e.target.value)}
            value={email}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={e => setPassword(e.target.value)}
            value={password}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{background: 'linear-gradient(to bottom, #f74d40, #f5c160)', color: 'white', fontWeight: 'bolder'}}
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to='/signup'>
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
        </div>
    )
}
export default Login