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

class FormEvent extends React.Component {

    constructor (props) {
        super (props); 


        this.state = {
            nameEvent: '',
            dateEvent: '', 
            description: '', 
            address : '', 
            events: [] 
        }

        this.handleChange = this.handleChange.bind(this); 
        this.sendEvent = this.sendEvent.bind (this); 
    }

    handleChange = (e) => {

        let ref = e.target.name; 
        let value = e.target.value; 

        this.setState({
            [ref] : value, 
        })
    }

    sendEvent (e) {
        let token = localStorage.getItem('token');

        const newevent = { 
            nameEvent: this.state.nameEvent,
            dateEvent: this.state.dateEvent, 
            address : this.state.address,  
            description: this.state.description
        }; 

        let events = [...this.state.events, newevent]

        fetch ('http://localhost:3050/newevent', {
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
                    this.setState({
                        message: "Done !", 
                        events
                    }); 
                    console.log (res)
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
                    <TextField id="outlined-basic" size="small" label="Nom" variant="outlined" name="nameEvent" value= {this.state.nameEvent} onChange={this.handleChange} />
                    <TextField id="outlined-basic" size="small" type="Date" variant="outlined" name="dateEvent" value= {this.state.dateEvent} onChange={this.handleChange} />
                    <TextField id="outlined-textarea" size="small" label="Description" variant="outlined" multiline name="description" value= {this.state.description} onChange={this.handleChange} />
                    <TextField id="outlined-basic" size="small" label="Adresse" variant="outlined" name="address" value= {this.state.address} onChange={this.handleChange} />
                    <ButtonSave variant="contained" startIcon={<SaveIcon />} onClick={this.sendEvent}>Enregistrer</ButtonSave>
                </div>
            </div>
        )
    }
}

export default withRouter (FormEvent)