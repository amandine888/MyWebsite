import React, { Component, useState } from 'react';
import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom'; 
import { styled } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// Style : 

const Burger = styled(IconButton)({

    color: '#1A1423',
})

// Hook Component : 

export default function SimpleMenu() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Burger edge="start" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <MenuIcon fontSize='large'/>
      </Burger>
      <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
            <MenuItem onClick={handleClose}><Link to = '/'>Accueil</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to = '/associations'>Associations</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to = '/events'>Events</Link></MenuItem>
        </Menu>
    </div>
  );
}