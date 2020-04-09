import React from 'react'; 
import {withRouter} from 'react-router-dom';
import decode from 'jwt-decode'; 
import Nav from './navBar';
import JwtDecode from 'jwt-decode';

const logStyle = {
    fontSize: "40px",
}

const div = {
    height: '40vh',
    marginTop: '40vh',
}

class Useraccount extends  React.Component {
    
    constructor (props) {
        super (props); 

        let token = localStorage.getItem('token')
        if (!token)
            this.props.history.push('/'); 
        else {
            let decoded =JwtDecode(token); 
            console.log(decoded); 
            if (!decoded.id)
                this.props.history.push('/'); 
        }

    };

    componentDidMount (){
        fetch('http://localhost:3050/userid')
            .then(response => response.json())
            .then(json => console.log(json))
    }

    render (){

        return (
            <div>
                <Nav/>
                <div style={div}>
                    <p style={logStyle}>Hello</p>
                </div>
            </div>
        )
    }
}
export default withRouter (Useraccount);