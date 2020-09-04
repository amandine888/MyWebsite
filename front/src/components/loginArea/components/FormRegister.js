import React from 'react';
import {withRouter} from 'react-router-dom';

// import CSS : 
import '../../../css/Mystyle.css'; 
import './../css/styleForm.css'; 

const containerStyle = {
    height: '80vh', 
}

class Register extends React.Component {

    constructor (props){
        super(props); 

        this.state = {
            pseudo: "",
            email: "", 
            password: "", 
            confirmPassword: ""
        };

        // bind : 
        this.handlechange = this.handlechange.bind(this); 
        this.send = this.send.bind(this); 
        // this.submit = this.submit.bind(this); 

    }

    //props : 

    handlechange (e) {
        let ref = e.target.name; 
        let value = e.target.value; 
        
        this.setState({ 
            [ref]: value
        });
    }

    // submit (e) {
    //     e.preventDefault(); 
    //     console.log(this.state); 
    // }

    send (e) {
        
        console.log(this.state);
        const { pseudo, email, password, confirmPassword} = this.state; 

        fetch('http://localhost:3050/register',{

            headers: {
                "Accept" : "application/json", 
                "Content-Type": "application/json"}, 
            method: 'POST', 
            body: JSON.stringify({
                pseudo, 
                email, 
                password, 
                confirmPassword
            })
        })
        // .then(response =>{
        //     response.json()
        //     .then(console.log);
        // })

            .then((response)=>{
                if (response.ok) {
                    response.json()
                    .then (console.log);
                    this.props.history.push('/connexion');
                }
                else {
                    console.error('server response : ' +response.status); 
                }
            })
            .catch(error =>{console.error(error);})
        // e.prevent.default(); 
        // console.log("submitted"); 
    }


    render () {
        return (
            <div>
                <form className='formContainer'>
                    <div className='titleForm'>
                        <h2>Inscription</h2>
                    </div>
                    <div className='fieldContainer' style={containerStyle}>
                        <div className='fieldStyle'>
                            <label className='styleLabel'>Pseudo</label>
                            <input className='styleInput' type='text' name='pseudo' id='pseudo' placeholder='Entrez votre pseudo' value={this.state.pseudo} onChange={this.handlechange}/>
                        </div>
                        <div className='fieldStyle'>
                            <label className='styleLabel'>Email</label>
                            <input className='styleInput' type='email' name ='email' id='email' placeholder='Entrez votre email' value={this.state.email} onChange={this.handlechange} required/>
                        </div>
                        <div className='fieldStyle'>
                            <label className='styleLabel'>Password</label>
                            <input className='styleInput' type='password' name='password' id='password' placeholder='Entrez votre mot de passe' value={this.state.password} onChange={this.handlechange} required/>
                        </div>
                        <div className='fieldStyle'>
                            <label className='styleLabel'>Confirm Password</label>
                            <input className='styleInput' type='password' name='confirmPassword' id="confirmPassword" placeholder='Confirmez votre mot de passe' value={this.state.confirmPassword} onChange={this.handlechange}/>
                        </div>
                        <button className='styleButton' onClick={this.send}>S'inscrire</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter (Register); 