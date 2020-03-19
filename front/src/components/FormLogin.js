import React from 'react';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import './../mystyle.css';

const Styles = styled(Button)({
        color: 'green',
})

class Login extends React.Component {
    render () {
        return (
            <div>
                {/* <Button variant="contained" color="primary" >Hello World</Button>
                <Styles variant="contained">Secondary</Styles> */}
                <div className='formContainer'>
                    <div className='titleForm'>
                        <h2>Connexion</h2>
                    </div>
                    <form className='fieldContainer'>
                        <div className='fieldStyle'>
                            <label className='styleLabel'>Email</label>
                            <input className='styleInput' type='text'></input>
                        </div>
                        <div className='fieldStyle'>
                            <label className='styleLabel'>Password</label>
                            <input className='styleInput' type='text'></input>
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