import React from 'react'; 
import {withRouter} from 'react-router-dom';
import Login from './formLogin'; 
import Register from './formRegister'; 
import Nav from './navBar';
import Footer from './footer'; 

class Connexion extends React.Component {
    render (){
        return (
            <div>
                <Nav/>
                <Login/>
                <Register/>
                <Footer/>
            </div>
        )
    }
}

export default withRouter (Connexion); 