import { Button, Typography } from '@mui/material'
import React from 'react'
import { Brand, Container, Logo } from './NavBar.style'
import memories from '../../images/memories.png';
import { Link } from "react-router-dom";


const NavBar = () => {
    const auth = true;
    return (
        <Container>
            <Brand to="/">
                <Typography variant="h5">
                    MUSS Memories
                </Typography>
                <Logo src={memories} alt='memories' height='60' />
            </Brand>
            {
                auth ?
                    <Button component={Link} to="/auth" variant="contained">Login</Button> :
                    <Button component={Link} to="/auth" variant="contained">Logout</Button>
            }
        </Container>
    )
}

export default NavBar
