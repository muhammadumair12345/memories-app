import React, { useState } from 'react'
import { AuthForm, Container } from './Auth.style'
import { Button, Typography } from '@mui/material';
import Input from '../Input/Input';

const Auth = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [isSignup, setIsSignup] = useState(true);

    const handleChange = (e) => {

    }

    const handleShowPassword = () => setShowPassword((prev) => !prev)

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const switchMode = () => {
        setIsSignup((prev) => !prev);
        handleShowPassword(false);
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
                <Typography className="sign-action" onClick={switchMode} variant="body2" color="primary">
                    {isSignup ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                </Typography>
            </AuthForm>
        </Container >
    )
}

export default Auth
