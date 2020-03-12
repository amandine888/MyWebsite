import React from 'react';
import {withRouter} from 'react-router-dom';
import './../Mystyle.css';

class Register extends React.Component {
    render () {
        return (
            <div>
                <div className='formContainer'>
                    <div className='titleForm'>
                        <h2>Inscription</h2>
                    </div>
                    <form className='fieldContainer'>
                        <div className='fieldStyle'>
                            <label className='styleLabel'>Pseudo</label>
                            <input className='styleInput' type='text'></input>
                        </div>
                        <div className='fieldStyle'>
                            <label className='styleLabel'>Email</label>
                            <input className='styleInput' type='text'></input>
                        </div>
                        <div className='fieldStyle'>
                            <label className='styleLabel'>Password</label>
                            <input className='styleInput' type='text'></input>
                        </div>
                        <button className='styleButton'>S'inscrire</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter (Register); 