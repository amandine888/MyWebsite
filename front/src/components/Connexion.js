import React from 'react'; 
import {withRouter} from 'react-router-dom';
import Login from './FormLogin'; 
import Register from './FormRegister'; 

class Connexion extends React.Component {
    render (){
        return (
            <div>
                <Login/>
                <Register/>
            </div>
        )
    }
}

export default withRouter (Connexion); 