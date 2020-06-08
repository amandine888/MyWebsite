import React from 'react'; 
import { withRouter, Link } from 'react-router-dom';
import JwtDecode from 'jwt-decode';

// import child component : 
import Nav from '../../navBar/components/navBar';
import Footer from '../../footer/components/Footer'; 
import UserInfos from '../components/userInfos'; 
import Favorite from '../components/userFavorite'; 

// import CSS : 
import '../../../css/Mystyle.css'; 
import '../css/styleUserprofil.css'; 

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

        this.state = {
            mode : 'info'
        }; 

        let token = localStorage.getItem('token')
        if (!token)
            this.props.history.push('/'); 
        else {
            let decoded =JwtDecode(token); 
            console.log(decoded); 
            if (!decoded.id)
                this.props.history.push('/'); 
        }

        this.clickInfo = this.clickInfo.bind(this); 
        this.clickFavorite = this.clickFavorite.bind(this);

    };

    clickInfo (e) {
        this.setState ({
            mode: 'info'
        }); 
    }

    clickFavorite (e) {
        this.setState ({
            mode: 'favorite'
        }); 
    }

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

        if (this.state.mode === 'info') {
            return (
                <div>
                    <Nav/>
                    <div className="headerContainerBis">
                        <h2>Compte Personnel</h2>
                    </div>
                    <div className='menuPerso'>
                        <button className='selectInfo' type='button' onClick={this.clickInfo}>Informations personnelles</button>
                        <button className='buttonFavorite' type='button' onClick={this.clickFavorite}>Favoris</button>
                    </div>
                    <UserInfos/>
                    {/* <div style={div}>
                        <p style={logStyle}>Hello</p>
                    </div> */}
                    <Footer/>
                </div>
            )
        }
        else {
            return (
                <div>
                    <Nav/>
                    <div className="headerContainerBis">
                        <h2>Compte Personnel</h2>
                    </div>
                    <div className='menuPerso'>
                        <button className='buttonInfo' type='button' onClick={this.clickInfo}>Informations personnelles</button>
                        <button className='selectFavorite' type='button' onClick={this.clickFavorite}>Favoris</button>
                    </div>
                    <Favorite/>
                    {/* <div style={div}>
                        <p style={logStyle}>Hello</p>
                    </div> */}
                    <Footer/>
                </div>
            )
        }
    }
}
export default withRouter (Useraccount);    