import React, { Component } from 'react'; 
import {withRouter} from 'react-router-dom'; 
import decode from 'jwt-decode'; 

// import child component : 
import SimpleMenu from './burgerMenu';
import MenuConnect from './connectIcon';
import MenuProfil from './profilIcon'; 

// Material UI : 
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

        this.state = {
            showProfil: false
        }
    }

    getToken (){
        return localStorage.getItem("token"); 
    }; 

    connectionVerify (){
        const token = this.getToken(); 
        return !!token && !this.tokenExpired(token);  
    }; 

    tokenExpired(token){
        const decoded = decode(token); 
        console.log("decoded", decoded); 
        if(decoded.exp <Date.now()/1000){
            return true; 
        }
        else return false; 
    }
    catch (err) {
        return false; 
    };

    componentDidMount () {
        if (this.connectionVerify()){
            console.log("user ok"); 
            this.setState({showProfil: true}); 
        }
        else {
            console.log ("no user finded"); 
            this.setState({showProfil: false}); 
        }
    }
    
    render (){
        if (this.state.showProfil === false){
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
        else {
            return (
                <div>
                    <AppBar position="fixed">
                    <Menu>
                    <SimpleMenu/>
                    <Typo variant="h1">circé</Typo>
                    <MenuProfil/>
                    </Menu>
                    </AppBar>
                </div>
            )
        }
    }
}

export default withRouter (Nav); 