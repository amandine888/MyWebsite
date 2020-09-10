import React, { Component, useState } from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom'; 

// Material UI : 
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import CloseIcon from '@material-ui/icons/Close';

// Style : 

const Iconlogin = styled(Button)({
    color: '#1A1423',
})

const Close = styled(CloseIcon)({ 
    position: 'absolute', 
    top: '5vh', 
    right: '5vw', 
})

const useStylesss = makeStyles({
    root: { 
        width: '100%', 
        height: '100vh',
        '& ul': {
            backgroundColor: 'rgb(234, 206, 194, 0.5)',
            padding : '80px', 
            height: '30vh', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-evenly', 
            '& li' : {  
                '& a' : {
                    color: 'black', 
                    textDecoration: 'none', 
                    fontSize: '1.875em',
                }
            }
        }
    }
});

// Hook Component : 

export default function MenuConnect() {

    const classes = useStylesss();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Iconlogin edge="start" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <PersonIcon fontSize='large'></PersonIcon>
            </Iconlogin>
            <Menu
                className={classes.root}
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                    <Close fontSize='large' onClick={handleClose}/>
                    <MenuItem onClick={handleClose}><Link to = '/connexion'>Connexion</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to = '/connexion'>Inscription</Link></MenuItem>
            </Menu>
        </div>
    );
}