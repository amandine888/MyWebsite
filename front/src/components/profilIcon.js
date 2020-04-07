import React, { Component, useState } from 'react';
import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom'; 
import { styled } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';

// Style : 

const Iconlogin = styled(Button)({

    color: '#1A1423',
})

// Hook Component : 

export default function MenuProfil() {

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
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                    <MenuItem onClick={handleClose}><Link to = '/connexion'>Mon compte</Link></MenuItem>
                    <Button variant="contained" type="button" onClick={this.handleClick} style={logStyle}>Déconnexion</Button>
            </Menu>
        </div>
    );
}