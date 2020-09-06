import React from "react";
import {withRouter} from "react-router-dom";
import {Formik} from "formik"; 
import registerValidation from "../../../validations/validationRegister"

// import CSS : 
import "../../../css/Mystyle.css"; 
import "./../css/styleForm.css"; 

// Material UI : 
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import { makeStyles } from "@material-ui/core/styles";

// Style : 
const useStyle = makeStyles ({
    root : {
        color : "#B52E2C", 
        fontSize: "0.7em"
    }
});

const logStyle = {
    color : 'black',
    width : '40vw',
    height: '50px',
    backgroundColor: '#B75D69',
    fontWeight: "500",
    padding: "1.5vh 0vw",
    marginTop: "4vh"
};

// Values : 
const initialValues = {
    pseudo: "", 
    email: "", 
    password: "", 
    confirmPassword: ""
};

const Register = (props) => {

    const classes = useStyle();

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={registerValidation}
            onSubmit={(values)=>{
                fetch("http://localhost:3050/register",{
                    headers: {
                        "Accept" : "application/json", 
                        "Content-Type": "application/json"}, 
                    method: "POST", 
                    body: JSON.stringify(values),
                })
                .then((response)=>{
                    if (response.ok) {
                        response.json()
                        .then (console.log);
                        this.props.history.push("/connexion");
                    }
                    else {
                        console.error("server response : " +response.status); 
                    }
                })
                .catch(errors =>{console.error(errors);
                });
                console.log(values);
            }}
        >

        {(props) => {
            const {
                values, 
                errors,
                handleChange,
                handleSubmit, 
                handleBlur,
                isValid,
                dirty,
            } = props; 

            return (
                <form className="formContainer" onSubmit={handleSubmit}>
                    <div className="titleForm">
                        <h2>Inscription</h2>
                    </div>
                    <div className="fieldContainer">
                        <div className="fieldStyle">
                            <label className="styleLabel">Pseudo</label>
                            <input className="styleInput" type="text" name="pseudo" id="pseudo" placeholder="Entrez votre pseudo" value={values.pseudo} onChange={handleChange} onBlur={handleBlur} required/>
                            {errors.pseudo ? <FormHelperText id="component-error-text" className={classes.root}>{errors.pseudo}</FormHelperText> : null}
                        </div>
                        <div className="fieldStyle">
                            <label className="styleLabel">Email</label>
                            <input className="styleInput" type="email" name ="email" id="email" placeholder="Entrez votre email" value={values.email} onChange={handleChange} onBlur={handleBlur} required/>
                            {errors.email ? <FormHelperText id="component-error-text" className={classes.root}>{errors.email}</FormHelperText> : null}
                        </div>
                        <div className="fieldStyle">
                            <label className="styleLabel">Password</label>
                            <input className="styleInput" type="password" name="password" id="password" placeholder="Entrez votre mot de passe" value={values.password} onChange={handleChange} onBlur={handleBlur} required/>
                            {errors.password ? <FormHelperText id="component-error-text" className={classes.root}>{errors.password}</FormHelperText> : null}
                        </div>
                        <div className="fieldStyle">
                            <label className="styleLabel">Confirm Password</label>
                            <input className="styleInput" type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirmez votre mot de passe" value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} required/>
                            {errors.confirmPassword ? <FormHelperText id="component-error-text" className={classes.root}>{errors.confirmPassword}</FormHelperText> : null}
                        </div>
                        <Button variant="contained" type="submit" disabled={!(isValid && dirty)} style={logStyle}>S'inscrire</Button>
                    </div>
                </form>
            )
        }}
        </Formik>
    );
};

export default withRouter (Register); 