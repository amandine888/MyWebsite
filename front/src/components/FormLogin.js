import React from 'react';
import {withRouter} from 'react-router-dom';
import decode from 'jwt-decode'; 
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import './../css/Mystyle.css'

// const Styles = styled(Button)({
//         color: 'green',
// })

class Login extends React.Component {

    constructor(props){
        super(props); 

        this.state = {
            email: "",
            password: ""
        }; 

        //bind : 

        this.handleChange = this.handleChange.bind(this); 
        this.connect = this.connect.bind(this); 
        // this.nameUser = this.nameUser.bind(this); 

    }

    // props : 

    handleChange (e) {
        let ref = e.target.name; 
        let value = e.target.value; 

        this.setState ({
            [ref]: value
        });
    }

    connect (e) {
        
        const {email,password} = this.state; 

        fetch ('http://localhost:3050/login', {
            method: 'Post',
            mode: 'cors', 
            body: JSON.stringify({
                email, 
                password
            }), 
            headers:
            {
                Accept : "application/json", 
                "Content-Type": "application/json"},
        })
        .then((res) =>{
            if (res.status == 200) {
                res.json().then(res => {
                    localStorage.setItem('token', res.token);
                    this.props.history.push('/userAccount');
                    console.log(res.token)
                })
            }
        })
        .catch(error => console.log(error));
    }

    // nameUser () {
        
    // }

    render () {
        return (
            <div>
                <div className='formContainer'>
                    <div className='titleForm'>
                        <h2>Connexion</h2>
                    </div>
                    <div className='fieldContainer'>
                        <div className='fieldStyle'>
                            <label className='styleLabel'>Email</label>
                            <input className='styleInput' type='email' name='email' value = {this.state.email} onChange={this.handleChange} required></input>
                        </div>
                        <div className='fieldStyle'>
                            <label className='styleLabel'>Password</label>
                            <input className='styleInput' type='password' name='password' value = {this.state.password} onChange={this.handleChange} required></input>
                            <p className='textForm'>Mot de passe oublié ? Cliquez sur ce lien</p>
                        </div>
                        <button className='styleButton' onClick={this.connect}>Se connecter</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter (Login); 