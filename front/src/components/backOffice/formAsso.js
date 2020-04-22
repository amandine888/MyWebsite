import React from 'react'; 
import { withRouter } from 'react-router-dom'; 

// import CSS : 
import './../../Mystyle.css'; 
import './../backOffice/styleBackOffice.css'; 

// Material UI : 
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';

// CSS : 

const ButtonSave = styled(Button)({
    backgroundColor: '#6A9CFD',
})

class FormAsso extends React.Component {

    constructor (props) {
        super (props); 

        this.state = {
            nameAsso: '',
            contact: '', 
            address : '', 
            category: '', 
            description: '', 
        }

        this.handleChange = this.handleChange.bind(this); 
        this.sendAsso = this.sendAsso.bind (this); 
    }

    handleChange = (e) => {

        let ref = e.target.name; 
        let value = e.target.value; 

        this.setState({
            [ref] : value, 
        })
    }

    sendAsso (e) {
        let token = localStorage.getItem('token');

        fetch ('http://localhost:3050/newasso', {
            method: "POST",
            body: JSON.stringify(this.state), 
            headers: {
                "Authorization": 'Bearer ' + token,
                Accept : "application/json", 
                "Content-Type": "application/json"},
        })
        .then(res =>{
            if (res.status == 201){
                res.json().then(res =>{
                    console.log(res); 
                })
            }
            else {
                res.json().then(res =>{
                    console.log(res); 
                })
            }
        })
        .catch(error =>console.log(error)); 
    }


    render() {
        return (
            <div>
                <div className="formStyle">
                    <TextField id="outlined-basic" label="Nom" variant="outlined" name="nameAsso" value= {this.state.nameAsso} onChange={this.handleChange} />
                    <TextField id="outlined-basic" label="Contact" variant="outlined" name="contact" value= {this.state.contact} onChange={this.handleChange} />
                    <TextField id="outlined-basic" label="Adresse" variant="outlined" name="address" value= {this.state.address} onChange={this.handleChange} />
                    <TextField id="outlined-basic" label="Catégorie" variant="outlined" name="category" value= {this.state.category} onChange={this.handleChange} />  
                    <TextField id="outlined-textarea" label="Description" variant="outlined" multiline name="description" value= {this.state.description} onChange={this.handleChange} />
                    <ButtonSave type="submit" variant="contained" startIcon={<SaveIcon />} onClick={this.sendAsso}>Enregistrer</ButtonSave>
                </div>
            </div>
        )
    }
}

export default withRouter (FormAsso)
