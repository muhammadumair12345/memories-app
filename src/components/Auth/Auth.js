import React, { useState } from 'react'
import { AuthForm, Container } from './Auth.style'
import { Button, Typography } from '@mui/material';
import Input from '../Input/Input';
import { GoogleLogin } from 'react-google-login';
import GoogleIcon from '@mui/icons-material/Google';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../../actions/auth'


const initialData = { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" }

const Auth = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false)
    const [isSignup, setIsSignup] = useState(true);
    const [formData, setFormData] = useState(initialData);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleShowPassword = () => setShowPassword((prev) => !prev)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            dispatch(signup(formData, navigate))
        }
        else {
            dispatch(signin(formData, navigate))
        }
    }

    const switchMode = () => {
        setIsSignup((prev) => !prev);
        setShowPassword(false);
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            dispatch({ type: "AUTH", payload: { result, token } });
            window.location.href = "/";
        } catch (error) {
            console.log(error)
        }
    }

    const googleFailure = (error) => {
        console.log(error)
        console.log("Google Sign In was unsuccessful. Try Again Later")
    }

    return (
        <Container>
            <AuthForm onSubmit={handleSubmit}>
                <Typography variant="h6" color="primary">
                    {isSignup ? "Sign Up" : "Sign In"}
                </Typography>
                {
                    isSignup &&
                    <>
                        <Input name="firstName" label="First Name" handleChange={handleChange} type="text" />
                        <Input name="lastName" label="Last Name" handleChange={handleChange} type="text" />
                    </>
                }
                <Input name="email" label="Email" handleChange={handleChange} type="email" />
                <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                {
                    isSignup &&
                    <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password" />
                }
                <Button variant="contained" type="submit">
                    {isSignup ? "Sign Up" : "Sign In"}
                </Button>
                <GoogleLogin
                    clientId='681075102548-iiigef6m2qu3b5h6bhh2u70k76dakhvk.apps.googleusercontent.com'
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy='single_host_origin'
                    SameSite="None"
                    render={
                        (renderProps) => (
                            <Button
                                onClick={renderProps?.onClick}
                                disabled={renderProps?.disabled}
                                variant="contained"
                                startIcon={<GoogleIcon />}
                            >
                                Google Sign In
                            </Button>
                        )
                    }
                />
                <Typography className="sign-action" align="right" onClick={switchMode} variant="body2" color="primary">
                    {isSignup ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                </Typography>
            </AuthForm>
        </Container >
    )
}

export default Auth
