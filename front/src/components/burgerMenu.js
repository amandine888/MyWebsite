import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom'; 

// import CSS : 
import './../css/Mystyle.css'; 

// Material UI : 
import { styled } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Burger = styled(IconButton)({
    color: '#1A1423',
})

const Close = styled(CloseIcon)({ 
  position: 'absolute', 
  top: '5vh', 
  left: '5vw', 
})

const useStyles = makeStyles({
  root: { 
      width: '100%', 
      height: '100vh',
      '& ul': {
        backgroundColor: '#B75D69',
        padding : '70px', 
        height: '60vh', 
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

export default function SimpleMenu() {

  const classes = useStyles();

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
          className={classes.root}
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
            <Close fontSize='large' onClick={handleClose}/>
            <MenuItem onClick={handleClose}><Link  to = '/'>Accueil</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link  to = '/associations'>Associations</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link  to = '/events'>Events</Link></MenuItem>
        </Menu>
    </div>
  );
}