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
import './../../../css/Mystyle.css';  
import './../css/styleBackOffice.css'; 


class OfficeAdmin extends React.Component {

    constructor (props) {
        super (props); 

        this.state = {
            showAsso : '', 
            showEvent : '', 
        }

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

        this.openAsso = this.openAsso.bind (this); 
        this.removeAsso = this.removeAsso.bind (this); 
        this.openEvent = this.openEvent.bind (this); 
        this.removeEvent = this.removeEvent.bind (this); 
        this.logout = this.logout.bind(this); 
    }; 

    openAsso () {
        this.setState({
            showAsso : true, 
        })
    }; 

    removeAsso () {
        this.setState({
            showAsso : false, 
        })
    };

    openEvent () {
        this.setState({
            showEvent : true, 
        })
    }; 

    removeEvent () {
        this.setState({
            showEvent : false, 
        })
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
                localStorage.removeItem("token"); 
                this.props.history.push('/'); 
                
                console.log('Déconnexion')
            })
            }
        })
        .catch(error => console.log(error));
    }

    render () {

        if (this.state.showAsso === true) {
            return (
                <div>
                    <nav className='navBar'>
                        <Button variant="contained" onClick={this.removeAsso}>Asso</Button>
                        <Button variant="contained" onClick={this.removeEvent}>Event</Button>
                        <Button variant="contained" onClick={this.logout}>Log Out</Button>
                    </nav>
                    <AssoOffice/>
                    <CrudAsso/>
                </div>
            );
        };

        if (this.state.showEvent === true) {
            return (
                <div>
                <nav className='navBar'>
                    <Button variant="contained" onClick={this.removeAsso}>Asso</Button>
                    <Button variant="contained" onClick={this.removeEvent}>Event</Button>
                    <Button variant="contained" onClick={this.logout}>Log Out</Button>
                </nav>
                <EventOffice/>
                <CrudEvent/>
            </div>
            ); 
        }

        else {
            return (
                <div>
                    <nav className='navBar'>
                        <Button variant="contained" onClick= {this.openAsso}>Asso</Button>
                        <Button variant="contained" onClick={this.openEvent}>Event</Button>
                        <Button variant="contained" onClick={this.logout}>Log Out</Button>
                    </nav>
                </div>
            ); 
        }
    }
}

export default withRouter (OfficeAdmin); 