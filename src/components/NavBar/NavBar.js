import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Brand, Container, Logo, RightNav } from './NavBar.style'
import memories from '../../images/memories.png';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';


const NavBar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();

    const logout = () => {
        dispatch({ type: "LOGOUT" })
        setUser(null);
        window.location.href = "/";
    }

    return (
        <Container>
            <Brand to="/">
                <Typography variant="h5">
                    MUSS Memories
                </Typography>
                <Logo src={memories} alt='memories' height='60' />
            </Brand>
            {
                !user ?
                    <Button component={Link} to="/auth" variant="contained">SIGN IN</Button> :
                    <RightNav>
                        <Button variant="contained" onClick={logout}>LOGOUT</Button>
                        <Logo src={user?.result.imageUrl} alt='' />
                    </RightNav>


            }
        </Container >
    )
}

export default NavBar
