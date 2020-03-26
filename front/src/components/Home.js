import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Nav from './navBar'; 
import Footer from './footer';
import News from './news'; 
import './../mystyle.css';
import DialogSelect from './search';
import Button from '@material-ui/core/Button';

const logStyle = {
    color : 'black',
    width : '70vw',
    height: '50px',
    backgroundColor: '#B75D69',
}

const footerPosition = {
    margin : '0', 
}

class Home extends React.Component {
    
    render () {
        return (
            <div>
                <Nav/>
                <div className = 'headerContainer'>
                    <h2>Bienvenu chez Circé</h2>
                    <DialogSelect/>
                </div>
                <div className= 'sectionHome'>
                    <Button variant="contained" type="button" style={logStyle}>La liste des associations</Button>
                </div>
                <News/>
                <Footer style = {footerPosition}/>
            </div>
        )
    }
}

export default withRouter (Home);