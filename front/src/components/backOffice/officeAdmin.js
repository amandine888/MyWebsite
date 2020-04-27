import React from 'react';
import { withRouter } from 'react-router-dom'; 
import JwtDecode from 'jwt-decode';

//import child components : 

import AssoOffice from './assoOffice'; 
import EventOffice from './eventOffice'; 
import CrudAsso from './crudAsso'; 
import CrudEvent from './crudEvent'; 

// Material UI : 

import Button from '@material-ui/core/Button';

// import CSS : 
import './../../Mystyle.css'; 
import './../backOffice/styleBackOffice.css'; 


class OfficeAdmin extends React.Component {

    constructor (props) {
        super (props); 

        // Check the connection before : 

        let token = localStorage.getItem ('token'); 
        if (!token) {
            this.props.history.push('/'); 
        }
        else {
            let decoded =JwtDecode(token); 
            console.log(decoded); 
            if (!decoded.id)
                this.props.history.push('/office'); 
        }
    }; 

    render () {
        
        return (
            <div>
                <nav className='navBar'>
                    <Button variant="contained">Asso</Button>
                    <Button variant="contained">Event</Button>
                    <Button variant="contained">Log Out</Button>
                </nav>
                <AssoOffice/>
                <CrudAsso/>
                <EventOffice/>
                <CrudEvent/>
            </div>
        )
    }
}

export default withRouter (OfficeAdmin); 