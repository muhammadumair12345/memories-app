import React from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';


const Input = ({ name, type, label, handleChange, handleShowPassword }) => {
    return (
        <TextField
            name={name}
            type={type}
            label={label}
            varient="outlined"
            required
            autoComplete='on'
            onChange={handleChange}
            size='small'
            InputProps={
                name === 'password' ? {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}>
                                {type === 'password' ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    )
                } : {}
            }

        />
    )
}

export default Input
