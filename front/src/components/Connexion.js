import React from 'react'; 
import {withRouter} from 'react-router-dom';
import Login from './formLogin'; 
import Register from './formRegister'; 
import Nav from './navBar';
import Footer from './footer'; 
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const logStyle = {
    color : 'black',
    width : '40vw',
    height: '50px',
    backgroundColor: '#B75D69',
}

const buttonStyle = {
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center',
}

class Connexion extends React.Component {

    constructor (props) {
        super(props); 

        this.state = {
            mode: 'login'
        };

        this.handleEdit = this.handleEdit.bind(this); 
        this.handleClick = this.handleClick.bind(this);
    }

    handleEdit (e) {
        this.setState({
            mode: 'login'
        });
    }

    handleClick (e) {
        this.setState({
            mode : 'register'
        });
    }

    render (){

        if (this.state.mode === 'login'){
            return (
                <div>
                    <Nav/>
                    <Login/>
                    <div style={buttonStyle}>
                        <p>Cliquez sur le bouton pour vous créer un compte</p>
                        <Button variant="contained" type="button" onClick={this.handleClick} style={logStyle}>S'inscrire</Button>
                    </div>
                    <Footer/>
                </div>
            ); 
        }
        else {
            return (
                <div>
                    <Nav/>
                    <Register/>
                    <div style={buttonStyle}>
                    <p>Cliquez sur le bouton pour vous connecter</p>
                        <Button variant="contained" type="button" onClick={this.handleEdit} style={logStyle}>Se connecter</Button>
                    </div>
                    <Footer/>
                </div>
            );
        }
    }
}

export default withRouter (Connexion); 