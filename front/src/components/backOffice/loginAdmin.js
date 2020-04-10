import React, { Component, useState } from 'react';
import {Route, Switch, Link, BrowserRouter as Router, withRouter} from 'react-router-dom'; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class LogAdmin extends React.Component {
    constructor (props) {
        super(props); 

        this.state =  {
            name : "", 
            password: ""
        }

            this.getData = this.getData.bind(this); 
            this.connect = this.connect.bind(this); 
    }

    getData (e) {
        let ref = e.target.name; 
        let value = e.target.value; 

        this.setState ({
            [ref] : value
        }) 
    }

    connect (e) {

        const {name,password} = this.state; 

        fetch ('http://localhost:3050/adminlogin', {
            method: 'Post',
            mode: 'cors', 
            body: JSON.stringify({
                name, 
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
                    this.props.history.push('/');
                    console.log(res.token)
                })
            }
        })
        .catch(error => console.log(error));
    }

    render () {
        return (
            <div>
                <h2>Mon formulaire administrateur</h2>
                <TextField id="outlined-basic" label="My name" variant="outlined" name="name" value= {this.state.name} onChange={this.getData} />
                <TextField id="outlined-basic" label="My password" variant="outlined" name="password" value= {this.state.password} onChange={this.getData} />
                <Button variant="contained" onClick={this.connect}>Default</Button>
            </div>
        )
    }
}

export default withRouter (LogAdmin); 