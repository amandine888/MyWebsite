import React from 'react';
import {withRouter} from 'react-router-dom';
import './../Mystyle.css';

class Login extends React.Component {
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