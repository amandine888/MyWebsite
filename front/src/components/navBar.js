import React, { Component } from 'react'; 
import {withRouter} from 'react-router-dom'; 
import SimpleMenu from './burgerMenu';
import MenuConnect from './connectIcon';
import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Typo = styled(Typography)({

    color: '#1A1423',
    fontSize: '1.875em', 
    fontFamily: 'Tenor Sans, sans-serif',
    textTransform: 'uppercase',
})

const Menu = styled(Toolbar)({

    backgroundColor: '#FFFFFF',
    display: 'flex', 
    justifyContent: 'space-between',
})

class Nav extends React.Component {

    constructor (props) {
        super (props); 

        
    }

    render (){

        return (
            <div>
                <AppBar position="fixed">
                <Menu>
                <SimpleMenu/>
                <Typo variant="h1">circé</Typo>
                <MenuConnect/>
                </Menu>
                </AppBar>
            </div>
        )
    }
}

export default withRouter (Nav); 