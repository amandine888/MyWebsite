import React from 'react'; 
import {withRouter} from 'react-router-dom'; 
import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';

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

const Burger = styled(IconButton)({
    color: '#1A1423',
})

const Iconlogin = styled(Button)({
    color: '#1A1423',
})

class Nav extends React.Component {
    render (){
        return (
            <div>
                <AppBar position="fixed">
                <Menu>
                <Burger edge="start" aria-label="menu">
                <MenuIcon fontSize='large'/>
                </Burger>
                <Typo variant="h1">circé</Typo>
                <Iconlogin>
                <PersonIcon fontSize='large'></PersonIcon>
                </Iconlogin>
                </Menu>
                </AppBar>
            </div>
        )
    }
}

export default withRouter (Nav); 