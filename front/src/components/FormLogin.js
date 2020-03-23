import React from 'react';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import './../mystyle.css';

const Styles = styled(Button)({
        color: 'green',
})

class Login extends React.Component {

    constructor(props){
        super(props); 

        this.state = {
            email: "",
            password: ""
        }; 

        //bind : 

    }

    // props : 



    render () {
        return (
            <div>
                <div className='formContainer'>
                    <div className='titleForm'>
                        <h2>Connexion</h2>
                    </div>
                    <form className='fieldContainer'>
                        <div className='fieldStyle'>
                            <label className='styleLabel'>Email</label>
                            <input className='styleInput' value = {this.state.email} type='email'></input>
                        </div>
                        <div className='fieldStyle'>
                            <label className='styleLabel'>Password</label>
                            <input className='styleInput' value = {this.state.password} type='password'></input>
                            <p className='textForm'>Mot de passe oublié ? Cliquez sur ce lien</p>
                        </div>
                        <button className='styleButton'>Se connecter</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter (Login); 