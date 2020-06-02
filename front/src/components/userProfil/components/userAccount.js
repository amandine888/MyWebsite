import React from 'react'; 
import { withRouter } from 'react-router-dom';
import JwtDecode from 'jwt-decode';

// import child component : 
import Nav from '../../navBar/components/navBar';

// Style : 
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

    // componentDidMount (){
    //     let token = localStorage.getItem('token');
    //     fetch('http://localhost:3050/users/:id',
    //     {
    //         method: "get", 
    //         headers: {
    //             "Authorization": 'Bearer ' + token
    //         }
    //     })
    //         .then(response => response.json())
    // }

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