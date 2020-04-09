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
        localStorage.removeItem('token'); 
        this.props.history.push('/'); 
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