import React, { Component, useState } from 'react';
import {Route, Switch, Link, BrowserRouter as Router, withRouter} from 'react-router-dom'; 
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


class Logout extends React.Component {

    constructor (props) {
        super (props); 

        this.logout = this.logout.bind(this); 
    }

    logout () {
        let token = localStorage.getItem('token'); 
        fetch("http://localhost:3050/logout", {
            method: "get", 
            headers: {
                "Authorization": 'Bearer ' + token
            }
        })
        .then(res => {
            if(res.status == 200){
                res.json().then(res => {
                localStorage.removeItem('token'); 
                this.props.history.push('/'); 
            })
            }
        })
        .catch(error => console.log(error));
    }

    render () {

        return (
            <div>
                <Button variant="contained" type="button" onClick={this.logout}>Déconnexion</Button>
            </div>
        )
    }
}

export default withRouter (Logout); 