import React from 'react';
import {withRouter} from 'react-router-dom';
import './../mystyle.css';

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
            confPassword: ""
        };

        // bind : 
        this.handlechange = this.handlechange.bind(this); 
        this.send = this.send.bind(this); 

    }

    //props : 

    handlechange (e) {
        let ref = e.target.getAttribute('name');
        this.setState({ 
            [ref]: e.target.value 
        });
    }

    send (e) {

        const { pseudo, email, password} = this.state; 

        fetch('http://localhost:3050/register',{

            headers: {
                "Accept" : "application/json", 
                "Content-Type": "application/json"}, 
            method: 'POST', 
            body: JSON.stringify({
                pseudo, 
                email, 
                password
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
                <div className='formContainer'>
                    <div className='titleForm'>
                        <h2>Inscription</h2>
                    </div>
                    <form className='fieldContainer' style={containerStyle}>
                        <div className='fieldStyle'>
                            <label className='styleLabel'>Pseudo</label>
                            <input className='styleInput' type='text' name='pseudo' value={this.state.pseudo} onChange={this.handlechange}/>
                        </div>
                        <div className='fieldStyle'>
                            <label className='styleLabel'>Email</label>
                            <input className='styleInput' type='email' name ='email' value={this.state.email} onChange={this.handlechange} required/>
                        </div>
                        <div className='fieldStyle'>
                            <label className='styleLabel'>Password</label>
                            <input className='styleInput' type='password' name='password' value={this.state.password} onChange={this.handlechange} required/>
                        </div>
                        <div className='fieldStyle'>
                            <label className='styleLabel'>Confirm Password</label>
                            <input className='styleInput' id="confPassword" type='text' name='confPassword' value={this.state.confPassword} onChange={this.handlechange}/>
                        </div>
                        <button className='styleButton' onClick={this.send}>S'inscrire</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter (Register); 