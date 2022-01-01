import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Brand, Container, Logo, RightNav, User } from './NavBar.style'
import memories from '../../images/memories.png';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';


const NavBar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const users = useSelector(state => state.authReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [users])

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
                        {user.result.imageUrl ?
                            <Logo src={user?.result.imageUrl} alt='' /> :
                            <User>{user.result.name.charAt(0)}</User>
                        }
                    </RightNav>
            }
        </Container >
    )
}

export default NavBar;
