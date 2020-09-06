import React from "react";
import {withRouter} from "react-router-dom";

// import CSS : 
import "../../../css/Mystyle.css"; 
import "./../css/styleForm.css"; 

// Material UI : 
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import { styled } from '@material-ui/core/styles';

// Style : 
const logStyle = {
    color : 'black',
    width : '40vw',
    height: '50px',
    backgroundColor: '#B75D69',
    fontWeight: "500",
    padding: "1.5vh 0vw",
    marginTop: "4vh"
};

const HelperText = styled(FormHelperText)({
    color : "#B52E2C", 
    fontSize: "0.7em",
})

class Login extends React.Component {

    constructor(props){
        super(props); 

        this.state = {
            email: "",
            password: "", 
            error: "" 
        }; 

        // bind : 

        this.handleChange = this.handleChange.bind(this); 
        this.connect = this.connect.bind(this);  
    }

    // props : 

    handleChange (e) {
        let ref = e.target.name; 
        let value = e.target.value; 

        this.setState ({
            [ref]: value
        });
    }

    connect (e) {
        
        const {email,password} = this.state; 

        fetch ("http://localhost:3050/login", {
            method: "POST",
            mode: "cors", 
            body: JSON.stringify({
                email, 
                password
            }), 
            headers:
            {
                Accept : "application/json", 
                "Content-Type": "application/json"},
        })
        .then((res) =>{
            if (res.status === 400) {
                this.setState ({error: "Mot de passe invalide"}); 
            }
            else {
                console.log(res); 
            }
            if (res.status === 200) {
                res.json().then ((res) => {
                    localStorage.setItem("token", res.token);
                    this.props.history.push("/userAccount");
                    console.log(res.token)
                });
            }
        })
        .catch(error => console.log(error));
    }

    render () {
        return (
            <div>
                <form className="formContainer">
                    <div className="titleForm">
                        <h2>Connexion</h2>
                    </div>
                    <div className="fieldContainer">
                        <div className="fieldStyle">
                            <label className="styleLabel">Email</label>
                            <input className="styleInput" type="email" name="email" id="email" placeholder="Entrez votre email" value = {this.state.email} onChange={this.handleChange} required></input>
                        </div>
                        <div className="fieldStyle">
                            <label className="styleLabel">Mot de passe</label>
                            <input className="styleInput" type="password" name="password" id="password" placeholder="Entrez votre mot de passe" value = {this.state.password} onChange={this.handleChange} required></input>
                            <HelperText id="component-error-text">{this.state.error}</HelperText>
                            <p className='textForm'>Mot de passe oublié ? Cliquez sur ce lien</p>
                        </div>
                        <Button variant="contained" type="submit" onClick={this.connect} style={logStyle}>Se connecter</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter (Login); 